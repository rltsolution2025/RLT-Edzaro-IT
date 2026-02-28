import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Partners from "../components/Partners";
import ProgramSection from "../components/CourseData/ProgramSection";
import Advantages from "../components/Advantages";
import Platform from "../components/Platform";
import HiringCompanies from "../components/HiringCompanies/HiringCompanies";
import SuccessStories from "../components/SuccessStories";
import { Helmet } from "react-helmet-async";
import EnquiryPopup from '../components/EnquiryForm/EnquiryFormPopup';
import "./Home.css";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "Courses") {
      const scrollToCourses = () => {
        const section = document.getElementById("Courses");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          setTimeout(scrollToCourses, 100);
        }
      };

      scrollToCourses();
    }
  }, [location]);

  // 🔹 Video refs
  // const videoRef = useRef(null);
  const timerRef = useRef(null);

  // 🔹 Start 16s loop when video plays
  // const handleVideoPlay = () => {
  //   timerRef.current = setTimeout(() => {
  //     const video = videoRef.current;
  //     if (video) {
  //       video.currentTime = 0;
  //       video.play();
  //     }
  //   }, 16000);
  // };

  // 🔹 Clear timer when video pauses / slide changes
  // const handleVideoPause = () => {
  //   clearTimeout(timerRef.current);
  // };

  return (
    <div>
      <Helmet>
        <title>RLT EDZARO | IT Training Institute in Chennai | AI & Cloud Programs</title>
        <meta
          name="description"
          content="RLT EDZARO is an IT training institute in Chennai specializing in AI & Cloud programs, delivered in partnership with TalentSprint (part of Accenture)."
        />
        <link rel="canonical" href="https://rltedzaro.com/" />
      </Helmet>

      <div className="landing-carousel-wrapper">
        <section className="landing-carousel-section">
          <Carousel
            interval={16000}   
            // interval={null}  
            pause={false}
            fade
            indicators
            controls
          >
            {/* 🔹 Video Slide */}
            {/* <Carousel.Item>
              <video
                ref={videoRef}
                className="d-block w-100 landing-video"
                autoPlay
                muted
                playsInline
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
              >
                <source
                  src="/assets/Landings/Landing_Video.mp4"
                  type="video/mp4"
                />
              </video>
            </Carousel.Item> */}

            {/* 🔹 Image Slides */}
            <Carousel.Item>
              <img
                className="d-block w-100 landing-carousel-img"
                src="/assets/Landing_image3.png"
                alt="Slide 2"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 landing-carousel-img"
                src="/assets/Landing_image.png"
                alt="Slide 3"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 landing-carousel-img"
                src="/assets/Landing_image2.png"
                alt="Slide 4"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 landing-carousel-img"
                src="/assets/Landing_image1.png"
                alt="Slide 5"
              />
            </Carousel.Item>
          </Carousel>
        </section>
      </div>

      <EnquiryPopup/>

      <Container className="my-5">
        <Partners />
      </Container>

      <Container id="Courses">
        <ProgramSection />
      </Container>

      <div style={{ backgroundColor: "#90c6f1ff" }}>
        <Container>
          <Advantages />
        </Container>
      </div>

      <div style={{ backgroundColor: "#90c6f1ff" }}>
        <Container fluid className="px-0">
          <Platform />
        </Container>
      </div>

      <Container>
        <HiringCompanies />
      </Container>

      <Container>
        <SuccessStories />
      </Container>
    </div>
  );
};

export default Home;
