import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Projects = () => (
  <header class="masthead">
      <div className="container-fluid h-100 justify-items-center mt-5 pt-5">
        <span className="project-title ml-5">Featured Projects</span>
        <Carousel fade="true" className="fadein">
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
                    Action-Platformer built with Phaser 3, Get the highest score by collecting coins, avoiding damage, and killing enemies.
                  </p>
                  <p class="tech-text mb-0">
                    Phaser3 JavaScript ES6 webpack netlify jest
                  </p>
                  <div className="mt-5">
                    <a href="https://giro-the-game.netlify.app/dist/" target="_blank">
                      <button className="btn btn-live"> Play level 1 </button>
                    </a>
                    <a href="https://github.com/Usagib/Girogame-Phaser3" target="_blank">
                      <button className="btn btn-code"> Check the code </button>
                    </a>
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
                  <p className="project-subtitle">
                    Portfolio application with user dashboard for requesting services and create appointments
                  </p>
                  <p class="project-text mb-0">
                    Booking web application and dedicated RESTful API
                  </p>
                  <p class="tech-text mb-0">
                    HTML5 CSS3 JavaScript React Redux Bootstrap Ruby on Rails postgresql Heroku Surge
                  </p>
                  <div className="mt-5">
                    <a href="https://usagi-booking.surge.sh/" target="_blank">
                      <button className="btn btn-live"> Live Demo </button>
                    </a>
                    <a href="https://github.com/Usagib/booking-portfolio" target="_blank">
                      <button className="btn btn-code"> Check the code </button>
                    </a>
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
                    <a href="https://gthr-app.herokuapp.com/" target="_blank">
                      <button className="btn btn-live"> Mobile Demo </button>
                    </a>
                    <a href="https://github.com/Usagib/gthr-app" target="_blank">
                      <button className="btn btn-code"> Check the code </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <div class="row justify-content-center no-gutters mt-5 mb-5 mb-lg-0 fadein">
          <div className="col-lg-3 fadein fadein-first"><img class="img-fluid" src="proj1.png" alt="" /></div>
          <div class="col-lg-3 fadein fadein-second">
            <div class="text-center text-lg-left">
              <h2 className="sm-project-title">Stylo Framework</h2>
              <p className="sm-project-subtitle">Web design framework</p>
              <p class="project-text mb-0">
                Responsive CSS3 framework for quick layout design, a great tool for Bootstrap learners
              </p>
              <p class="sm-tech-text mb-0">
                CSS3
              </p>
              <div className="mt-2">
                <a href="" target="_blank">
                  <button className="btn btn-live mx-auto"> Site with Stylo </button>
                </a>
                <a href="https://github.com/Usagib/stylofw" target="_blank">
                  <button className="btn btn-code mx-auto"> Framework </button>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 fadein fadein-second"><img class="img-fluid" src="proj2.png" alt="" /></div>
          <div class="col-lg-3 fadein fadein-first ">
            <div class="text-center text-lg-left">
              <h2 className="sm-project-title">Trnado App</h2>
              <p className="sm-project-subtitle">JavaScript weather app  </p>
              <p class="project-text mb-0">
                Weather forecast application that fetches information from OpenWeathermap API, built-in ES6 with webpack
              </p>
              <p class="sm-tech-text mb-0">
                HTML5 CSS3 JavaScript webpack
              </p>
              <div className="mt-2">
                <a href="https://raw.githack.com/Usagib/js-weather/03-datafetch/dist/index.html" target="_blank">
                  <button className="btn btn-live mx-auto"> Check the app </button>
                </a>
                <a href="https://github.com/Usagib/Trnado-app" target="_blank">
                  <button className="btn btn-code mx-auto"> Check the Code </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center no-gutters mt-5">
          <div class="col-lg-3 fadein fadein-first">
            <div class="text-center text-lg-right">
              <h2 className="sm-project-title">Koi Events</h2>
              <p className="sm-project-subtitle">Events attendance app</p>
              <p class="project-text mb-0">
                Ruby on Rails app for creating events and share them with friends
              </p>
              <p class="sm-tech-text mb-0">
                HTML5 Ruby on Rails postgresql
              </p>
              <div className="mt-2">
                <a href="https://github.com/Usagib/Koi-eventsapp">
                  <button className="btn btn-live mx-auto"> Visit the repo </button>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 fadein fadein-second"><img class="img-fluid" src="proj3.png" alt="" /></div>
          <div class="col-lg-3 fadein fadein-second">
            <div class="text-center text-lg-right">
              <h2 className="sm-project-title">Social Scramble</h2>
              <p className="sm-project-subtitle">Social network app</p>
              <p class="project-text mb-0">
                A Ruby on Rails app for users to write posts and comment them, friend and unfriend users.
              </p>
              <p class="sm-tech-text mb-0">
                CSS3 JavaScript React Redux Bootstrap
              </p>
              <div className="mt-2">
                <a href="https://github.com/Usagib/ror-social-scaffold">
                  <button className="btn btn-live mx-auto"> Visit the repo </button>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 fadein fadein-first "><img class="img-fluid" src="proj4.png" alt="" /></div>
        </div>
        <div className="row justify-content-center mt-5">
          <a href="https://github.com/usagib" target="_blank">
            <button className="btn btn-next"> Check more projects! github</button>
          </a>
      </div>
      </div>
  </header>


);

export default Projects;
