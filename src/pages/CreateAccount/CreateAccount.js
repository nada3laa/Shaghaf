import React, { useState } from "react";
import '../../App.css'

import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Sidenav from "../../components/Sidenav";
import AccountList from "./AccountList";










const CreateAccount = () => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [place, setPlace] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [eventDetails, setEventDetails] = useState("");

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handleEventImageChange = (event) => {
    setEventImage(event.target.files[0]);
  };

  const handleEventDetailsChange = (event) => {
    setEventDetails(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", {
      eventName,
      date,
      time,
      price,
      place,
      eventImage,
      eventDetails,
    });
  };

  const handleClearForm = () => {
    setEventName("");
    setDate("");
    setTime("");
    setPrice("");
    setPlace("");
    setEventImage(null);
    setEventDetails("");
  };

  return (
    <div style={{backgroundColor:"#eceff1"}}>
   <Sidenav/>
    <Box height={30} sx={{ direction: "rtl" }} />
      <div>

</div>
    <form onSubmit={handleSubmit} >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="eventName">Full Name:</label>
          <input
            type="text"
            placeholder="Ahmed Mohamed"
            className="form-control"
            id="FullName"
            value={eventName}
            onChange={handleEventNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">password:</label>
          <input
            type="text"
            placeholder="Abc123"
            className="form-control"
            id="pass"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">E_Mail:</label>
          <input
            type="text"
            placeholder="Ahmed123@gmail.com"
            className="form-control"
            id="time"
            value={time}
            onChange={handleTimeChange}
          />
        </div>
      </div>
      <div className=" button-row">
      <button type="submit" className="btn btn-primary event-group " style={{marginBottom:"10px"}}>
        Done
      </button>
      <button type="button" className="btn btn-secondary event-group  " onClick={handleClearForm} style={{marginBottom:"10px"}}>
        ClearAll
      </button>
      </div>
    </form>

    <div>
  
  
  <div className="bgcolor">
    <Box height={30} />
    <Box sx={{ display: "flex" }}>
        <Sidenav/>
     
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>


        <AccountList/>
        
     
        <Box height={10} />
       

      </Box>
    </Box>
  </div>
</div>
    
      

   


  
    </div>
    
  
  );
};

export default CreateAccount;