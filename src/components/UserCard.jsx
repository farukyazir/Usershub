
import React, { useState } from 'react'

const UserCard = ({ user, deleteUser, updateUser }) => {
  const [isEdit, setIsEdit] = useState(false)

  const [editData, setEditData] = useState({
    name: user.name,
    age: user.age,
    email: user.email,
    number: user.number
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setEditData((previousData) => ({
      ...previousData,
      [name]: value
    }))
  }

  const handleEdit = () => {
    setEditData({
      name: user.name,
      age: user.age,
      email: user.email,
      number: user.number
    })

    setIsEdit(true)
  }

  const handleUpdate = () => {
    updateUser(user.id, editData)
    setIsEdit(false)
  }

  return (
    <div className='all-card'>
      <div className='userdetails-container'>

        <div className='user-logo'>
          <i
            className="fa-regular fa-circle-user"
            style={{
              color: "rgb(29, 219, 161)",
              fontSize: 40
            }}
          ></i>

          <i
            className="fa-solid fa-trash-can trash-icon"
            onClick={() => deleteUser(user.id)}
          ></i>
        </div>

        {isEdit ? (
          <div className='edit-userdetails'>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={editData.name}
              onChange={handleChange}
            />

            <label>Age</label>
            <input
              type="number"
              name="age"
              value={editData.age}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={editData.email}
              onChange={handleChange}
            />

            <label>Mobile Number</label>
            <input
              type="tel"
              name="number"
              value={editData.number}
              onChange={handleChange}
            />

            <button onClick={handleUpdate}>
              Update
            </button>

            <button onClick={() => setIsEdit(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <div className='userdetails'>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Mobile: {user.number}</p>

            <div className='editbtn-container'>
              <button
                className='editBtn'
                onClick={handleEdit}
              >
                Edit
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default UserCard
