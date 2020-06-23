import React from 'react';
// import PropTypes from 'prop-types';
import { Container, Row, Col} from "reactstrap";

import {FollowerSuggestionContainer, StoryContainer, PostContainer} from 'containers/Home';
import { useRouteMatch } from 'react-router-dom';

HomeContainer.propTypes = {
  
};

function HomeContainer(props) {
  const {url} = useRouteMatch();
  console.log(url)
  return (
    <div className='home-page'>
      <Container>
        <Row>
          <Col xs='8'>
            <Row>
              <Col>
                <StoryContainer />
              </Col>
            </Row>
            <Row>
              <Col>
                <PostContainer />
              </Col>
            </Row>
          </Col>
          <Col>
            <FollowerSuggestionContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeContainer;