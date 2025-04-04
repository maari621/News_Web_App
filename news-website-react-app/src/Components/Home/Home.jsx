import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import homeimg from "./Images/Home1.png";
import visionImg from "./Images/VisionImage.webp";
import politicsImg from "./Images/Poltics.webp";
import techimg from "./Images/Tech.webp";
import sportsImg from "./Images/Sport.webp";
import feature1 from "./Images/Feature1.webp";
import feature2 from "./Images/Feature2.webp";
import feature3 from "./Images/Feature3.webp";
import contactImg from "./Images/Contact.webp";
import Subscribe from "../Subscribe/Subscribe";
import "./Home.css";

export default function Home() {
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "876719291248422db7bd388300201a4c";
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=india&pageSize=10&apiKey=${apiKey}`
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="body">
      <main className="hero-section mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 p-0">
              <img
                src={homeimg}
                alt="People reading news"
                className="img-fluid rounded shadow p-0"
              />
            </div>
            <div className="col-md-6 p-5">
              <h1 className="display-5 fw-bold">
                Discover <span style={{color:"blueviolet"}}>Your</span> News World
              </h1>
              <p className="lead text-muted">
                Join <strong>NewsHead</strong> today and dive into a
                personalized news journey. Stay updated with stories that matter
                to you and explore a world of information at your fingertips.
              </p>
              <div className="d-flex gap-3 mt-4">
                <button className="btn btn-lg text-white" style={{backgroundColor:"blueviolet"}}>Get Started</button>
                <button className="btn btn-outline-secondary btn-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="latest-news" className="my-5">
        <div className="container">
          <h2 className="text-center mb-4">Latest News</h2>
          <Carousel fade>
            {data.articles
              .filter((article) => article.source.name !== "[Removed]")
              .map((slide, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={slide.urlToImage}
                    className="d-block"
                    alt={slide.title}
                  />
                  <Carousel.Caption>
                    <h3>{slide.title}</h3>
                    <a
                      href={slide.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {slide.description}
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
      </section>

      <div className="container page-vision">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0 p-0">
            <h1 className="display-5 fw-bold">Discover NewsHead's Mission</h1>
          </div>
          <div className="col-md-6">
            <p>
              At NewsHead, we are dedicated to providing a personalized news
              experience that keeps you informed and engaged. Founded in 2023,
              our platform was created to meet the growing demand for tailored
              news consumption in today’s fast-paced media landscape. Our team,
              composed of experienced journalists and tech enthusiasts, works
              diligently to curate the most relevant news articles for our
              users. We value integrity, ensuring accuracy in our reporting, and
              innovation, leveraging technology to enhance your news experience.
              Join us as we strive to deliver news that truly matters to you.
            </p>
          </div>
        </div>
        <img
          className="vision-img mt-5 img-fluid rounded shadow"
          src={visionImg}
          alt=""
        />
      </div>

      <div className="container-fluid categories">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-5 fw-bold">Explore Our Diverse News Categories</h1>
          </div>
          <div className="col-md-6">
            <p className="lead">
              Discover a wide range of news categories tailored to your
              interests. Our platform ensures you stay updated with the latest
              stories that matter to you. Navigate through various sections
              effortlessly and find the news that aligns with your preferences.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card h-100 border-0">
              <img
                src={techimg}
                className="card-img-top img-fluid"
                alt="News"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Technology and Innovation</h5>
                <p className="card-text">
                  Stay ahead with the latest updates in technology and
                  innovation. Explore articles that delve into cutting-edge
                  advancements and trends shaping the future.
                </p>
                <a href="#" className="btn" style={{bordercolor:"10px solid blue"}}>
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0">
              <img
                src={sportsImg}
                className="card-img-top img-fluid"
                alt="News"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Sports Highlights</h5>
                <p className="card-text">
                  Catch up on the latest sports highlights and news. From live
                  scores to in-depth analysis, stay informed about your favorite
                  teams and athletes.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0">
              <img
                src={politicsImg}
                className="card-img-top img-fluid"
                alt="News"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Global Politics</h5>
                <p className="card-text">
                  Get insights into global politics and current affairs. Our
                  articles provide comprehensive coverage of political events
                  and their impact worldwide.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  className="container-fluid mt-5 bg-light features">
      <div className="row p-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-5 fw-bold">Enhance Your News Experience with Us</h1>
          </div>
          <div className="col-md-6">
            <p className="lead">
            At NewsHead, we prioritize a seamless and intuitive user experience. Our platform is designed to make news exploration easy and enjoyable. With personalized news categories and quick access to your favorite articles, staying informed has never been more convenient. Discover a world of information tailored to your interests.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card h-100 border-0">
              <img
                src={feature1}
                className="card-img-top img-fluid"
                alt="News"
                style={{ objectFit: "cover", height: "40vh" }}
              />
              <div className="card-body">
                <h5 className="card-title">Effortless Article Access</h5>
                <p className="card-text">
                Quickly access your favorite articles with just a few clicks. Our platform ensures that your preferred stories are always within reach, enhancing your news reading experience.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0">
              <img
                src={feature2}
                className="card-img-top img-fluid"
                alt="News"
                style={{ objectFit: "cover", height: "40vh" }}
              />
              <div className="card-body">
                <h5 className="card-title">Intuitive Interface Design</h5>
                <p className="card-text">
                Our platform features a clean and intuitive interface, making it easy for users to navigate through personalized news categories and find stories that matter to them.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0">
              <img
                src={feature3}
                className="card-img-top img-fluid"
                alt="News"
                style={{ objectFit: "cover", height: "40vh" }}
              />
              <div className="card-body">
                <h5 className="card-title">Personalized News Categories</h5>
                <p className="card-text">
                Explore news articles tailored to your interests. Our platform offers a personalized experience, ensuring you stay updated on topics that matter most to you.0
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          </div>
      </div> 

      {/* Contact section */}
      <div  className="container-fluid contact">
              <div className="container contact-section1 bg-light border-1">
              <div className="row">
          <div className="col-md-6 mb-4 mb-md-0 p-5">
            <h1 className="display-5 fw-bold">Join NewsHead Today</h1>
            <p className="mt-5">Create your account to unlock personalized news tailored just for you. Stay updated with the latest stories and your favorite topics effortlessly.</p>
            <div className="d-flex gap-3 mt-5">
                <button className="btn button-1 btn-lg">SignUp</button>
                <button className="btn button-2 btn-outline-secondary btn-lg">
                  Home
                </button>
              </div>  
          </div>
          <div className="col-md-6 p-0">
            <img src={contactImg} alt="" />
          </div>
        </div>
       </div>

       <div className="row section-2">
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-5 fw-bold">Save and Access Your Favorite Articles</h1>
          </div>
          <div className="col-md-6 p-0">
            <div className="row">
              <div className="col-md-12">
                  <p>With NewsHead, you can easily save articles that matter to you. Our platform allows you to quickly access your favorite stories anytime, ensuring you stay informed and connected with the news that aligns with your interests.</p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1>Quick Access</h1>
                <p>Retrieve your saved articles with just a click, anytime.</p>
              </div>
              <div className="col-md-6">
                <h1>Quick Access</h1>
                <p>Retrieve your saved articles with just a click, anytime.</p>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="container subscribe ">

          
              <Subscribe/>
        </div>
      </div> 
       



    </div>
  );
}
