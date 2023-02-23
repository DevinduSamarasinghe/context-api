import React, {useState} from 'react'

const Wish = ({wish}) => {
    const [isHover, setHover] = useState(false);
    const handleMouseEnter = ()=>{
        setHover(true);
    }
    const handleMouseLeave = ()=>{
        setHover(false);
    }

    const alignment = {
        display: 'inline-block',
        marginRight: '12px'
    }

    const boxStyle = {
        backgroundColor: isHover ? 'black' : 'rgb(0,191,255)',
        color: isHover? 'red' : 'green',
    };
  return (
    
    <div>
        <h3 style={alignment}>{wish.title}</h3>
        
        <button style={boxStyle} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}> Remove</button>
        
    </div>
  )
}

export default Wish