import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (data) {
        toast.success(data.message);
        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setDate("");
        setTime("");
        setPhone("");
        alert("Your reservation has been successful");
        // Optionally, redirect to a success page
        navigate("/success");
      } else {
        toast.error("Unexpected response format");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while processing your request");
      }
    }
  };

  return (
    <section className='reservation' id='reservation'>
      <div className='container'>
        <div className='banner1'>
          <img src='./images/reservation1.jpg' alt=''></img>
        </div>
        <div className='banner2'>
          <div className=''>
            <h1>MAKE YOUR RESERVATION</h1>
            <p>For any query Please, <Link to={'/contact'}>Contact Us</Link></p>

            <form onSubmit={handleReservation}>
              <div>
                <input className='form1' type='text' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                <input className='form1' type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </div>
              <div>
                <input className='form1' type='date' placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)} required />
                <input className='form1' type='time' placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)} required />
              </div>
              <div>
                <input className='form1' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input className='form1' type='tel' placeholder='Phone No.' value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <button className='reservebtn' type='submit'>Reserve Now</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Reservation;
