import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";

import {connect} from 'react-redux';
import Header from '../../components/Profile/Header';

Account.propTypes = {
  
};

function Account(props) {
  const {nickname} = useParams();
  const {user} = props;
  console.log(user)
  return (
    <div className='mt-5'>
      <Header userInfo={user}/>
      <h1>{nickname}</h1>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Account);