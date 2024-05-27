
import React from 'react';

import Box from "@mui/material/Box";

import "../dash.css";



import { Link } from 'react-router-dom';
import Sidenav from '../components/Sidenav';
import RoomList from './Rooms/RoomList';


export default function Home() {
  return (
    <div>
  
  
      <div className="bgcolor">
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
            <Sidenav/>
         
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    

            <RoomList/>
            
         
            <Box height={20} />
           

          </Box>
        </Box>
      </div>
    </div>
  )
}
