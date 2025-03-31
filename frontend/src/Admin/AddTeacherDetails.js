import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './css/AddTeacherDetails.css'; // Create this CSS file for custom styling

const TeacherDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    email: '',
    phone: '',
    website: '',
    experience: '',
    interviewLink: '',
    aboutMe: '',
    facebookLink: '',
    twitterLink: '',
    instagramLink: '',
    linkedinLink: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.images.length < 3) {
      alert('Please upload at least 3 images.');
      return;
    }

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'images') {
        formData.images.forEach((image) => form.append('images', image));
      } else {
        form.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(https://arjun-academy-ijou.onrender.com/singalteacher', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert(response.data.message);
      setFormData({
        name: '',
        age: '',
        address: '',
        email: '',
        phone: '',
        website: '',
        experience: '',
        interviewLink: '',
        aboutMe: '',
        facebookLink: '',
        twitterLink: '',
        instagramLink: '',
        linkedinLink: '',
        images: [],
      });
    } catch (error) {
      console.error('Error saving teacher details:', error);
      alert('Error saving teacher details. Please try again.');
    }
  };

  return (
    <Container className="form-container my-5">
      <Row className="justify-content-center">
        <Col>
          <Form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
            <h2 className="text-center mb-4">Teacher Details</h2>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                type="number"
                name="age"
                id="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="website">Website</Label>
              <Input
                type="text"
                name="website"
                id="website"
                placeholder="Enter your website"
                value={formData.website}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="experience">Experience</Label>
              <Input
                type="text"
                name="experience"
                id="experience"
                placeholder="Enter your experience"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="interviewLink">Interview Link</Label>
              <Input
                type="text"
                name="interviewLink"
                id="interviewLink"
                placeholder="Enter your interview link"
                value={formData.interviewLink}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="aboutMe">About Me</Label>
              <Input
                type="textarea"
                name="aboutMe"
                id="aboutMe"
                placeholder="Tell us about yourself"
                value={formData.aboutMe}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="facebookLink">Facebook Link</Label>
              <Input
                type="text"
                name="facebookLink"
                id="facebookLink"
                placeholder="Enter your Facebook link"
                value={formData.facebookLink}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="twitterLink">Twitter Link</Label>
              <Input
                type="text"
                name="twitterLink"
                id="twitterLink"
                placeholder="Enter your Twitter link"
                value={formData.twitterLink}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="instagramLink">Instagram Link</Label>
              <Input
                type="text"
                name="instagramLink"
                id="instagramLink"
                placeholder="Enter your Instagram link"
                value={formData.instagramLink}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="linkedinLink">LinkedIn Link</Label>
              <Input
                type="text"
                name="linkedinLink"
                id="linkedinLink"
                placeholder="Enter your LinkedIn link"
                value={formData.linkedinLink}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="images">Images</Label>
              <Input
                type="file"
                name="images"
                id="images"
                multiple
                onChange={handleImageChange}
              />
            </FormGroup>
            <Button color="primary" block>Save Teacher Details</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherDetails;
