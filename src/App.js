
import './App.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript bundle
import 'bootstrap/dist/css/bootstrap.min.css';      // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';  // Import Bootstrap Icons (if used)
import NavBar from './layout/Navbar';
import CarouselComponent from './layout/slider';
import WelcomeComponent from './layout/welcomeour';
import AboutHome from './layout/abouthome';
import PopularClasses from './layout/popularclass';
import CounterArea from './layout/CounterArea';
import PortfolioArea from './layout/portfolio';
import BlogArea from './layout/Blog';
import BrandArea from './layout/BrandArea';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CarouselComponent />
      <WelcomeComponent />
      <AboutHome />
      <PopularClasses />
      <CounterArea />
      <PortfolioArea />
      <BlogArea />
      <BrandArea />
      <Footer />
    </div>
  );
}

export default App;
