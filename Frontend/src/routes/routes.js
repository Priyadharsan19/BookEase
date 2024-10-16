//frontend/src/routes/routes.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import BookingList from '../components/Booking/BookingList';
import WaitingBookingList from '../components/Booking/WaitingBookingList';
import BookingDetails from '../components/Booking/BookingDetails';
import UserList from '../components/User/UserList';
import UserDetails from '../components/User/UserDetails';
import NotFound from '../components/NotFound';
import CreateBooking from '../components/Booking/CreateBooking'; 

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bookings" element={<BookingList />} />
        <Route path="/booking/waiting" element={<WaitingBookingList />} />
        <Route path="/bookings/create" element={<CreateBooking />} />
        <Route path="/bookings/:id" element={<BookingDetails />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
