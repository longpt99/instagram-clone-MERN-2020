import React, { useState } from "react";
import './App.css';
import './components/Header/header.css'
import './components/MainContent/main.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Login from "./components/Auth/Login";
import ResetPassword from "./components/Auth/ResetPassword";
import { Container, Row, Col } from "reactstrap";
import HeaderSreach from "./components/Header/HeaderSreach";
import PostContent from "./components/MainContent/PostContent";
import Modal from './components/MainContent/Modal'

export default function App() {
  const [isLogged, setIsLogged] = useState(true);
  const [modal, setModal] = useState(false);

  function handelLoginState(value) {
    setIsLogged(value);
  }

  function handleModal(value) {
    setModal(!value)
  }

  return (
    <Router>
      {!isLogged && <Login handelLoginState={handelLoginState} />}
      {
        isLogged && <div className='wrap-container'>
        {modal && <Modal handleModal={handleModal}/>}
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
        <main className='main-content'>
            <section class='content-wrap'>
              <Container>
                <Row>
                  <Col xs='8'>
                    <PostContent modal={modal} handleModal={handleModal}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs='8'>
                    <PostContent modal={modal} handleModal={handleModal}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs='8'>
                    <PostContent modal={modal} handleModal={handleModal}/>
                  </Col>
                </Row>
              </Container>
            </section>
          </main>
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
