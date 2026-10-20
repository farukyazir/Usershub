
import React from 'react'
import UserCard from './UserCard'

const UserData = ({ users, deleteUser, updateUser }) => {
  return (
    <div className='user-data'>
      <div className='userdata-header'>
        <h1>Users</h1>
        <p>Total users: {users.length}</p>
      </div>

      <div className='all-cards'>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            updateUser={updateUser}
          />
        ))}
      </div>
    </div>
  )
}

export default UserData
