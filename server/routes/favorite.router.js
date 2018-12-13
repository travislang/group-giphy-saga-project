const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "favorites"`)
    .then( result => {
        res.send(result.rows)
    }).catch( err => {
        console.log('error in favorite get query:', err);
        res.sendStatus(500);
    })
});

// add a new favorite 
router.post('/', (req, res) => {
    let sqlText = `INSERT INTO "favorites" ("image_url")
    VALUES ($1)`
    pool.query(sqlText, [req.body.image_url])
    .then( result => {
        res.sendStatus(200);
    }).catch( err => {
        console.log('error in post fav query:', err);
        res.sendStatus(500);
    })
  
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
