import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Wrapper from "./components/Wrapper/wrapper";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path = "/" component={About}/>
          <Route exact path = "/about" component={About}/>
          <Route exact path = "/contact" component={Contact}/>
          <Route exact path = "/projects" component={Projects}/>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
