const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.get('/admins', authController.getAllAdmins);
router.post('/admins', authController.createAdmin);
router.put('/admins/:id', authController.updateAdmin);
router.delete('/admins/:id', authController.deleteAdmin);

module.exports = router;
