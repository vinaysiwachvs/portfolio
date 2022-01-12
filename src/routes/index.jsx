import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";

import { Homepage, Contact, About, Project} from "pages";
import { NavBar, Footer } from "containers";
import { baseColor } from "styles/base";


export default function App() {
  return (
    <Router>
        <MainWrapper>
          <NavBar />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home">
              <Homepage />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/project">
              <Project />
            </Route>
          </Switch>
          <Footer />
        </MainWrapper>
    </Router>
  );
}

const MainWrapper = styled.div``;
