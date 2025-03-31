const express = require("express");
const {
  createAdmission,
  getAdmissions,
  deleteAdmission,
} = require("../controllers/admissionController");

const router = express.Router();

// Route to create a new admission
router.post("/admission", createAdmission);

// Route to fetch all admissions
router.get("/admissions", getAdmissions);

// Route to delete an admission by ID (DELETE request)
router.delete("/admissions/:id", deleteAdmission);

module.exports = router;
