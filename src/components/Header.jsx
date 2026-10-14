import React from 'react'

const Header = () => {
  return (
    <div className='main-header'>
      <div className='header-container'>
        <div className='header-icon'><i className="fa-solid fa-users"style={{ color: "rgb(177, 151, 252)" }}></i></div>
        <div className='header-details'>
          <h1>User Manager</h1>
          <p>Add and view user details easily</p>
        </div>
      </div>
      <div className='addBtn'>
        <button>Add User</button>
      </div>
      
    </div>
  )
}

export default Header
