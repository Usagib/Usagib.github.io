import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Skills = () => (
  <header class="masthead" id="home">
    <div class="container mt-5">
      <span className="project-title">My Skills</span>
    </div>
    <div class="container-fluid d-flex align-items-center mt-3">
        <Carousel fade="true">
          <Carousel.Item>
              <div className="row" style={{
                background: 'url(\'reactmain.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 'auto',
                width: '100vw',
              }}>
                <div className="col-lg-6">
                  <img class="img-fluid fadein" src="service2.png" alt="" />
                </div>
                <div className="col-lg-6 text-left skills-text">
                  <span class="skill-title mt-5">
                    FRONTEND
                  </span>
                  <br />
                  <span class="skill-text mt-5 pr-5">
                    HTML5 CSS3 JavaScript React Redux Bootstrap UI/UX Design Wireframing
                  </span>
                </div>
              </div>
          </Carousel.Item>
          <Carousel.Item>
              <div className="row" style={{
                background: 'url(\'railsmain.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 'auto',
                width: '100vw',
              }}>
                <div className="col-lg-6">
                  <img class="img-fluid fadein" src="service3.png" alt="" />
                </div>
                <div className="col-lg-6 text-left skills-text">
                  <span class="skill-title mt-5">
                    BACKEND
                  </span>
                  <br />
                  <span class="skill-text mt-5 pr-5">
                    Ruby Rails PostgreSQL Database design API development
                  </span>
                </div>
              </div>
          </Carousel.Item>
          <Carousel.Item>
              <div className="row" style={{
                background: 'url(\'designmain.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 'auto',
                width: '100vw',
              }}>
                <div className="col-lg-6">
                  <img class="img-fluid fadein" src="service4.png" alt="" />
                </div>
                <div className="col-lg-6 skills-text pr-5 text-left">
                  <span class="skill-title mt-5">
                    DESIGN
                  </span>
                  <br />
                  <span class="skill-text mt-5">
                    Illustrator Photoshop Inkscape Branding Sketching
                  </span>
                </div>
              </div>
          </Carousel.Item>
        </Carousel>
    </div>
    <div className="container align-items-center mt-3">
      <Link to="/projects">
        <button className="btn btn-next mx-5 fadein fadein-first">Visit my Portfolio</button>
      </Link>
      <a href="https://docs.google.com/document/d/1wDLnDSzeLd2c6ecFKbzIU7bDV_pzq7mbRcmEACvWQLY/edit?usp=sharing" target="_blank">
        <button className="btn btn-next mx-5 fadein fadein-second">Download my Resume</button>
      </a>
      <Link to="/me">
        <button className="btn btn-next mx-5 fadein fadein-third">Get to know Me</button>
      </Link>
    </div>
  </header>
);

export default Skills;
