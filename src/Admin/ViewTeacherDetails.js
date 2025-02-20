import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container, Row, Col, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useSpring, animated } from "react-spring";
import TeacherDetails from "./AddTeacherDetails"; // Import the TeacherDetails component
import "./css/ViewTeacherDetails.css";

const ViewTeacherDetails = () => {
  const [teachers, setTeachers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/singalteacher");
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, reset: true });

  const toggleModal = () => setModalOpen(!modalOpen);

  const deleteTeacher = async (teacherId) => {
    try {
      await axios.delete(`http://localhost:5000/singalteacher/${teacherId}`);
      setTeachers(teachers.filter((teacher) => teacher._id !== teacherId));
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const getImagePath = (image) => {
    return image ? `http://localhost:5000/${image}` : "/path/to/default-image.jpg";
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Teacher Details List</h2>
      <Button 
        color="success" 
        className="add-new-button d-flex align-items-center justify-content-center" 
        onClick={toggleModal}
      >
        <i className="fas fa-plus mr-2"></i> Add New
      </Button>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>Add New Teacher</ModalHeader>
        <ModalBody>
          <TeacherDetails />
        </ModalBody>
      </Modal>
      <Row>
        <Col sm="12" md="10" lg="8" className="mx-auto">
          <Table striped bordered responsive>
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Images</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Experience</th>
                <th>Social Links</th>
                <th>About</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <animated.tr key={teacher._id} style={fadeIn}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="teacher-images">
                      {teacher.images?.map((img, imageIndex) => (
                        <img
                          key={imageIndex}
                          style={{ width: "50px", marginRight: "10px", borderRadius: "5px" }}
                          src={getImagePath(img)}
                          alt={teacher.name}
                          className="img-fluid"
                          onError={(e) => {
                            e.target.src = "/path/to/default-image.jpg";
                          }}
                        />
                      ))}
                    </div>
                  </td>
                  <td>{teacher.name}</td>
                  <td>{teacher.age}</td>
                  <td>{teacher.address}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.phone}</td>
                  <td>{teacher.website}</td>
                  <td>{teacher.experience}</td>
                  <td>
                    {teacher.facebookLink && (
                      <a href={teacher.facebookLink} target="_blank" rel="noopener noreferrer" className="social-link">
                        Facebook
                      </a>
                    )}
                    {teacher.twitterLink && (
                      <a href={teacher.twitterLink} target="_blank" rel="noopener noreferrer" className="social-link">
                        Twitter
                      </a>
                    )}
                    {teacher.instagramLink && (
                      <a href={teacher.instagramLink} target="_blank" rel="noopener noreferrer" className="social-link">
                        Instagram
                      </a>
                    )}
                    {teacher.linkedinLink && (
                      <a href={teacher.linkedinLink} target="_blank" rel="noopener noreferrer" className="social-link">
                        LinkedIn
                      </a>
                    )}
                  </td>
                  <td>
                    <AboutSection about={teacher.aboutMe} />
                  </td>
                  <td>
                    <button onClick={() => deleteTeacher(teacher._id)} className="btn btn-danger delete-button">
                      Delete
                    </button>
                  </td>
                </animated.tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

const AboutSection = ({ about }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const wordLimit = 10;
  const words = about.split(" ");
  const truncatedText =
    words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "..." : "");

  return (
    <div>
      <p className="text-wrap">{isExpanded ? about : truncatedText}</p>
      {words.length > wordLimit && (
        <button className="btn btn-link read-more-button" onClick={toggleReadMore}>
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ViewTeacherDetails;