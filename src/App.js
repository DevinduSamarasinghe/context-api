import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';
import Wishlist from './components/Wishlist'
import WishNew from './components/WishNew';
import { WishProvider } from './context/WishProvider';
const App = () => {
  return (
    <WishProvider>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Wishlist/>}/>
            <Route path="/config" element={<WishNew/>}/>
        </Routes>
    </BrowserRouter>
    </WishProvider>
  )
}

export default App