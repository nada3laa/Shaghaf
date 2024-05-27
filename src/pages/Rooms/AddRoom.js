import React, { useState } from "react";
import '../../App.css'

import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Sidenav from "../../components/Sidenav";
const AddRoom = () => {
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

  const [formState, setFormState] = useState({
    roomName: 'Meeting Room',
    place: '60.0 EGP/ hour',
    numberOfSeats: '30',
    amenities: 'Wi-Fi',
    amenitiesPlace: 'Roxy',
    roomMainImage: '',
    amenitiesImage: '',
    privacy: 'Private',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
        ...prevState,
        [name]: value
    }));
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
          <label htmlFor="eventName">Room Name:</label>
          <input
            type="text"
            placeholder="Meeting Room"
            className="form-control"
            id="eventName"
            value={eventName}
            onChange={handleEventNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Place:</label>
          <input
            type="text"
            placeholder="60.0EGP/hour"
            className="form-control"
            id="text"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Number Of Seats</label>
          <input
            type="number"
            placeholder="30"
            className="form-control"
            id="seats"
            value={time}
            onChange={handleTimeChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="price">Amenities:</label>
          <input
            type="text"
            placeholder="Wi-Fi"
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
            placeholder="Roxy"
            id="place"
            value={place}
            onChange={handlePlaceChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventImage">Room Main Image:</label>
          <input
            type="file"
            className="form-control-file"
            id="eventImage"
            onChange={handleEventImageChange}
          />
        </div>
        
        </div>
       

<div className="form-row">
        <div className="form-group">
          <label htmlFor="eventName">Amenities Image:</label>
          <input
            type="file"
            className="form-control"
            id="eventName"
            value={eventName}
            onChange={handleEventNameChange}
          />
        </div>
        <div className="form-group">
                <label>Privacy</label>
                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            name="privacy"
                            value="Private"
                            checked={formState.privacy === 'Private'}
                            onChange={handleChange}
                        />
                        Private
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="privacy"
                            value="Shared"
                            checked={formState.privacy === 'Shared'}
                            onChange={handleChange}
                        />
                        Shared
                    </label>
                </div>
            </div>
        <div className="form-group">
          <label htmlFor="time">Upload Image</label>
          <input
            type="file"
            className="form-control"
            id="seats"
           
            value={time}
            onChange={handleTimeChange}
          />
        </div>
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

export default AddRoom;