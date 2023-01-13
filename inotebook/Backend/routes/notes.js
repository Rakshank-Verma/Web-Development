const express = require('express');
const Notes = require('../models/Notes')
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const { body, validationResult } = require('express-validator');


// Route 1: Get all notes using GET: '/api/auth/fetchallnotes'. Login Required
router.get('/fetchallnotes',fetchuser, async (req, res)=>{

    try {
        const notes = await Notes.find({user: req.user.id})
        res.json(notes)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Some internal server error occurred")
    }
})

// Route 2: Adding notes using POST: '/api/auth/addnote'. Login Required
router.post('/addnote',fetchuser,[
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({ min: 5 }),
    body('tag', 'Enter a valid tag').isLength({ min: 5 })
] ,async (req, res)=>{

    try {
        const {title, description, tag} = req.body;
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
    
        const savedNote = await note.save()
        
        res.json(savedNote);
        
    } catch (error) {
        res.status(500).send("Some internal server error occurred")
    }

})

// Route 3: Update existing note using PUT: 'api/notes/updatenote'. Login Required
router.put('/updatenote/:id',fetchuser, async (req, res)=>{
    const {title, description, tag} = req.body;

    try {

        const newNote = {};
        if(title){newNote.title = title};
        if(description){newNote.description = description};
        if(tag){newNote.tag = tag};
    
        // Find note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if(!note){
            res.status(404).send("Not Found")
        }
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }
    
        note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true});
        res.json(note);

    } catch (error) {
        res.status(500).send("Some internal server error occurred")
    }
    // Create a newNote object
})

// Route 4: Delete a note using DELETE: '/api/notes/deletenote'. Login Required
router.delete('/deletenote/:id',fetchuser, async (req, res)=>{
    
    try {
        let note = await Notes.findById(req.params.id);
        console.log(note);
        if(!note){
            res.status(404).send("Not Found")
        }
    
        // Allows deletion only if user owns this Note
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }
    
        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({Deletion: 'Successful', note});
    } catch (error) {
        res.status(500).send("Some internal server error occurred")
    }
    // Find note to be deleted and delete it
})

module.exports = router