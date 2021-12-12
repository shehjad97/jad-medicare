import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SingleService from "./components/SingleService/SingleService";
import AuthProvider from "./contexts/AuthProvider";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>

            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>

            <PrivateRoute exact path="/services/:serviceId">
              <SingleService></SingleService>
            </PrivateRoute>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;