import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

import MainPage from "./Components/MainPage";
import Home from "./Components/Screens/Home";
import About from "./Components/Screens/About";
import Resume from "./Components/Screens/Resume";
import Portfolio from "./Components/Screens/Portfolio";
import Contact from "./Components/Screens/Contact";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainPage>
          <Component {...props} />
        </MainPage>
      )}
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/contact" component={Contact} />
        <PrivateRoute exact path="/portfolio" component={Portfolio} />
        <PrivateRoute exact path="/resume" component={Resume} />
        <PrivateRoute exact path="/about" component={About} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
