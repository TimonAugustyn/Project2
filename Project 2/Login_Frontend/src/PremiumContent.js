import React from 'react';
import { getUser, resetUserSession } from './service/AuthService';

const PremiumContent = (props) => {
  const user = getUser();
  const name = user !== 'undefined' && user ? user.name : '';

  const logoutHandler = () => {
    resetUserSession();
    props.history.push('login');

    const image_input = document.querySelector("#image_input");
    var uploaded_image;
    
    image_input.addEventListener('change', function() {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
      });
      reader.readAsDataURL(this.files[0]);
    });
  }
  return (
    <div>
      Hello {name}! You are logged in and can start sharing your images! <br />
      <input type="button" value="Logout" onClick={logoutHandler} />
    </div>
  )
}

export default PremiumContent;