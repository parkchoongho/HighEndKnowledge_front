import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "./Nav";
import Header from "./Header";
import Home from "./Home";
import CreateQuiz from "./createQuiz";
import Footer from "./Footer";
import Quiz from "./Quiz";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/createQuiz" component={CreateQuiz} />
      {/* <Route path="/:id" component={Quiz} /> */}
      <Footer />
    </BrowserRouter>
  );
}
