


import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript bundle
import 'bootstrap/dist/css/bootstrap.min.css';      // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';  // Import Bootstrap Icons (if used)
// import NavBar from './Navbar';
// import CarouselComponent from './slider';
import WelcomeComponent from './welcomeour';
import AboutHome from './abouthome';
import PopularClasses from './popularclass';
import CounterArea from './CounterArea';
import PortfolioArea from './portfolio';
import BlogArea from './Blog';
import BrandArea from './BrandArea';
// import Footer from './Footer';

function Home() {
  return (
    <div className="App">
      {/* <NavBar />
      <CarouselComponent /> */}
      <WelcomeComponent />
      <AboutHome />
      <PopularClasses />
      <CounterArea />
      <PortfolioArea />
      <BlogArea />
      <BrandArea />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
