import React from 'react'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => (
  <header class="masthead">
    <div class="container d-flex h-100 align-items-center">
      <div class="mx-auto text-center">
        <img className="img-fluid fadein fadein-first" src="homeimg.png"/>
        <h2 class="mx-auto mt-2 home-text fadein fadein-third">Hello!, I like design and technology</h2>
      </div>
    </div>
  </header>
);

export default Home;
