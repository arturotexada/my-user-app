import './App.css';
import { useState } from 'react'
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {

  const defaultUsers = [
    {
      id: 1,
      first_name: "Ramón",
      last_name: "Valdez",
      email: "ramón.valdez@hotmail.com",
      password: 7272,
      birthday: "1968-01-06",
      birth_visible: true
    },
    {
      id: 2,
      first_name: "Florinda",
      last_name: "Meza",
      email: "mezajuchi@hotmail.com",
      password: 1470,
      birthday: "1978-03-23",
      birth_visible: false
    }
  ]


const [ users, setUsers ] = useState(defaultUsers);
const [ userEdit, setUserEdit ] = useState(null); {/* 3rd. State */}

const addUser = user => {  // Esta función esta an App porque aqui está el State 
  setUsers([...users, user]); 
}

const deleteUser = id => { 
   const index = users.findIndex(user => user.id === id)
   console.log(index)
   users.splice(index, 1);
   setUsers([...users])
}

const selectUser = user => setUserEdit(user); {/*2nd. Function Selecting*/}

/* const removeUser = id => {
  setUsers(users.filter(user => user.id !== id))
  console.log("El id:", id, "quedó eliminado(a)")
} */

const updateUser = user => {
  console.log("I am updating")
}

  return (
    <div className="App">
      <header className="App-header">
        <UsersForm 
              addUser={addUser}
              userEdit={userEdit} 
              selectUser={selectUser}   
              updateUser={updateUser}  
        />
        
        <UsersList 
              users={users}  
              deleteUser={deleteUser}
              selectUser={selectUser} //* 4th  Props *//
        />

      </header>
    </div>
  );
}

export default App;