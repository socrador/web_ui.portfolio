import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

const UnderConstruction = () => (
  <Main>
    <Helmet title="Under Construction" />
    <article className="post" id="underConstruction">
      <h1>Page Page is currently under construction.</h1>
      <h3>pardon our dust...</h3>
      <p>Return to <Link to="/">index</Link>.</p>
    </article>
  </Main>
);

export default UnderConstruction;
