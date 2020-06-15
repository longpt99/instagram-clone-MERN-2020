import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col} from "reactstrap";
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import {ProfileNavigation, ProfilePost} from '../../components'
import {InformationContainer } from '../Profile';
import {actFetchUserProfileRequest} from '../../store/actions'

ProfileContainer.propTypes = {
  
};

function ProfileContainer(props) {
  const {params} = useRouteMatch();
  const {user, fetchUser} = props;
  
  useEffect(() => {
    fetchUser(params.nickname)
  }, [user]);
  
  if (!user) {
    return <h1>Loading</h1>
  }

  console.log(user)

  return (
    <div className='profile-page'>
      <Container>
        <InformationContainer />
        <ProfileNavigation />
        {/* <ProfilePost images={user.images}/> */}
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (data) => {
      dispatch(actFetchUserProfileRequest(data));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);