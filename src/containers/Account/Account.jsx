import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

Account.propTypes = {
  
};

function Account(props) {
  const {user} = props;
  console.log(user)
  return (
    <div>
      test
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Account);