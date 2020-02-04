import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router, Switch, Route,
} from 'react-router-dom';

// Featured
import Index from './views/Index';
// import About from './views/About';
// import Projects from './views/Projects';
import Resume from './views/Resume';
import Stats from './views/Stats';
import Contact from './views/Contact';

import NotFound from './views/NotFound';
import UnderConstruction from './views/UnderConstruction';

// All of our CSS
import './static/css/main.scss';

/*
Saved Routing paths to be restored...

<Route path="/projects" component={Projects} />
<Route path="/about" component={About} />
*/

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={UnderConstruction} />
      <Route path="/projects" component={UnderConstruction} />
      <Route path="/stats" component={Stats} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      <Route path="/underConstruction" component={UnderConstruction} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
