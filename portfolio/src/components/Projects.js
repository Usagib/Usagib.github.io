import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Projects = () => (
  <header class="masthead">
      <div className="container-fluid h-100 justify-items-center mt-5 pt-5">
        <span className="project-title ml-5">Featured Projects</span>
        <Carousel fade="true">
          <Carousel.Item>
            <div class="row align-items-center no-gutters">
              <div class="col-xl-8 col-lg-7">
                <img class="img-fluid mb-3 mb-lg-0" src="giro.png" alt="" />
              </div>
              <div class="col-xl-4 col-lg-5">
                <div class="featured-text text-center text-lg-left">
                  <h2 className="project-title">Giro The Game</h2>
                  <p className="project-subtitle">Action Platformer</p>
                  <p class="project-text mb-0">
                    This app uses the official Magic the Gathering Card Game API to fetch card details regarding any search by name and text
                  </p>
                  <p class="tech-text mb-0">
                    CSS3 JavaScript React Redux Bootstrap
                  </p>
                  <div className="mt-5">
                    <button className="btn btn-live"> Mobile Demo </button>
                    <button className="btn btn-live"> Check the Code </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="row align-items-center no-gutters">
              <div class="col-xl-8 col-lg-7">
                <img class="img-fluid mb-3 mb-lg-0" src="booking.png" alt="" />
              </div>
              <div class="col-xl-4 col-lg-5">
                <div class="featured-text text-center text-lg-left">
                  <h2 className="project-title">Bookme Portfolio</h2>
                  <p className="project-subtitle">Portfolioapp</p>
                  <p class="project-text mb-0">
                    This app uses the official Magic the Gathering Card Game API to fetch card details regarding any search by name and text
                  </p>
                  <p class="tech-text mb-0">
                    CSS3 JavaScript React Redux Bootstrap
                  </p>
                  <div className="mt-5">
                    <button className="btn btn-live"> Mobile Demo </button>
                    <button className="btn btn-live"> Check the Code </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="row align-items-center no-gutters">
              <div class="col-xl-8 col-lg-7">
                <img class="img-fluid mb-3 mb-lg-0" src="gthr.png" alt="" />
              </div>
              <div class="col-xl-4 col-lg-5">
                <div class="featured-text text-center text-lg-left">
                  <h2 className="project-title">GTHR</h2>
                  <p className="project-subtitle">Card Game catalog app</p>
                  <p class="project-text mb-0">
                    This app uses the official Magic the Gathering Card Game API to fetch card details regarding any search by name and text
                  </p>
                  <p class="tech-text mb-0">
                    CSS3 JavaScript React Redux Bootstrap
                  </p>
                  <div className="mt-5">
                    <button className="btn btn-live"> Mobile Demo </button>
                    <button className="btn btn-live"> Check the Code </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <div class="row justify-content-center no-gutters mt-5 mb-5 mb-lg-0">
          <div class="col-lg-3"><img class="img-fluid" src="proj1.png" alt="" /></div>
          <div class="col-lg-3">
            <div class="text-center text-lg-left">
              <h2 className="sm-project-title">Giro The Game</h2>
              <p className="sm-project-subtitle">Action Platformer</p>
              <p class="project-text mb-0">
                This app uses the official Magic the Gathering Card Game API to fetch card details regarding any search by name and text
              </p>
              <p class="sm-tech-text mb-0">
                CSS3 JavaScript React Redux Bootstrap
              </p>
              <div className="mt-2">
                <button className="btn btn-live mx-auto"> Mobile Demo </button>
                <button className="btn btn-live mx-auto"> Check the Code </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3"><img class="img-fluid" src="proj2.png" alt="" /></div>
          <div class="col-lg-3">
            <div class="text-center text-lg-left">
              <h2 className="sm-project-title">Giro The Game</h2>
              <p className="sm-project-subtitle">Action Platformer</p>
              <p class="project-text mb-0">
                This app uses the official Magic the Gathering Card Game API to fetch card details regarding any search by name and text
              </p>
              <p class="sm-tech-text mb-0">
                CSS3 JavaScript React Redux Bootstrap
              </p>
              <div className="mt-2">
                <button className="btn btn-live mx-auto"> Mobile Demo </button>
                <button className="btn btn-live mx-auto"> Check the Code </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center no-gutters mt-5">
          <div class="col-lg-3">
            <div class="text-center text-lg-right">
              <h2 className="sm-project-title">Giro The Game</h2>
              <p className="sm-project-subtitle">Action Platformer</p>
              <p class="project-text mb-0">
                This app uses the official Magic the Gathering Card Game API to fetch card details regarding any search by name and text
              </p>
              <p class="sm-tech-text mb-0">
                CSS3 JavaScript React Redux Bootstrap
              </p>
              <div className="mt-2">
                <button className="btn btn-live mx-auto"> Mobile Demo </button>
                <button className="btn btn-live mx-auto"> Check the Code </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3"><img class="img-fluid" src="proj3.png" alt="" /></div>
          <div class="col-lg-3">
            <div class="text-center text-lg-right">
              <h2 className="sm-project-title">Giro The Game</h2>
              <p className="sm-project-subtitle">Action Platformer</p>
              <p class="project-text mb-0">
                This app uses the official Magic the Gathering Card Game API to fetch card details regarding any search by name and text
              </p>
              <p class="sm-tech-text mb-0">
                CSS3 JavaScript React Redux Bootstrap
              </p>
              <div className="mt-2">
                <button className="btn btn-live mx-auto"> Mobile Demo </button>
                <button className="btn btn-live mx-auto"> Check the Code </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3"><img class="img-fluid" src="proj4.png" alt="" /></div>
        </div>
        <div className="row justify-content-center mt-5">
          <button className="btn btn-live"> Check more projects! github</button>
        </div>
      </div>
  </header>


);

export default Projects;
