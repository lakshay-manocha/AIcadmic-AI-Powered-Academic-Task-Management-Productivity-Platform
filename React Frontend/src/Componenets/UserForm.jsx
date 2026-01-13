import React, { useState } from 'react';
import HeaderComponenet from './Todo-Application/HeaderComponent';
import FooterComponenet from './Todo-Application/FooterComponent';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userId: '',
    password: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.email &&
      formData.userId &&
      formData.password
    ) {
      console.log('User Recorded:', formData);
      setSubmitted(true);
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <>
    <HeaderComponenet />
    <div className="container mt-5">
      <div className="card shadow-lg mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-header bg-primary text-white text-center">
          <h4>User Registration</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">User ID</label>
              <input
                type="text"
                name="userId"
                className="form-control"
                placeholder="Create a user ID"
                value={formData.userId}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>

          {submitted && (
            <div className="alert alert-success mt-4 text-center" role="alert">
              ✅ User is recorded!
            </div>
          )}
        </div>
      </div>
    </div>
    <FooterComponenet />
    </>
  );
};

export default UserForm;
