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
      <Link to="/" className="mini-post">
        <img
          src={`${BASE_PATH}/assets/images/wood_plane.jpg`} 
          alt="Under Construction"
          width="100%"
        />
        <div className="centered">
          <header>
            <h3>
              <font color="white" size="5">Go Back to Safety...</font>
            </h3>
          </header>
        </div>
      </Link>
    </article>
  </Main>
);

export default UnderConstruction;
