import { onAuthStateChanged, signOut } from 'firebase/auth';
import React , {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';

const HomePage = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(firebase.auth, user =>{
      if(user) navigate('/');
      else navigate('/login')
    })
  },[])


  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log('working')
    const response = await firebase.addBook(name, price, file);
    console.log(response)
  }

  return (
    <div>
       
        HomePage
        <br />
        <button onClick={()=>signOut(firebase.auth)}>Log Out</button><br /><br />

        <form onSubmit={handleSubmit}>

          Enter the book name : <input type="text" name='name' id='name' onChange={e => setName(e.target.value)} value={name}/><br />
          Enter the book no : <input type="text" name="price" id="price" onChange={e => setPrice(e.target.value)} value={price}/><br />
          Choose the photo : <input type="file" name="cover" id="cover" onChange={e => setFile(e.target.files[0])} /> <br />
          <br />
          <button type="submit">AddBook</button>

        </form>
    </div>
  )
}

export default HomePage
