import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data/contact';

const BulletListStyle = { listStyleType: 'square' };

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/assets/images/icon/logo512.png`} alt="" />
      </Link>
      <header>
        <h2>Jeff Bassett</h2>
        <p><a href="mailto:jeffbassett870@gmail.com.com?subject=Hello artsanddevs.com!">site.admin@artsanddevs.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Jeff.  I enjoy making things, creating art, and learning new technologies...
      </p>
      <h3> Quick Facts...</h3>

      <ul style={BulletListStyle}>
        <li>A <a href="https://www.niu.edu/ceet/index.shtml">Northern Illinois University</a> graduate</li>
        <li>Software Engineer</li>
        <li>Accomplished Oil Painter</li>
        <li>Victorian House Restorer</li>
      </ul>

      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Jeff Bassett <Link to="/">artsanddevs.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
