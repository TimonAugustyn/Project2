import { useState } from 'react'
import axios from 'axios'
import { getUser, resetUserSession } from './service/AuthService';

async function postImage({image, description}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)

  const result = await axios.post('/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  return result.data
}


const Profile = (props) => {
  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])

  const submit = async event => {
    event.preventDefault()
    const result = await postImage({image: file, description})
    setImages([result.image, ...images])
  }

  const user = getUser();
  const name = user !== 'undefined' && user ? user.name : '';

  const logoutHandler = () => {
    resetUserSession();
    props.history.push('login');
  }

  const fileSelected = event => {
    const file = event.target.files[0]
		setFile(file)
	}

  return (
    <div className="Profile">
      <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <input value={description} onChange={e => setDescription(e.target.value)} type="text"></input>
        <button type="submit">Submit</button>
      </form>

      { images.map( image => (
        <div key={image}>
          <img src={image}></img>
        </div>
      ))}
      <div>
      Hello {name}! You are logged in and can start sharing your images! <br/>
      <input type="button" value="Logout" onClick={logoutHandler}/>
    </div>

      <img src="7a3f67c54cc7b85f460620451d64b105"></img>

    </div>
  );
}

export default Profile;
