import React from 'react';
// import PropTypes from 'prop-types';
import { Container, Row, Col} from "reactstrap";

import {FollowerSuggestionContainer, StoryContainer, PostContainer} from 'containers/Home';

HomeContainer.propTypes = {
  
};

function HomeContainer(props) {
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