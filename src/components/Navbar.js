import React, { useContext } from 'react'
import { WishContext } from '../context/WishProvider'

const Navbar = () => {
    const [wish, setWish] = useContext(WishContext)
  return (
    <nav>
        <div>Wish Bucket</div>
        <div>Wishes: {wish.length}</div>
    </nav>
  )
}

export default Navbar