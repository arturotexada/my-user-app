import React, { useEffect } from 'react'
import { useState } from 'react';

const UsersForm = ({addUser, userEdit, selectUser, updateUser}) => {
    
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const [birth_visible, setBirth_Visible] = useState("");

    useEffect(() => {
        console.log("Vas a actualizar a: ")
        if(userEdit){ 
            setFirst_Name(userEdit.first_name);
            setLast_Name(userEdit.last_name);
            setEmail(userEdit.email);
            setPassword(userEdit.password);
            setBirthday(userEdit.birthday);
            setBirth_Visible(userEdit.birth_visible)
        } else {
            setFirst_Name("");
            setLast_Name("");
            setEmail("");
            setPassword("");
            setBirthday("");
            setBirth_Visible(false)
        }

    }, [userEdit])

    const submit = evento => {
        evento.preventDefault()
       
            const user = {
                id: Date.now(),
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                birthday: birthday,
                birth_visible: birth_visible
            } 
        if(userEdit){
            updateUser(user);
        } else {
        addUser(user);
        }
    }

  return (
  <div>    
    <form onSubmit={submit}>

        <div className="input-container">
            <label htmlFor='first_name'>Nombre:</label>
            <input 
                type='text' 
                id='first_name'
                onChange={e => setFirst_Name(e.target.value)}
                value={first_name}
            />
        </div>    

        <div className="input-container">
            <label htmlFor='last_name'>Apellido:</label>
            <input 
                type='text' 
                id='last_name'
                onChange={e => setLast_Name(e.target.value)}
                value={last_name}
                />
        </div> 

        <div className="input-container">
            <label htmlFor='email'>Email:</label>
            <input 
                type='text' 
                id='email'
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
        </div> 

        <div className="input-container">
            <label htmlFor='password'>Contraseña:</label>
            <input 
                type='text' 
                id='password'
                onChange={e => setPassword(e.target.value)}
                value={password}
                />
        </div> 

        <div className="input-container">
            <label htmlFor='birthday'>Fecha de Nacimiento:</label>
            <input 
                type='date'   
                id='birthday'
                onChange={e => setBirthday(e.target.value)}
                value={birthday}
                />
        </div> 

        <div className="input-container">
            <label htmlFor='birth_visible'>Cumpleaños Visible</label>
            <input 
                type='checkbox'   
                id='birth_visible'
                onChange={e => setBirth_Visible(e.target.checked)}
                checked={birth_visible}
                />
        </div> 

        <button>
            Submit
        </button>

        {
            userEdit && <button 
                                type="button"
                                onClick={() => selectUser(null)}
                                >
                                 Cancel
                        </button>
        }
    </form>
  </div> 
  )
}
export default UsersForm;