// frontend/src/api.js

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import BookingList from './components/Booking/BookingList';
import WaitingBookingList from './components/Booking/WaitingBookingList';
import BookingDetails from './components/Booking/BookingDetails';
import UserList from './components/User/UserList';
import UserDetails from './components/User/UserDetails';
import NotFound from './components/NotFound';
import CreateBooking from './components/Booking/CreateBooking';
function App() {
  const [user, setUser] = useState(null);
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/bookings" element={<BookingList />} /> 
      <Route path="/bookings/waiting" element={<WaitingBookingList />} /> 
      <Route path="/bookings/:id" element={<BookingDetails />} />
      <Route path="/bookings/create" element={<CreateBooking />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login />} />
      {user && (
        <>
          {user.isAdmin ? (
            <Route path="/users" element={<UserList />} /> 
          ) : (
            <Route path="/bookings" element={<BookingList />} /> 
          )}
        </>
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
