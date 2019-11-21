import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "./Nav";
import Header from "./Header";
import Home from "./Home";
import CreateQuiz from "./createQuiz";
import Footer from "./Footer";
import Login from "./Login";
import Join from "./Join";
import Quiz from "./Quiz";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const auth = { isLoggedIn, isAdmin, setIsLoggedIn, setIsAdmin };

  return (
    <BrowserRouter>
      <Nav {...auth} />
      <Header />
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/login"
        render={props => <Login {...props} {...auth} />}
      />
      <Route exact path="/join" component={Join} />
      <Route path="/createQuiz" component={CreateQuiz} />
      <Route path="/:id" component={Quiz} />
      <Footer />
    </BrowserRouter>
  );
}
