import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { WishContext } from '../context/WishProvider'
import Addwish from "./Addwish"

const WishNew = () => {
    const [wishes,setWishes] = useContext(WishContext);    //This will grab the values returned from the provider

    //Since im getting an array out of this, I can only get info from a map
        const removeWish = () =>{
            setWishes(
                wishes.filter((item)=>{
                    return item.id != wishes.id;
                })
            )
        }
  return (
    <div>
        <p>Wish Bucket</p>
        {wishes.map(data=>(
            <div>
                <p style={{display: 'inline-block',marginRight: '12px'}}>{data.id}</p>
                <p style={{display: 'inline-block'}}>{data.title}</p>
                <button onclick={removeWish} style={{marginLeft: '12px'}} type='button'>Remove</button>
                
            </div>
        ))} 

        <div>
            <h1>Hello Add a wish</h1>
            <Addwish/>
        </div>

        <div style={{marginTop: '12px'}}>
            <Link to='/' >Back to Standard Context Pass</Link>
        </div>
    </div>
    
  )
}

export default WishNew;