
import React from 'react';

import Box from "@mui/material/Box";

import "../../dash.css";
import RoomList from './RoomList';
import Sidenav from '../../components/Sidenav';

import { Link } from 'react-router-dom';


export default function AllRooms() {
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
