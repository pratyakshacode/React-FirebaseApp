import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'

const Register = () => {

    const firebase = useFirebase();
    const navigate = useNavigate();

    useEffect(()=>{
      onAuthStateChanged(firebase.auth, user =>{
        if(user) navigate('/');
        else navigate('/register');
      })
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        firebase.createUser(email, password);
        
    }

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

  return (
    <>
    <div className='App'>
        <form onSubmit={handleSubmit}>
            Enter your Email : <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email}/><br />
            Enter your password : <input type='password' name='password' id='password' onChange={e => setPassword(e.target.value)} value={password}/><br />
            <button type='submit'>Register</button>
        </form>
    </div>

    </>
  )
}

export default Register
