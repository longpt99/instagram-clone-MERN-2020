import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col} from "reactstrap";

import {HomePost } from '../../components'
import {FollowerSuggestionCotainer, StoryContainer, PostContainer} from '../Home';
import { } from '../../store/actions';

HomeContainer.propTypes = {
  
};

function HomeContainer(props) {
  
  const [isHideModal, setHideModal] = useState(true);
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
            <FollowerSuggestionCotainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchSuggestedUsers: () => {
//       dispatch(actFectchSuggestedUsersRequest())
//     }
//   }
// }

export default HomeContainer;