import React, { useState, createContext } from "react";

export const WishContext = createContext();
//We create an exportable context accessor for any component that imports this API 

export const WishProvider = ({children}) =>{
    //For the contextProvider to work, components must be passed in this.

    //the contents that are passed in the values of the provider can be accessed by 
    // the children classes. To ensure the classes are children of them, make sure other components of AppJs,
    // is between the ContextAPI 
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

        <WishContext.Provider value={[wishes,setWishes]}>
            {children}
            {/* We do this so, any component that renders this info will render it here
             and use it in their component */}

        </WishContext.Provider>
    )
}