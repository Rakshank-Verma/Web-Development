const express = require('express');
const birds = require('./birds');
const app = express();
const port = process.env.PORT || 80;
// app.use('/birds', birds)

app.use(express.json());

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
]

app.get('/',(req, res)=>{
    res.send("Welcome to my app!!!");
})

app.get('/courses', (req, res)=>{
    res.send(courses);
})

app.get('/courses/:id', (req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID not exist');
    res.send(course);
})

app.post('/courses', (req, res) => {
    const course = {
        id : courses.length + 1,
        name : req.body.name
    };
    courses.push(course);
    res.send(courses);
})

app.put('/courses/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID not exist');

    course.name = req.body.name;
    res.send(courses);
})







app.listen(port, () => {
    console.log(`started at ${port}`)
})