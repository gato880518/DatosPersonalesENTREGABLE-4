

import { useEffect, useState } from 'react'
import './App.css'
import FormUses from './components/FormUses'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'


function App() {

  const [closeForm, setCloseForm] = useState(true)
  
const {
  users, 
  getAllUsers, 
  CreateNewUser, 
  deleteUserById, 
  updateUserById
} =  useCrud()

const [updateInfo, setUpdateInfo] = useState()



useEffect(() => {
  getAllUsers()
  
}, [])




  return (
    <div className="App">
      <h1>Users</h1>
      <button onClick={() => setCloseForm(false)} className='App__btn'>Open Form</button>
      <div className= {`form-container  ${closeForm && 'close__form'}`}>

      <FormUses
      CreateNewUser={CreateNewUser}
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      setCloseForm={setCloseForm}
      />

      </div>
     

      <div className='user-container'>
        {
          users?.map(user => (
            <UserCard
            key={user.id}
            user ={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}

            />
          ))
        }

      </div>
    
    </div>
  )
}

export default App
