import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { fetchBookingsApproved } from '../../api';
import Navbar from './../navbar'; 
import './BookingList.css';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      try {
        const data = await fetchBookingsApproved();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error.message);
      }
    };

    getBookings();
  }, []);

  return (
    <div>
      <Navbar /> 
      <div className="booking-container">
        {bookings.map((booking) => (
          <div key={booking._id} className="booking-item">
            <div>
              <h3>{booking.hotelname}</h3>
              <p>Check-in: {booking.checkin}</p>
              <p>Check-out: {booking.checkout}</p>
              <p>Price: ${booking.price}</p>
              {/* Navigation button to booking details */}
              <Link to={`/bookings/${booking._id}`}>
                <button>Buy</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingList;
