import React from 'react'

const UserForm = ({setShowForm,setUserName,setUserAge,setUserEmail,setUserNumber,userName,userAge,userEmail,userNumber,addUser}) => {
  return (
    <div className='form-container'>
          <div className='userform'>
      <div className='userform-header'>
        <h1>Add New User</h1>
        <i className= "fa-solid fa-xmark" onClick={()=>setShowForm(false)}></i>
      </div>
      <div className='name-container'>
        <label>Name</label>
        <input type = "text "placeholder='Enter Your Name' value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
      </div>
      <div className='age-container'>
        <label>Age</label>
        <input type='number' placeholder='Enter Your Age' value={userAge} onChange={(e)=>setUserAge(e.target.value)}></input>
      </div>
      <div className='email-container'>
        <label>Email</label>
        <input type='email' placeholder='Enter Your Email' value={userEmail} onChange={(e)=>setUserEmail(e.target.value)}></input>
      </div>
      <div className='mobile-container'>
        <label>Mobile Number</label>
        <input type='number' placeholder='Enter Your Number' value={userNumber} onChange={(e)=>setUserNumber(e.target.value)}></input>
      </div>
      <div className='btn-container'>
        <button className='cancelBtn' onClick={()=> setShowForm(false)}>Cancel</button>
        <button className='addBtn' onClick={addUser}>Add User</button>
      </div>
    </div>
    </div>
  )
}

export default UserForm
