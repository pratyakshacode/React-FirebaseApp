import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/Firebase';
import Cards from './Cards';

const BookStore = () => {

    const firebase = useFirebase();
    const [book, setBook] = useState([]);
    useEffect(()=>{
        firebase.listAllBooks().then((books)=>{
            setBook(books.docs)
        })
    },[])
  return (
    <>
    <div><h1>Listing the books</h1></div>

    <div style={{display:'flex'}}>

      {book.map((book)=>{
        return <Cards key= {Math.random()}{...book.data()}/>
      })}
    </div>
   
    </>
  )
}

export default BookStore
