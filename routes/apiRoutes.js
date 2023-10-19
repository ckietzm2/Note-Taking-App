// Get route
// Post Route
// Delete Route
const router = require('express').Router();
const uuid = require('../helpers/uuid');

router.get('/notes', (req,res)=>{
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})
router.post('/notes', (req, res) => {
    
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`New Note Added!`);
    } else {
      res.error('Error in adding new note');
    }
  });
  
  module.exports = router;