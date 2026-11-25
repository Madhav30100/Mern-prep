//1.Bring express into our file
const express = require('express');
const dns = require('dns');
dns.setServers(['8.8.8.8','1.1.1.1']);
const cors = require('cors');
require('dotenv').config(); //Loads the .env
const mongoose = require('mongoose'); //Brings in mongoose

//2.Intialixe the express application
const app = express()
app.use(cors());
app.use(express.json()); //Middleware to read JSON bodies

//Connect to MONGODB 
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("✅ Connected to MongoDB successfully!"))
.catch((err) => console.log("❌ MongoDB Connection Error: ",err))

//CREATE A SCHEMA (The rules of our data)
const internshipSchema = new mongoose.Schema({
    duration: String,
    techStack: String,
    startDate: String
})

//CREATE A MODEL (The tool we use to talk to the database)
const Internship = mongoose.model('internship',internshipSchema);

//GET ROUTE: Fetch data FROM the database
app.get('/api/internship',async (req,res) => {
    try{
        const data = await Internship.find(); //Finf everything in the database
        res.json(data[0] || {}); //Send the first item back to React
    }catch(error) {
        res.status(500).json({ error:"Failed to fetch data"});
    }
});

//POST ROUTE: Save mew data TO the database
app.post('/api/internship', async (req, res) => {
    try{
        const newInternship = new internship(req.body);
        await newInternship.save(); //Saves to MongoDB
        res.json({message: "Saved to database!", data: newInternship });
    }catch (error){
        res.status(500).json({ error: "Failed to save data"});
    }
});

//Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

// //3.Create your first route
// //When someone visits the homepage (localhost:3000), this runs
// app.get('/', (req, res) => {
//     res.send("Hello Kallu this side! This is my first backend server.")
// })

// //4.Create an API route that sends data(JSON)
// //When someone visits localhost:3000/api/user, this runs:
// app.get('/api/user',(req,res) => {
//     res.json({
//         name:"Kallu Kachori",
//         role:"Full stack intern",
//         company:"Ricoz Innovation"
//     })
// })

// app.get('/api/internship', (req,res) => {
//     res.json({
//         duration: "4 months",
//         techStack: "MERN",
//         startDate: "Nov 27"
//     })
// })

// //5.MIDDLEWARE: This tells Express to read incoming JSON data
// app.use(express.json());

// //6.MIDDLEWARE: The security Guard (Logs every request)
// app.use((req, res, next) => {
//     console.log(`A ${req.method} request was made to ${req.url}`)
//     next(); //Tell it to move on to the next step!
// })

// //7.POST ROUTE: Receiving data from the user
// app.post('/api/register', (req, res) => {
//     //We grab the data teh user sent inside 'req.body'
//     const userName = req.body.name;
//     const userEmail = req.body.email;

//     console.log("New user trying to register: ", userName, userEmail);

//     //We send a response back
//     res.json({
//         messsege:"Registration successful",
//         receivedData: req.body
//     })
// })

// //8.Start the server on port 3000
// app.listen(3000, () => {
//     console.log("Server is running! Go to http://localhost:3000")
// })