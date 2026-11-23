//1.Bring express into our file
const express = require('express');

//2.Intialixe the express application
const app = express()

//3.Create your first route
//When someone visits the homepage (localhost:3000), this runs
app.get('/', (req, res) => {
    res.send("Hello Kallu this side! This is my first backend server.")
})

//4.Create an API route that sends data(JSON)
//When someone visits localhost:3000/api/user, this runs:
app.get('/api/user',(req,res) => {
    res.json({
        name:"Kallu Kachori",
        role:"Full stack intern",
        company:"Ricoz Innovation"
    })
})

app.get('/api/internship', (req,res) => {
    res.json({
        duration: "4 months",
        techStack: "MERN",
        startDate: "Nov 27"
    })
})

//5.MIDDLEWARE: This tells Express to read incoming JSON data
app.use(express.json());

//6.MIDDLEWARE: The security Guard (Logs every request)
app.use((req, res, next) => {
    console.log(`A ${req.method} request was made to ${req.url}`)
    next(); //Tell it to move on to the next step!
})

//7.POST ROUTE: Receiving data from the user
app.post('/api/register', (req, res) => {
    //We grab the data teh user sent inside 'req.body'
    const userName = req.body.name;
    const userEmail = req.body.email;

    console.log("New user trying to register: ", userName, userEmail);

    //We send a response back
    res.json({
        messsege:"Registration successful",
        receivedData: req.body
    })
})

//8.Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running! Go to http://localhost:3000")
})