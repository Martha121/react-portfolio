import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Nav/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";


function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
