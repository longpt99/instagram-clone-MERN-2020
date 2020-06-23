import React from 'react';
import { Container, Row, Col} from "reactstrap";
import { useRouteMatch } from 'react-router-dom';

import {ImageListContainer, LoginContainer, RegisterContainer, ToggleFormContainer}  from 'containers/Auth';
import { DownloadApp } from 'components/Auth';

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
            <DownloadApp />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AuthContainer;