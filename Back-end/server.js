import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Enable CORS for all origins
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Raj_Restaurant_DB');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB with compass');
});

// Middleware
app.use(bodyParser.json());

// Define MongoDB schemas
const Contact = mongoose.model('Contact', {
    username: String,
    email: String,
    message: String
});

const Reservation = mongoose.model('Reservation', {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    date: String,
    time: String
});

// Routes
app.post('/api/contact/send', async (req, res) => {
    try {
        const { username, email, message } = req.body;
        const newContact = new Contact({ username, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send message' });
    }
});

app.post('/api/reservation/send', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, date, time } = req.body;
        const newReservation = new Reservation({ firstName, lastName, email, phone, date, time });
        await newReservation.save();
        res.status(201).json({ message: 'Reservation created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create reservation' });
    }
});

// Display (Read) all contact on frontend
app.get('/api/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        console.error('Failed to fetch contacts:', error);
        res.status(500).json({ message: 'Failed to fetch contacts' });
    }
});
// Delete contact
app.delete('/api/contact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Contact.findByIdAndDelete(id);
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        console.error('Failed to delete contact:', error);
        res.status(500).json({ message: 'Failed to delete contact' });
    }
});

// Display (Read) all reservation on frontend
app.get('/api/reservations', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (error) {
        console.error('Failed to fetch reservations:', error);
        res.status(500).json({ message: 'Failed to fetch reservations' });
    }
});
//Delete Reservation
app.delete('/api/reservation/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Reservation.findByIdAndDelete(id);
        res.json({ message: 'Reservation deleted successfully' });
    } catch (error) {
        console.error('Failed to delete reservation:', error);
        res.status(500).json({ message: 'Failed to delete reservation' });
    }
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
