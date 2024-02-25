const express = require('express');
const router = express.Router();
const { fetchAllGigs, addGig, deleteGig, updateGig } = require('../handlers/gigs');

router.get('/', fetchAllGigs);

router.post('/add', addGig)

router.put('/update/:id', updateGig)

router.delete('/delete/:id', deleteGig)

module.exports = router;