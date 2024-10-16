const API_BASE_URL = 'http://localhost:8800/backend';

// Authentication Endpoints
export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    });
    if (!response.ok) {
      throw new Error('Registration failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Booking Endpoints
export const fetchBookingsApproved = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/booking/approved`);
    if (!response.ok) {
      throw new Error('Failed to fetch bookings');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchBookingsWaiting = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/booking/waiting`);
    if (!response.ok) {
      throw new Error('Failed to fetch bookings');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchBookingById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/booking/getbyid/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch booking details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/booking/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    });
    if (!response.ok) {
      throw new Error('Failed to create booking');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const approveBooking = async (bookingId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/booking/approve/${bookingId}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });
    if (!response.ok) {
      throw new Error('Failed to approve booking');
    }
    const data = await response.json(); // Parse response data
    return data; 
    } catch (error) {
    throw error;
  }
};

export const updateBooking = async (id, updatedBookingData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/booking/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedBookingData)
    });
    if (!response.ok) {
      throw new Error('Failed to update booking');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteBooking = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/booking/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete booking');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// User Endpoints
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchUserById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, updatedUserData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUserData)
    });
    if (!response.ok) {
      throw new Error('Failed to update user');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete user');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};


