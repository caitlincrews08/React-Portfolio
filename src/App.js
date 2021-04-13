import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import NavComponent from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
// import Wrapper from "./components/Wrapper/wrapper";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";


function App() {
  return (
    <Router>
      <div className="bkg">
        <NavComponent />
        <Switch>
          <Route exact path = {["/", "/home"]} component={Home}/>
          <Route exact path =  "/about" component={About}/>
          <Route exact path = "/portfolio" component={Portfolio}/>
          <Route exact path = "/resume" component={Resume}/>
          <Route exact path = "/contact" component={Contact}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
