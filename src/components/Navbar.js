import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#c1c1ff' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">MERNApplication</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/create-user" className="nav-link">Signin</Link>
            <Link to="/login-user" className="nav-link">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
