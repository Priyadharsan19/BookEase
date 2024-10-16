// frontend/src/components/Booking/WaitingBookingList.js

import React, { useState, useEffect } from 'react';
import { fetchBookingsWaiting, approveBooking } from '../../api';
import AdminNavbar from './../Adminnavbar';
import './WaitingBookingList.css';

function WaitingBookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      try {
        const data = await fetchBookingsWaiting();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error.message);
      }
    };

    getBookings();
  }, []);

  const handleApprove = async (bookingId) => {
    try {
      await approveBooking(bookingId);
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId ? { ...booking, status: 'approved' } : booking
        )
      );
    } catch (error) {
      console.error('Error approving booking:', error.message);
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="booking-container">
        {bookings.map((booking) => (
          <div key={booking._id} className="booking-item">
            <div>
              <h3>{booking.hotelname}</h3>
              <p>Check-in: {booking.checkin}</p>
              <p>Check-out: {booking.checkout}</p>
              <p>Price: ${booking.price}</p>
              {booking.status === 'waiting' && (
                <button onClick={() => handleApprove(booking._id)}>Approve</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WaitingBookingList;


