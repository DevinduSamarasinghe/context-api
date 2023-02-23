import React, {useState} from "react";

import Wish from "./Wish";
import Navbar from "./Navbar";
import WishNew from "./WishNew";
import Addwish from "./Addwish";
import { Link } from "react-router-dom";
export default function Wishlist(){
    const data = [
        {
            id: 1,
            title: "Go skydiving",
        },
        {
            id: 2,
            title: "Go bungee jumping",
        },
        {
            id: 3, 
            title: "Set a new Guinness world record!",
        }
    ];

    const [wishes, setWishes] = useState(data);
    return(
        <>
        <div>
            <Navbar ></Navbar>
            <h3>Coming from Raw Data mapping</h3>
            {data.map((wish)=>{
                return <p>{wish.title} </p>
            })}
        </div>
        <div style={{fontFamily: "monospace"}}>
            <h3>Information from the Local State</h3>
            {wishes.map((wish)=>{
                return <p>{wish.title}</p>
            })}
        </div>
        <div>
            {wishes.map((wish)=>{
                return <Wish wish={wish}/>
                // We can pass information to wish this
            })}
        </div>

        <div>
            
            <Link to='/config'>Context API</Link>
            
        </div>
        </>
    )
}