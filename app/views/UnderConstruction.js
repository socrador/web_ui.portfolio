import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const UnderConstruction = () => (
  <Main>
    <Helmet title="Page Under Construction" />
    <div>Page is under construction</div>
  </Main>
);

export default UnderConstruction;
