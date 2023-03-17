import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h2>Welcome to Todo App</h2>
      <div className="homepage-buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/sign-up">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
