import React from 'react';
import { Container, Row, Col} from "reactstrap";
import {ImageListContainer, LoginContainer, RegisterContainer, ToggleFormContainer}  from '../Auth';
import {AuthDownloadApp} from '../../components';  
import { useRouteMatch } from 'react-router-dom';

function AuthContainer(props) {
  const {url} = useRouteMatch();
  return (
    <div className='auth-page'>
      <Container>
        <Row>
          <Col>
            <ImageListContainer />
          </Col>
          <Col>
            {
              url.includes('login') 
              ? <LoginContainer />
              : <RegisterContainer />
            }
            <ToggleFormContainer />
            <AuthDownloadApp />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AuthContainer;