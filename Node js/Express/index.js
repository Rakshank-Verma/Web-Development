const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./userRoutes');
const app = express();
const port = 80;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());
app.use('/api/v1',router);

app.get('/', (req, res,)=>{
    res.sendFile(path.join(__dirname +"/index.html"));
})

app.post('/register', (req, res)=>{
    res.send(req.body.username);
})

app.get('/api/v1/userdata', (req, res)=>{
    res.json({
        name: "Harry",
        email: "cwh@gmail.com",
        password: "1234"
    })
})

// app.post('/api/v1/register', (req, res)=>{

//     const userName = req.body.username;
//     const userPassword = req.body.password;
//     console.log(userName);


//     res.json({
//         success: true,
//         name: userName,
//         password: userPassword,
//     });
// })





app.listen(port, ()=>{
    console.log(`Server is working at http://localhost:${port}`);
})