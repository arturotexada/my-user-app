import React from 'react'

const UsersList = ({ users, deleteUser, selectUser }) => {
  return (
    
      <ul className='users-list'>
       
       {
          users.map(user => (
          <li key={user.id}>  
           <ul style={{marginBottom: "10px", textAlign: "left"}}>
                <li><b>id: </b>{user.id}</li>
                <li><b>first_name: </b>{user.first_name}</li>
                <li><b>last_name: </b>{user.last_name}</li>
                <li><b>email: </b>{user.email}</li>
                <li><b>password: </b>{user.password}</li>
                <li><b>birthday: </b>{user.birthday}</li>
                <li><b>birth_visible: </b>{user.birth_visible ? "Birthday" : "It is not shown"}</li>
                
                <button 
                    onClick={() => deleteUser(user.id) }>Eliminar  
                </button>

                <button 
                    onClick={() => selectUser( user  ) }>Actualizar
                </button>  {/*// 1st. Button Selecting... */}
           </ul>
           </li> 
          ))
        }

        

      </ul>
    
  );
};

export default UsersList;