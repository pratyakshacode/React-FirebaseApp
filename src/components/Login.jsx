import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/Firebase'

const Login = () => {

  const navigate = useNavigate();

    const firebase = useFirebase();

  useEffect(()=>{
    onAuthStateChanged(firebase.auth, user =>{
      if(user){
        navigate('/');
      } else navigate('/login')
    })
  },[])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log('login to the user ...')
        const response = await firebase.validateUser(email, password);
        console.log(response);
        console.log('login successfully ...');
    }



    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

  return (
    <>
   
    <div className='App'>
        <form onSubmit={handleSubmit}>
            Enter your Email : <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email}/><br />
            Enter your password : <input type='password' name='password' id='password' onChange={e => setPassword(e.target.value)} value={password}/><br />
            <button type='submit'>Login</button>
        </form>
        <button onClick={()=> firebase.validateGoogle()}>Login With Gmail</button>
    </div>

    </>
  )
}

export default Login
