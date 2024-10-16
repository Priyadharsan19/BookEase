// src/components/User/UserDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../../api';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const data = await fetchUserById(id);
        setUser(data);
      } catch (error) {
        console.error('Error fetching user details:', error.message);
      }
    };
    getUserDetails();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed */}
    </div>
  );
}

export default UserDetails;
