const Admission = require("../models/Admission");

// POST: Add a new admission
const createAdmission = async (req, res) => {
  try {
    const newAdmission = new Admission(req.body);
    await newAdmission.save();
    res.status(201).json({ message: "Admission submitted successfully!" });
  } catch (error) {
    console.error("Error saving admission:", error);
    res.status(500).json({ error: "Error saving admission" });
  }
};

// GET: Fetch all admissions
const getAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.status(200).json(admissions);
  } catch (error) {
    console.error("Error fetching admissions:", error);
    res.status(500).json({ error: "Error fetching admissions" });
  }
};

// DELETE: Delete an admission by ID
const deleteAdmission = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAdmission = await Admission.findByIdAndDelete(id);
    if (deletedAdmission) {
      return res.status(200).json({ message: "Record deleted successfully" });
    } else {
      return res.status(404).json({ message: "Record not found" });
    }
  } catch (error) {
    console.error("Error deleting record:", error);
    return res.status(500).json({ message: "Error deleting record", error });
  }
};

module.exports = {
  createAdmission,
  getAdmissions,
  deleteAdmission,
};
