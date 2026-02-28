import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import InsideProgram from './pages/InsideProgram';
import ReferFriend from './pages/ReferFriend';
import Career from './pages/Career';
import HireEdzaro from './pages/HireEdzaro';
import Platform from './pages/Platform';
import AboutUs from './pages/AboutUs';
import ChatWidget from './components/chatWidget';
import ScrollToTop from './components/ScrollTop';
import IndustrialServices from './pages/IndustrialServices';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/Thankyou';
import EnterpriseSolution from './components/EnterpriseSolution';
import LandingPage from './pages/LandingPage';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import './App.css';

function App () {

  return (
    <Router>
  <div className="App">

    {window.location.pathname !== "/landing-page"  && <Navbar />}
    {/* {!hideNavbar && <Navbar />} */}
    <ScrollToTop />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/:programId" element={<InsideProgram />} />
      <Route path="/refer-and-earn" element={<ReferFriend />} />
      <Route path="/career" element={<Career />} />
      <Route path="/hire-it-talent" element={<HireEdzaro />} />
      <Route path="/learning-platform" element={<Platform />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/industrial-services" element={<IndustrialServices />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="/:any/thank-you" element={<ThankYouPage />} />
      <Route path="/enterprise-solutions" element={<EnterpriseSolution />} />
      <Route path="/registration" element={<ApplicationForm />} />
    </Routes>
    {/* {window.location.pathname !== "/enterprise-solutions" && <Footer />} */}
    <Footer />
    {/*{!hideFooter && <Footer />}*/}
    {/* <ChatWidget /> */}
  </div>
</Router>

  );
}

export default App;

