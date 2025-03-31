import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTimes, FaSave } from "react-icons/fa"; // Import icons from React Icons
import "./css/EditTeacherModal.css"; // Import the custom CSS for the modal

const EditTeacherModal = ({
  show,
  teacher,
  onClose,
  onChange,
  onImageChange,
  onSave,
}) => {
  if (!show) return null; // Don't render the modal if `show` is false

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content animated fadeIn">
          <div className="modal-header">
            <h5 className="modal-title">Edit Teacher</h5>
            <button type="button" className="close" onClick={onClose}>
              <FaTimes /> {/* Use FaTimes for the close icon */}
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={teacher.name || ""}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Enter teacher's name"
                />
              </div>
              <div className="form-group">
                <label>Position</label>
                <input
                  type="text"
                  name="position"
                  value={teacher.position || ""}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Enter teacher's position"
                />
              </div>
              <div className="form-group">
                <label>Profile Link</label>
                <input
                  type="text"
                  name="profileLink"
                  value={teacher.profileLink || ""}
                  onChange={onChange}
                  className="form-control"
                  placeholder="Enter profile link"
                />
              </div>
              <div className="form-group">
                <label>Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={onImageChange}
                  className="form-control-file"
                />
                {teacher.image && (
                  <img
                    src={teacher.imagePreview || `http://localhost:5000/${teacher.image}`}
                    alt="Teacher"
                    className="img-thumbnail mt-2 preview-img"
                  />
                )}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="btn btn-success" onClick={onSave}>
              <FaSave /> Save  {/* Use FaSave for the save icon */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTeacherModal;
