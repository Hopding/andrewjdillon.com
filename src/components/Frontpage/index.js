import React from 'react';
import Particles from 'react-particles-js';

import './index.css';

import PARTICLES_CONFIG from './particles.json';
import PROFILE_PIC from '../../../img/profile-pic.jpg';

import Icons from '../../components/Icons';

class Frontpage extends React.Component {
  state = { showParticles: false };

  componentDidMount() {
    if (window.innerWidth > 550) {
      this.setState({ showParticles: true });
    }
  }

  render() {
    const { showParticles } = this.state;

    return (
      <div className="frontpage">
        {showParticles && (
          <Particles
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            height="calc(100% - 75px)"
            params={PARTICLES_CONFIG}
          />
        )}
        <div className="frontpage-container">
          <div className="frontpage-name">Andrew Dillon</div>
          <div className="frontpage-subtitle">Software Engineer</div>
          <div className="frontpage-avatar-container">
            <img className="frontpage-avatar" src={PROFILE_PIC} />
          </div>
          <div className="frontpage-icons">
            <Icons.Email
              href="mailto:andrew.dillon.j@gmail.com"
              color="#FFFFFF"
            />
            <Icons.LinkedIn
              href="https://linkedin.com/in/andrewjdillon"
              color="#FFFFFF"
            />
            <Icons.Resume
              href="/resume.pdf"
              color="#FFFFFF"
            />
            <Icons.GitHub href="https://github.com/Hopding" color="#FFFFFF" />
            <Icons.Pencil href="http://andrewjdillon.medium.com" color="#FFFFFF" />
          </div>
          <div className="frontpage-chevron">
            <span className="chevron down" />
          </div>
        </div>
      </div>
    );
  }
}

export default Frontpage;
