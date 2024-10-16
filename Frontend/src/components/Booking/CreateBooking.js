import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { createBooking } from '../../api';
import './CreateBooking.css';

function CreateBooking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hotelname: '',
    bookingid: '',
    checkin: '',
    checkout: '',
    city: '',
    address: '',
    desc: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createBooking(formData);
      if (!response || response.error) {
        throw new Error('Failed to create booking');
      }
      setFormData({
        hotelname: '',
        bookingid: '',
        checkin: '',
        checkout: '',
        city: '',
        address: '',
        desc: '',
        price: '',
      });
      navigate('/bookings');
    } catch (error) {
      console.error('Error creating booking:', error.message);
      alert('Failed to create booking. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Create Booking</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Hotel Name:
          <input
            type="text"
            name="hotelname"
            value={formData.hotelname}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Booking ID:
          <input
            type="text"
            name="bookingid"
            value={formData.bookingid}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Check-in:
          <input
            type="date"
            name="checkin"
            value={formData.checkin}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Check-out:
          <input
            type="date"
            name="checkout"
            value={formData.checkout}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateBooking;
