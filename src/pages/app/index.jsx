import React, { Component } from "react";
import { 
  Route,
  Switch,
  Link
} from "react-router-dom";

import HelloWorld from "../helloWorld";
import Page1 from "../page1";
import Page2 from "../page2";

const Header = () => (
  <header>
    <nav>
      <Link to="/">home</Link>
      <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>
    </nav>
  </header>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HelloWorld}/>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
    </Switch>
  </main>
);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

export default App;