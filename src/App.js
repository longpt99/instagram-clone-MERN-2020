import React, { useState } from "react";
import './App.css';
import './components/Header/header.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Login from "./components/Auth/Login";
import ResetPassword from "./components/Auth/ResetPassword";
import { Container, Row, Col } from "reactstrap";
import HeaderSreach from "./components/Header/HeaderSreach";

export default function App() {
  const [isLogged, setIsLogged] = useState(true);

  function handelLoginState(value) {
    setIsLogged(value);
  }
  return (
    <Router>
      <div>{!isLogged && <Login handelLoginState={handelLoginState} />}</div>
      {
        isLogged && <div>
          <div className='header'>
            <Container>
              <Row>
                <Col>
                  <Navbar expand="md">
                    <NavbarBrand href="/">Instagram</NavbarBrand>
                    <HeaderSreach />
                    <Nav navbar>
                      <NavItem>
                        <NavLink>
                          <Link to='#'>
                            <ion-icon name="home-sharp"></ion-icon>
                          </Link>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink>
                          <Link to='#'>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                            </Link>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink>
                          <Link to='#'>
                            <ion-icon name="earth-outline"></ion-icon>
                          </Link>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink>
                          <Link to='#'>
                            <ion-icon name="heart-outline"></ion-icon>
                          </Link>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink>
                          <Link to='#'>
                            <ion-icon name="person-circle-outline"></ion-icon>
                          </Link>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Navbar>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      }
      <Switch>
        <Route path="/accounts/password/reset/">{ResetPassword}</Route>
        <Route path="/about">{/* <About /> */}</Route>
        <Route path="/users">{/* <Users /> */}</Route>
        <Route path="/">{/* <Home /> */}</Route>
      </Switch>
    </Router>
  );
}
