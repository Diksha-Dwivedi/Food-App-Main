import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';

import chef from './image/download.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    source: 'friends', 
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend API
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      console.log(response.data);
      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        source: 'friends',
        message: '',
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.log(error);
      alert('Form submission failed. Please try again later.');
    }
  };

  return (
    <>
      <div className="container-fluid  contact22">
        <h1 className="contact">CONTACT US</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row g">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12    divi">
            {/* <div className="backimg22"></div> */}

            <img  classname="chefimg" src={chef} alt="chef image"   ></img>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12   contactform">
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <br></br>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="enter your name"
                className="form-control"
              ></input>
              <br></br>
              <br></br>
              <label>Email</label>
              <br></br>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="enter your email"
                className="form-control"
              ></input>
              <br></br>
              <br></br>
              <label>How did you find us</label>
              <br></br>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="form-control"
              >
                <option value="friends">friends</option>
                <option value="search">search</option>
                <option value="advertisement">advertisement</option>
                <option value="other">other</option>
              </select>
              <br></br>
              <br></br>
              <label>Drop us a line</label>
              <br></br>
              <input
                type="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control  feedback"
                placeholder="your Message"
              ></input>
              <br></br>
              <br></br>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg book">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
