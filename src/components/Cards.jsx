import React , {useState, useEffect} from 'react'
import { useFirebase } from '../context/Firebase';

const Cards = (props) => {
    const [url, setUrl]= useState(null);
    const firebase = useFirebase();

    useEffect(()=>{
        firebase.getImageURL(props.imageUrl).then((url) => setUrl(url))
    })
  return (
    <>

        <div style={{margin:'10px'}}>

            <div><img style={{height:'300px', width:'300px'}}src={url} /></div>
            <div>Name : {props.name} , Price : {props.price}</div>
        </div>
    </>
  )
}

export default Cards
