import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { HomeSuggestion, HomePost } from 'components';

HomeContainer.propTypes = {};

function HomeContainer() {
  return (
    <div className="home-page">
      <Container>
        <Row>
          <Col xs="8">
            <Row>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <HomePost />
              </Col>
            </Row>
          </Col>
          <Col>
            <HomeSuggestion />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeContainer;
