// frontend/src/components/Booking/BookingDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookingById } from '../../api';
import './BookingDetails.css'; // Import CSS file

function BookingDetails() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [inputMessage, setInputMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    aadhar: ''
  });

  useEffect(() => {
    const getBookingDetails = async () => {
      try {
        const data = await fetchBookingById(id);
        setBooking(data);
      } catch (error) {
        console.error('Error fetching booking details:', error.message);
      }
    };
    getBookingDetails();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const sendMessage = () => {
    // Handle sending message logic here
    console.log('Message sent:', inputMessage);
    setInputMessage('');
  };

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div className="booking-details-container">
      <div className="left-container">
        <h2 className="booking-details-heading">Booking Details</h2>
        <div className="booking-details-item">
          <span className="booking-details-label">Hotel Name:</span>
          <span className="booking-details-value">{booking.hotelname}</span>
        </div>
        <div className="booking-details-item">
          <span className="booking-details-label">Check-in:</span>
          <span className="booking-details-value">{booking.checkin}</span>
        </div>
        <div className="booking-details-item">
          <span className="booking-details-label">Check-out:</span>
          <span className="booking-details-value">{booking.checkout}</span>
        </div>
        <div className="booking-details-item">
          <span className="booking-details-label">City:</span>
          <span className="booking-details-value">{booking.city}</span>
        </div>
        <div className="booking-details-item">
          <span className="booking-details-label">Price:</span>
          <span className="booking-details-value">{booking.price}</span>
        </div>     
        <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="input-field"
        />
        </div>
        <div><button onClick={sendMessage} className="send-button">Send</button></div>
      </div>
      <div className="right-container">
        <h2 className="booking-details-heading">User Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="booking-details-item">
            <label className="booking-details-label">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="booking-details-input"
            />
          </div>
          <div className="booking-details-item">
            <label className="booking-details-label">Age:</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="booking-details-input"
            />
          </div>
          <div className="booking-details-item">
            <label className="booking-details-label">Phone Number:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="booking-details-input"
            />
          </div>
          <div className="booking-details-item">
            <label className="booking-details-label">Aadhar Number:</label>
            <input
              type="text"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
              className="booking-details-input"
            />
          </div>
          <button type="submit" className="booking-details-submit" onClick={handleSubmit}>
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingDetails;
