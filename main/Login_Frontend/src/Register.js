import React, { useState } from 'react';
import axios from 'axios';
/////////////////////////////////////
const regUrl = 'https://qumju8n29l.execute-api.us-east-2.amazonaws.com/prod/register';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const submitHandler = (event) => {
    event.preventDefault();
    //error if any field is empty
    if (username.trim() === '' || email.trim() === '' || name.trim() === '' || password.trim() === '') {
      setMessage('All fields are required');
      return;
    }
    setMessage(null);
    const reqConf = {
      headers: {
        'x-api-key': 'neKKXeqoAs7i724un3NIOaZIm08rP8v37uT8lb4b'
      }
    }
    const reqBody = {
      username: username,
      email: email,
      name: name,
      password: password
    }
    axios.post(regUrl, reqBody, reqConf).then(response => {
      setMessage('Successfully Registered');
    }).catch(error => {
      if (error.response.status === 401 || error.response.status === 403) {
        setMessage(error.response.data.message);
      } else {
        setMessage('The server is down. Please try again after some time has passed.');
      }
    })
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h5>Register</h5>
        {message && <p className="message">{message}</p>}
        name: <input type="text" value={name} onChange={event => setName(event.target.value)} /> <br/>
        username: <input type="text" value={username} onChange={event => setUsername(event.target.value)} /> <br/>
        password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} /> <br/>
        email: <input type="text" value={email} onChange={event => setEmail(event.target.value)} /> <br/>
        <input className="btn" type="submit" value="Register Account" />
      </form>
      
    </div>
  )
}

export default Register;