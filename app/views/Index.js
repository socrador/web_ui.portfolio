import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

/* TODO
Add additional major sections
Art
Wood
House
Projects (code)
*/

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <h3> Website dedicated to artistic progression and development</h3>
          <p> A modern app using react and Javascript</p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
