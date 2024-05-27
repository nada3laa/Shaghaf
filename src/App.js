import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom";

import Home from './pages/Home';

import AllRooms from './pages/Rooms/AllRooms';
import AddRoom from './pages/Rooms/AddRoom';
import AddEvent from './pages/AddEvent';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Order from './pages/Orders/Order';




// import Maseggs from './pages/Maseggs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" exact element={<Home/>}></Route>  
        <Route path="/AllRooms" exact element={<AllRooms/>}></Route>  
        <Route path="/AddRoom" exact element={<AddRoom/>}></Route>  
        <Route path="/AddEvent" exact element={<AddEvent/>}></Route>
        <Route path="/CreateAccount" exact element={<CreateAccount/>}></Route>
        <Route path="/Order" exact element={<Order/>}></Route>
      
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
