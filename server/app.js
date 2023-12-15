const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/qrRoutes');
const app = express();

//middleware
app.use(cors());
app.use(express.json()); //JSOn body
// Apply routes
app.use('/', routes);



const mongoDBUri = 'mongodb://127.0.0.1:27017/qrdb'; 

async function startServer() {
    try {
        await mongoose.connect(mongoDBUri);
        console.log('Connected to MongoDB');

        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

startServer();