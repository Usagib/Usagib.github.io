import React from 'react'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const buttonClick = e => {
  e.preventDefault();
  window.location.href='/me';
}

const Home = () => (
  <header class="masthead" id="home">
    <div class="container d-flex h-100 align-items-center">
      <div class="mx-auto text-center">
        <img className="img-fluid fadein fadein-first" src="homeimg.png"/>
        <h2 class="mx-auto mt-2 home-text fadein fadein-third">Hello!, I like to design and code</h2>
        <Link to="/me">
          <button type="button" className="btn btn-next mt-2 mx-3 fadein fadein-third"> ABOUT ME </button>
        </Link>
        <Link to="/projects">
          <button type="button" className="btn btn-next mt-2 mx-3 fadein fadein-third"> PORTFOLIO </button>
        </Link>
      </div>
    </div>
  </header>
);

export default Home;
