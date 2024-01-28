import React from 'react'
const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find a User'/>
      </div>
      <div className="userChat">
        <img src="https://www.lodj.ma/photo/art/grande/62220707-45162717.jpg?v=1644416085" alt="" />
        <div className="userChatInfo">
          <span>ME</span>
        </div>
      </div>
    </div>
  )
}

export default Search
