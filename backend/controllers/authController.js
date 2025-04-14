const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Admin.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ token });

  } catch (err) {
    console.error('Login error:', err); // 🔥 log this
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({}, { password: 0 }); // hide passwords
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch admins' });
  }
};

exports.createAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existing = await Admin.findOne({ username });
    if (existing) return res.status(400).json({ message: 'Username already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, password: hashedPassword });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin created successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error creating admin', error: err.message });
  }
};

exports.updateAdmin = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const updated = await Admin.findByIdAndUpdate(
      id,
      { username, password: hashedPassword },
      { new: true }
    );

    res.json({ message: 'Admin updated', updated });
  } catch (err) {
    res.status(400).json({ message: 'Error updating admin', error: err.message });
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.json({ message: 'Admin deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting admin', error: err.message });
  }
};
