import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Skills = () => (
  <header class="masthead" id="home">
    <div class="container-fluid d-flex h-100 align-items-center">
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
                <div className="col-lg-8">
                  <img class="img-fluid fadein" src="service2.png" alt="" />
                </div>
                <div className="col-lg-4 text-left">
                  <span class="skill-title mt-5">
                    FRONTEND
                  </span>
                  <br />
                  <span class="skill-text mt-5">
                    HTML5 CSS3 JavaScript React Redux Bootstrap UI/UX Design Wireframing
                  </span>
                  <Link to="/projects">
                    <button className="btn btn-next">Visit my Portfolio</button>
                  </Link>
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
                <div className="col-lg-8">
                  <img class="img-fluid fadein" src="service3.png" alt="" />
                </div>
                <div className="col-lg-4 text-left">
                  <span class="skill-title mt-5">
                    BACKEND
                  </span>
                  <br />
                  <span class="skill-text mt-5">
                    Ruby Rails PostgreSQL Database design API development
                  </span>
                  <Link to="/projects">
                    <button className="btn btn-next">Visit my Portfolio</button>
                  </Link>
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
                <div className="col-lg-8">
                  <img class="img-fluid fadein" src="service4.png" alt="" />
                </div>
                <div className="col-lg-4 pr-5 text-left">
                  <span class="skill-title mt-5">
                    DESIGN
                  </span>
                  <br />
                  <span class="skill-text mt-5">
                    Illustrator Photoshop Inkscape Branding Sketching
                  </span>
                  <Link to="/projects">
                    <button className="btn btn-next">Visit my Portfolio</button>
                  </Link>
                </div>
              </div>
          </Carousel.Item>
        </Carousel>
    </div>
  </header>
);

export default Skills;
