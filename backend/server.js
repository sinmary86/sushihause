const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(cors()); // Разрешаем запросы с фронтенда
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://sinmary:IaR2h547@cluster0.9md6z.mongodb.net/bookings?retryWrites=true&w=majority&appName=Cluster0');

const reservingSchema = {
    name: String,
    email: String,
    date: String,
    time: String,
    guests: String,
    message: String
}

const reservingTable = mongoose.model('reservedTable', reservingSchema);

app.get('/api/bookings', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/api/bookings', (req, res) => {
    let newReserving = new reservingTable({
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
    time: req.body.time,
    guests: req.body.guests,
    message: req.body.message
    });

newReserving.save()
    .then(() => {
        console.log("booking saved!");
        res.status(201).json({ success: true, message: "Buchung bestätigt!" });
    })
    .catch(error => {
        console.error("booking error:", error);
        res.status(500).json({ success: false, message: "Fehler bei der Buchung" });
    }); 
});

app.listen(9000, () => {
    console.log('Server is listening on port 9000')
})