const express = require('express');
const router = express.Router();
const movesets = require('../services/Movesets');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await movesets.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting tricks moves `, err.message);
    next(err);
  }
});
module.exports = router;

router.post('/', async function(req, res, next) {
    try {
      res.json(await movesets.create(req.body));
    } catch (err) {
      console.error(`Error while creating new move`, err.message);
      next(err);
    }
  });
  
  module.exports = router;

  router.put('/:id', async function(req, res, next) {
    try {
      res.json(await movesets.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating tricking move`, err.message);
      next(err);
    }
  });