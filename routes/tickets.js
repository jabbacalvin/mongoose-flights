const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


// POST /flights/:id/tickets (create tickets for a flight)
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// POST /flights/:id/tickets (create tickets for a flight)
router.post('/flights/:id/tickets/new', ticketsCtrl.create);

module.exports = router;