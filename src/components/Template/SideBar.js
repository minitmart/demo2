import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/logo3.PNG`} alt="" />
      </Link>
      <header>
        <h2>Nittany Energy</h2>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Nittany Energy is a family owned business locally owned and operated
        in Central Pennsylvania. Our experience and dependability in delivering
        quality fuels as well as our top notch service and installation make all the difference.
        Nittany Energy businesses have been serving
        Central and Northern Pennsylvania for over 50 years.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
