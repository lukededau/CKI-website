import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

// All views
import Home from './views/Home';
import About from './views/About';
import Events from './views/Events';
import JoinUs from './views/JoinUs';
import PastEvents from './views/PastEvents';
import PageNotFound from './views/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/join-us" component={JoinUs} />
        {/* <Route exact path="/past-events" component={PastEvents} /> */}
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
