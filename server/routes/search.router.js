const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    let searchTerm = req.query.term;
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTerm}`)
    .then( response => {
        res.send(response.data)
    }).catch( err => {
        console.log('error in api GET:', err);
        res.sendStatus(500);
    })
})

module.exports = router;