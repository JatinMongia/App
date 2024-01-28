import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
           <span className="logo">ChatApp</span>
           <span className="title">Login </span> 
            <form >
                <input type="email" placeholder='email' />
                <input type="password" placeholder='Password' />
                <button>Sign In</button>
            </form>
            <p>Dont't have an Account? Register</p>
        </div>

    </div>
  )
}

export default Login
