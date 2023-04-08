import React from 'react'
import Navbar from '../Components/Navbar'
import { Route, Routes, } from 'react-router-dom'
import Home from '../Components/Home'
import Shop from '../Components/Shop'
import Like from '../Components/Wishlist'
import Profile from '../Components/profile'
import Singip from '../Components/Singip/index' 
import SingUp from '../Components/SingUp'

function Root() {
  return (
    <>
       <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/shop' element={<Shop/>}/>
       <Route path='/wishlist' element={<Like/>}/>
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/Singip' element={<Singip/>}/>
       <Route path='/SingUp' element={<SingUp/>}/>
       <Route path='/SingUp' />
     </Routes>
    </>
  )
}

export default Root