import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chats</span>
      <div className="user">
      <img src="https://www.lodj.ma/photo/art/grande/62220707-45162717.jpg?v=1644416085" alt="" />
        <span>Jatin</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
