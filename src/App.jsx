import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Buynow from './Components/Buynow'
import Signup from './Components/Signup'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog';
import Gallery from './Pages/Gallery';
import Aboutus from './Components/Aboutus';
import Flight from './Components/Flight';
import Home from './Components/Home';
import Car from './Pages/Car';
import Hotel from './Pages/Hotel';
import Cruises from './Pages/Cruises';
import Homevideo from './Pages/Homevideo';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/Contacts' element={<Contact/>}/>
        <Route path='/Buynow' element={<Buynow/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/Flight' element={<Flight/>}/>
        <Route path='/rentacar' element={<Car/>}/>
        <Route path='/Hotel' element={<Hotel/>}/>
        <Route path='/cruises' element={<Cruises/>}/>
        <Route path='/homevd' element={<Homevideo/>}/>
       </Routes>
</>
  )
}

export default App
