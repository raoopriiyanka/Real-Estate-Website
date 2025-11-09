import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation
import './signup.css'; // We will create this CSS file next

const SignUp = () => {
  
  // 1. Use 'useEffect' to set the document title when the component loads
  useEffect(() => {
    document.title = 'Sign Up - RealtyFind';
  }, []); // The empty array [] means this effect runs only once

  // 2. Use 'useState' to manage all form fields in one object
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // 3. A single handler to update the state for any input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 4. Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the browser from refreshing

    // --- Validation Logic ---
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return; // Stop the function
    }

    // --- API Call Logic ---
    // If passwords match, you would send 'formData' to your backend API
    console.log("Form submitted:", formData);
    // Example: await api.registerUser(formData);
    
    alert("Sign up successful!"); 
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>
        
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName" // 'name' must match the state key
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-secondary">Sign Up</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;