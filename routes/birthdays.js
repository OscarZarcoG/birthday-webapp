// routes/birthdays.js
const express = require('express');
const router = express.Router();
const birthdaysController = require('../controllers/birthdaysController');

router.use(express.urlencoded({ extended: true }));

router.get('/', birthdaysController.getAllBirthdays);
router.get('/:month', birthdaysController.filterByMonth);

module.exports = router;