import React, { useState } from "react";
import '../App.css'
import Sidenav from "../components/Sidenav";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
const AddEvent = () => {
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
    <div>
    <Sidenav/>
    <Box height={65} sx={{ direction: "rtl" }} />
<div>
<Link to='/AllRooms'>
  <button className='btn btn-primary add-button' style={{marginLeft:"900px"}}>Back</button>
</Link>
</div>
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            value={eventName}
            onChange={handleEventNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            className="form-control"
            id="time"
            value={time}
            onChange={handleTimeChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="place">Place:</label>
          <input
            type="text"
            className="form-control"
            id="place"
            value={place}
            onChange={handlePlaceChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventImage">Event Main Image:</label>
          <input
            type="file"
            className="form-control-file"
            id="eventImage"
            onChange={handleEventImageChange}
          />
        </div>
        </div>
       
      <div className="form-group event-group">
        <label htmlFor="eventDetails">Events Details:</label>
        <textarea
          className="form-control"
          id="eventDetails"
          value={eventDetails}
          onChange={handleEventDetailsChange}
        />
      </div>
      <div className=" button-row">
      <button type="submit" className="btn btn-primary event-group ">
        Done
      </button>
      <button type="button" className="btn btn-secondary event-group  " onClick={handleClearForm}>
        ClearAll
      </button>
      </div>
    </form>
    </div>
  
  );
};

export default AddEvent;