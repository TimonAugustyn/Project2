import React, {useState} from 'react';
import axios from 'axios';
import { setSession } from './service/AuthentService'
const loginAPIUrl = 'https://qumju8n29l.execute-api.us-east-2.amazonaws.com/prod/login';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setError] = useState(null);
  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('Username or password is missing.');
      return;
    }
    setError(null);
    const requestConfig = {
      headers: {
        'x-api-key': 'neKKXeqoAs7i724un3NIOaZIm08rP8v37uT8lb4b'
      }
    }
    const requestBody = {
      username: username,
      password: password
    }
    axios.post(loginAPIUrl, requestBody, requestConfig).then((response) => {
      setSession(response.data.user, response.data.token);
      props.history.push('./profile');
    }).catch((error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        setError(error.response.data.message);
      } else {
        setError('The server is offline. Please try again at a later time.');
      }
    })
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h5>Login</h5>
        username: <input type="text" value={username} onChange={event => setUsername(event.target.value)} /> <br/>
        password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} /> <br/>
        <input className="btn" type="submit" value="Login" />
      </form>
      {errorMessage && <p className="message">{errorMessage}</p>}
    </div>
  )
}

export default Login;