import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col} from "reactstrap";

import FollowerSuggestionCotainer from '../Home/FollowerSuggestionCotainer';
import { actFectchSuggestedUsersRequest } from '../../store/actions';

HomeContainer.propTypes = {
  
};

function HomeContainer(props) {
  const {admin, fetchSuggestedUsers, suggestedUsers} = props;
  return (
    <div className='home-page'>
      {/* {
        !isHideModal && <Modal handleModal={handleModal}/>
      } */}
      <Container>
        <Row>
          <Col xs='8'>
            <Row>
              <Col>
                {/* <Story /> */}
              </Col>
            </Row>
            <Row>
              <Col>
                {/* <Post handleModal={handleModal} userInfo={admin}/> */}
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