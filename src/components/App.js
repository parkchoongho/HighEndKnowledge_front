import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "./Nav";
import Header from "./Header";
import Home from "./Home";
import adminHome from "./adminHome";
import CreateQuiz from "./createQuiz";
import Footer from "./Footer";
import Login from "./Login";
import Join from "./Join";
import Quiz from "./QuizInfo";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [headerState, setHeaderState] = useState(false);

  const auth = {
    isLoggedIn,
    isAdmin,
    setIsLoggedIn,
    setIsAdmin,
    isLogout,
    setIsLogout,
    headerState,
    setHeaderState
  };

  return (
    <BrowserRouter>
      <Nav {...auth} />
      <Header headerState={headerState} isAdmin={isAdmin} />
      <Route exact path="/" render={props => <Login {...props} {...auth} />} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/admin/home" component={adminHome} />
      <Route exact path="/join" component={Join} />
      <Route path="/createQuiz" component={CreateQuiz} />
      <Route path="/quiz/:id" component={Quiz} />
      <Footer />
    </BrowserRouter>
  );
}
