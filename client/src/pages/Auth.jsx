import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { actResetErr } from 'store/actions';
import { useDispatch } from 'react-redux';
import { Container, Row, Col} from "reactstrap";

import { LoginForm, RegisterForm, ToggleForm, DownloadApp, SlideImage } from 'components';

function AuthContainer(props) {
  const {url} = useRouteMatch();
  const [loginUrl, setLoginUrl] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (url.includes('login')) {
      setLoginUrl(true)
    } else {
      setLoginUrl(false)
    }
    dispatch(actResetErr())
  }, [dispatch, url]);

  return (
    <div className='auth-page'>
      <Container>
        <Row>
          <Col>
            <SlideImage />
          </Col>
          <Col>
            {
              loginUrl
              ? <LoginForm />
              : <RegisterForm />
            }
            <ToggleForm loginUrl={loginUrl}/>
            <DownloadApp />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AuthContainer;