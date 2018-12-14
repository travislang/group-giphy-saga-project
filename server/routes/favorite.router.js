const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
    pool.query(`SELECT "favorites"."id",        "favorites"."image_url", "favorites"."category_id",    "category"."name" FROM "favorites"
    LEFT OUTER JOIN "category" ON "category"."id" = "favorites"."category_id";`)
        .then(result => {
            res.send(result.rows)
        }).catch(err => {
            console.log('error in favorite get query:', err);
            res.sendStatus(500);
        })
});

// add a new favorite
router.post('/', (req, res) => {
    let sqlText = `INSERT INTO "favorites" ("image_url")
    VALUES ($1)`
    pool.query(sqlText, [req.body.image_url])
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log('error in post fav query:', err);
            res.sendStatus(500);
        })

});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
    let categoryId = req.body.catId;
    let favId = req.params.favId;
    let sqlText = `UPDATE "favorites" SET "category_id" = $1
    WHERE "id" = $2;`;
    pool.query(sqlText, [categoryId, favId])
        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            console.log('error updating favorite:', err);
            res.sendStatus(200);
        })
});

// delete a favorite
router.delete('/:id', (req, res) => {

    let sqlText = `DELETE FROM "favorites" WHERE "id"=$1;`;
    pool.query(sqlText, [req.params.id])
    .then ( () => {
        res.sendStatus(200);
    })
    .catch ( err => {
        console.log('ERROR deleting in DB:', err);
        res.sendStatus(500)
    })
});

module.exports = router;
