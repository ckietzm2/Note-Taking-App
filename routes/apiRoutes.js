const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const noteID = require('../helpers/uuid');

// GET Route for retrieving all the router
router.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
router.post('/notes', (req, res) => {
  console.log(req.body);

  const { title, text} = req.body;

  if (req.body) {
    const newComment = {
      title,
      text,
      noteID:noteID(),
    };

    readAndAppend(newComment, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding new note');
  }
});

module.exports = router;