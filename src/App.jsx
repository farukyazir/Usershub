import React, { useState } from 'react'
import "./App.css"
import Header from './components/Header'
import UserForm from './components/UserForm'
import UserData from './components/UserData'

const App = () => {
  const[showForm,setShowForm] = useState(false)
  const[userName,setUserName]=useState("")
  const[userAge,setUserAge]=useState("")
  const[userEmail,setUserEmail]=useState("")
  const[userNumber,setUserNumber]=useState("")
  const[users,setUsers]=useState([])

  const addUser=()=>{
    const newUser ={
      id:Date.now(),
      name:userName,
      age:userAge,
      email:userEmail,
      number:userNumber
    }
    setUsers([...users,newUser])
    setUserName("")
    setUserAge("")
    setUserEmail("")
    setUserNumber("")
    setShowForm(false)
  }
  const deleteUser=(id)=>{
    setUsers(users.filter((user)=>user.id!=id))
  }
  const updateUser = (id, updatedData) => {
  setUsers((previousUsers) =>
    previousUsers.map((user) =>
      user.id === id
        ? { ...user, ...updatedData }
        : user
    )
  )
}
  return (
    <div>
      <Header setShowForm={setShowForm}/>
      {showForm&& (<UserForm setShowForm={setShowForm} setUserName={setUserName} setUserAge={setUserAge} setUserEmail={setUserEmail} setUserNumber={setUserNumber} userName={userName} userAge={userAge} userEmail={userEmail} userNumber={userNumber} addUser={addUser}/>)}
      
      <UserData  users={users} deleteUser={deleteUser} updateUser={updateUser}/>
      
    </div>
  )
}

export default App
