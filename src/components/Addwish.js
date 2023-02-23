import React, { useContext, useState } from 'react'
import { WishContext } from '../context/WishProvider'

const Addwish = () => {
    const [wish, setWish] = useContext(WishContext);
    const [title,setTitle] = useState("")

    const updateTitle = (e)=>{
        setTitle(e.target.value);
    }

    const addWish = (e)=>{
        e.preventDefault();
        setWish((prevWish)=>[
            ...prevWish,    //Spreading out and creating an array of all the previous states
            {title: title, id: prevWish[prevWish.length -1].id + 1}
        ]);
        setTitle("")
    }
  return ( 
    
    <form>
        <label for="title">Add a new Wish</label>
        <input type="text" placeholder='Add a new Wish' name='title' onChange={(e)=>{
            setTitle(e.target.value);
        }}></input>
        <button onClick={addWish}>Add a Wish</button>
    </form> 
  )
}

export default Addwish