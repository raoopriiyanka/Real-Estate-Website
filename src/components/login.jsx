import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './login.css'; // This import remains .css

const Login = () => {

  // 1. useEffect to set the document title
  useEffect(() => {
    document.title = 'Login - RealtyFind';
  }, []);

  // 2. useState for form fields
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // 3. useNavigate hook to redirect after login
  const navigate = useNavigate();

  // 4. Handler for input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 5. Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // --- API Call Logic ---
    // Here you would send 'formData' to your backend API for authentication
    console.log("Login attempt with:", formData);
    // Example: const user = await api.loginUser(formData);

    // If login is successful:
    alert("Login successful! Redirecting to homepage.");
    navigate('/'); // Redirect the user to the homepage
    
    // If login fails, you would show an error message
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back!</h2>
        <p className="form-subtitle">Login to your RealtyFind account.</p>
        
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

        <button type="submit" className="btn btn-secondary">Login</button>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;