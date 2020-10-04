import React from 'react'

const Me = () => (
  <section class="about-section text-center" id="about">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-6 mx-auto">
          <img class="img-fluid fadein" src="me.png" alt="" />
        </div>
        <div class="col-md-6 mx-auto">
          <h2 class="me-title mb-4 fadein">Eduardo "Usagi" Bonilla</h2>
            <p class="me-text fadein">
              I'm a Full-Stack developer mainly focused on Human Computer Interaction, UX/UI design, branding, and project management.
            </p>
            <p class="me-text fadein fadein-first">
              Founded my freelancing startup 'USAGI' in 2012 and performed as the project manager. We worked along with 30+ Mexican companies providing frontend, design, and tech support services.
            </p>
            <p class="me-text fadein fadein-second">
              I Like: Animation, Comics, Videogames, TCGs, Board Games.
            </p>
            <p class="me-text fadein fadein-third">
              Proud Mexican since 1992.
            </p>
        </div>
      </div>
    </div>
  </section>
);

export default Me;
