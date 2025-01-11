import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Container, Row, Col } from 'reactstrap'; // Removed unused imports (Card, CardBody, CardTitle)
import { useSpring, animated } from 'react-spring'; // For animation
import './css/ViewTeacherDetails.css'; // Ensure you have the appropriate CSS

const ViewTeacherDetails = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/singalteacher');
        setTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchTeachers();
  }, []);

  const getImagePath = (image) => {
    return image ? `http://localhost:5000/${image}` : '/path/to/default-image.jpg';
  };

  // Animation for table rows
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, reset: true });

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Teacher Details List</h2>
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
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <animated.tr key={teacher._id} style={fadeIn}>
                  <td>{index + 1}</td> {/* Display row number starting from 1 */}
                  <td>
                    <div className="teacher-images">
                      {teacher.images?.map((img, imageIndex) => (
                        <img
                          key={imageIndex}
                          style={{ width: '50px', marginRight: '10px', borderRadius: '5px' }}
                          src={getImagePath(img)}
                          alt={teacher.name}
                          className="img-fluid"
                          onError={(e) => {
                            e.target.src = '/path/to/default-image.jpg';
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
                      <a
                        href={teacher.facebookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        Facebook
                      </a>
                    )}
                    {teacher.twitterLink && (
                      <a
                        href={teacher.twitterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        Twitter
                      </a>
                    )}
                    {teacher.instagramLink && (
                      <a
                        href={teacher.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        Instagram
                      </a>
                    )}
                    {teacher.linkedinLink && (
                      <a
                        href={teacher.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        LinkedIn
                      </a>
                    )}
                  </td>
                  <td>{teacher.aboutMe}</td>
                </animated.tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewTeacherDetails;
