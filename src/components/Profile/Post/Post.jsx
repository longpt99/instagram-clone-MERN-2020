import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import styles from './styles.module.scss';
Post.propTypes = {
  
};

function Post(props) {
  const {image} = props;
  return (
    <div className={styles.profile_post}>
      <Link>
        <img className='img-fluid' src={image.imageUrl} />
      </Link>
    </div>
  );
}

export default Post;