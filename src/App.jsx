import { useState } from 'react'
import { useUsers } from './hooks/useUser.jsx';
import UserForm from './components/UserForm.jsx';
import UserList from './components/UserList.jsx';
import {users,addUser,deleteUser,updateUser} from "../services/UseService.jsx";
function App() {
const {users,addUser,deleteUser,updateUser}=useUsers();
const [editUser,setEditUser]=useState(null);

const handleSubmit=(data)=>{
  if(editUser){
    updateUser(editUser.id,data);
    setEditUser(null);
  }
  else{
    addUser(data);
  }
};

  return (
    <>
      <div>
      <h1 className='head'>My React CRUD Practice Page</h1>  
      <UserForm onSubmit={handleSubmit} editUser={editUser} />
      <UserList users={users} onEdit={setEditUser} onDelete={deleteUser} />

      </div>
    </>
  )}

export default App
