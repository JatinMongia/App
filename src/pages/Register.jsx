import React from 'react'
import Add from "../img/addAvatar.png"
const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
           <span className="logo">ChatApp</span>
           <span className="title">Register </span> 
            <form >
                <input type="text" placeholder=' Name'/>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='Password' />
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
              <span>Add Your Avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p> Have an Account? Login</p>
        </div>

    </div>
  )
}

export default Register
