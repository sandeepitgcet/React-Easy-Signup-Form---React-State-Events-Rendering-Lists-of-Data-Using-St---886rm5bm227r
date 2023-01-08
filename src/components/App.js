import React, { useState } from 'react'
import '../styles/App.css';
import { signUpFormValidation, isEmailAddress } from '../utils/validation';


const App = () => {
  const [error, setError] = useState({name:"",email:"", password:""});
  const [consent, setConsent] = useState(false);
  const validateForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
      data[key] = value;
    }
    setError(signUpFormValidation(data));
  
}
  return (
    <>
        <h1>Sign Up Form</h1>
        <form onSubmit={validateForm}>
            <label htmlFor='name'>Name: </label>
            <input type="text" id='name' name='name' placeholder='Name' /><br />
            {error.name} <br />

            <label htmlFor='email'>Email: </label>
            <input type='text' id='email' name='email' placeholder='Email' /><br />
            {error.email} <br />

            <label htmlFor='password'>Password: </label>
            <input type="password" id='password' name='password' placeholder='Password' /><br />
            {error.password} <br />

            <label htmlFor='consent'>Consent:</label>
            <input type='checkbox' id='consent' onChange={()=>{setConsent(!consent)}} value={consent}/><br />

            <button type='submit' >Signup</button>
        </form>
    </>
  )
}


export default App;
