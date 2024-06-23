import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [reservations, setReservations] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/api/contacts')
    .then((res)=>{
      setContacts(res.data)
    })
  },[])

  useEffect(()=>{
    axios.get('http://localhost:4000/api/reservations')
    .then((res)=>{
      setReservations(res.data)
    })
  },[])

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/contact/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  const deleteReservation=async (id)=>{
    try {
      await axios.delete(`http://localhost:4000/api/reservation/${id}`)
      setReservations(reservations.filter(reservation => reservation._id !== id)); 
    } catch (error) {
      console.log("Failed to delete Reservation", error)
    }
  }

  return (
    <div>
      <h2>Contact Messages</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.username}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>
                <button onClick={() => deleteContact(contact._id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.firstName}</td>
              <td>{reservation.lastName}</td>
              <td>{reservation.email}</td>
              <td>{reservation.phone}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>
                <button onClick={()=>deleteReservation(reservation._id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
