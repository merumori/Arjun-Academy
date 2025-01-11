import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "./layout/Navbar";
import Home from "./layout/Home";
import About from "./page/About";
import CarouselComponent from "./layout/slider";
import Footer from "./layout/Footer";
import Teachers from "./page/Teachers";
import TeacherDetails from "./page/TeacherDetails";
import Classes from "./page/class";
import ContactSection from "./page/Contect";
import BlogContentArea from "./page/StudentBlog";
import AdmissionForm from "./page/AdmissionForm";
import Admin from "./Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
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
       
          <Route path="/admission" element={<AdmissionForm />} />

          {/* Admin Panel */}
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
