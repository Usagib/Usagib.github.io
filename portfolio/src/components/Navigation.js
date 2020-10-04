import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faArrowAltCircleLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSidenav = this.toggleSidenav.bind(this);
    this.state = {
      toggleSidebar: 'active',
    };
  }

  toggleSidenav() {
    const { toggleSidebar } = this.state;
    const css = (toggleSidebar === 'active') ? '' : 'active';
    this.setState({
      toggleSidebar: css,
    });
  }

  render() {
    const { toggleSidebar } = this.state;
    return (
      <div>
        <button
          type="button"
          id="sidebarCollapse"
          className="btn mt-3"
          onClick={this.toggleSidenav}
          style={{
            position: 'fixed',
            zIndex: '9999',
            top: '5%',
            left: '5%',
            backgroundColor: '#ffffff00',
          }}
        >
          <FontAwesomeIcon icon={faBars} size="2x" className="fadein menu-bars" />
        </button>
        <div
          className="mt-3 text-right"
          style={{
            position: 'fixed',
            zIndex: '9999',
            top: '5%',
            right: '5%',
            backgroundColor: '#ffffff00',
          }}
        >
          <img className="img-fluid fadein" src="logo.png" />
          <br />
          <img className="img-fluid fadein fadein-first mt-3" src="logogit.png" />
          <br />
          <img className="img-fluid fadein mt-3 fadein-second" src="logolin.png" />
            <br />
            <img className="img-fluid fadein mt-3 fadein-third" src="logotwi.png" />
        </div>
        <div className={`vertical-nav toggleSidebar ${toggleSidebar}`} id="sidebar">
          <div className="pt-4 px-3 ml-5 mt-1">
            <div className="media d-flex align-items-center">

              <div className="media-body mb-5">
              </div>
            </div>
          </div>
          <ul className="nav flex-column mb-0 mt-5 ml-5">
            <li className="nav-item">
              <a href="#home" className="nav-link text-white">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                ME
              </a>
            </li>
            <li className="nav-item">
              <a href="/catalog" className="nav-link">
                ME
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
