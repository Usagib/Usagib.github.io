import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Projects = () => (
  <section class="projects-section" id="projects">
    <div className="container-fluid h-100 justify-items-center">
      <span className="project-title ml-5">Featured Projects</span>
      <Carousel fade="true" >
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
        <div class="col-lg-3"><img class="img-fluid" src="railsmain.png" alt="" /></div>
        <div class="col-lg-3">
                       <div class="bg-black text-center h-100 project">
                           <div class="d-flex h-100">
                               <div class="project-text w-100 my-auto text-center text-lg-left">
                                   <h4 class="text-white">Misty</h4>
                                   <p class="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                                   <hr class="d-none d-lg-block mb-0 ml-0" />
                               </div>
                           </div>
                       </div>
                   </div>
        <div class="col-lg-3"><img class="img-fluid" src="railsmain.png" alt="" /></div>
        <div class="col-lg-3">
                       <div class="bg-black text-center h-100 project">
                           <div class="d-flex h-100">
                               <div class="project-text w-100 my-auto text-center text-lg-left">
                                   <h4 class="text-white">Misty</h4>
                                   <p class="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                                   <hr class="d-none d-lg-block mb-0 ml-0" />
                               </div>
                           </div>
                       </div>
                   </div>
      </div>
      <div class="row justify-content-center no-gutters">
        <div class="col-lg-3">
                       <div class="bg-black text-center h-100 project">
                           <div class="d-flex h-100">
                               <div class="project-text w-100 my-auto text-center text-lg-right">
                                   <h4 class="text-white">Mountains</h4>
                                   <p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                                   <hr class="d-none d-lg-block mb-0 mr-0" />
                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="col-lg-3"><img class="img-fluid" src="reactmain.png" alt="" /></div>
      <div class="col-lg-3">
                         <div class="bg-black text-center h-100 project">
                             <div class="d-flex h-100">
                                 <div class="project-text w-100 my-auto text-center text-lg-right">
                                     <h4 class="text-white">Mountains</h4>
                                     <p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                                     <hr class="d-none d-lg-block mb-0 mr-0" />
                                 </div>
                             </div>
                         </div>
                     </div>
      <div class="col-lg-3"><img class="img-fluid" src="reactmain.png" alt="" /></div>
      </div>
    </div>
  </section>
);

export default Projects;
