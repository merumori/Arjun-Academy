import React, { useEffect, useState } from "react";
import axios from "axios";

const Settings = () => {
  const [admins, setAdmins] = useState([]);
  const [form, setForm] = useState({ username: "", password: "", id: null });
  const [editingPassword, setEditingPassword] = useState(false);

  const getAdmins = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/admins");
      setAdmins(res.data);
    } catch (err) {
      console.error("Failed to fetch admins:", err);
    }
  };

  useEffect(() => {
    getAdmins();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        // Only send password if we're intentionally changing it
        const updateData = { username: form.username };
        if (editingPassword) {
          updateData.password = form.password;
        }
        await axios.put(`http://localhost:5000/api/auth/admins/${form.id}`, updateData);
      } else {
        await axios.post("http://localhost:5000/api/auth/admins", {
          username: form.username,
          password: form.password,
        });
      }
      setForm({ username: "", password: "", id: null });
      setEditingPassword(false);
      getAdmins();
    } catch (err) {
      console.error("Submit failed:", err);
    }
  };

  const handleEdit = (admin) => {
    setForm({ username: admin.username, password: "", id: admin._id });
    setEditingPassword(false);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this admin?");
    if (!confirm) return;
    try {
      await axios.delete(`http://localhost:5000/api/auth/admins/${id}`);
      getAdmins();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Admin Settings</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
          className="form-control mb-2"
        />
        {(!form.id || editingPassword) && (
          <input
            type="password"
            placeholder={form.id ? "New Password (leave blank to keep current)" : "Password"}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="form-control mb-2"
            required={!form.id}
          />
        )}
        {form.id && !editingPassword && (
          <button
            type="button"
            className="btn btn-secondary mb-2"
            onClick={() => setEditingPassword(true)}
          >
            Change Password
          </button>
        )}
        <button type="submit" className="btn btn-primary">
          {form.id ? "Update Admin" : "Add Admin"}
        </button>
        {form.id && (
          <button
            type="button"
            className="btn btn-outline-secondary ms-2"
            onClick={() => {
              setForm({ username: "", password: "", id: null });
              setEditingPassword(false);
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            {/* <th>Password Status</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin._id}>
              <td>{admin.username}</td>
              {/* <td>
                <span className="text-muted">Hashed Password Set</span>
              </td> */}
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(admin)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(admin._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Settings;