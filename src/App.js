import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript bundle
import 'bootstrap/dist/css/bootstrap.min.css';      // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';  // Import Bootstrap Icons (if used)

import NavBar from './layout/Navbar';
import Home from './layout/Home';
import About from './page/About';
import CarouselComponent from './layout/slider';
import Footer from './layout/Footer';
import Teachers from './page/Teachers';
import TeacherDetails from './page/TeacherDetails';
import Classes from './page/class';
import ContactSection from './page/Contect';
import BlogContentArea from './page/StudentBlog';
import AdmissionForm from './page/AdmissionForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Routes with NavBar, Carousel, and Footer */}
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <CarouselComponent />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <NavBar />
                <CarouselComponent />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/teachers"
            element={
              <>
                <NavBar />
                <CarouselComponent />
                <Teachers />
                <Footer />
              </>
            }
          />
          <Route
            path="/teacherDetails"
            element={
              <>
                <NavBar />
                <CarouselComponent />
                <TeacherDetails />
                <Footer />
              </>
            }
          />
          <Route
            path="/class"
            element={
              <>
                <NavBar />
                <CarouselComponent />
                <Classes />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <NavBar />
                <CarouselComponent />
                <ContactSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/StudentBlog"
            element={
              <>
                <NavBar />
                <CarouselComponent />
                <BlogContentArea />
                <Footer />
              </>
            }
          />
          {/* Admission route without NavBar, Carousel, and Footer */}
          <Route path="/admission" element={<AdmissionForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
