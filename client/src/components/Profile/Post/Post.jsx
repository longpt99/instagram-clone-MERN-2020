import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import styles from './styles.module.scss';

Post.propTypes = {
  image: PropTypes.string.isRequired,
};

function Post(props) {
  const {image} = props;
  return (
    <div className={styles.profile_post}>
      <Link to={{pathname:`/posts/${image._id}`, state: { modal: true }}}>
        <img className='img-fluid' src={image.imageUrl} alt='img-post'/>
      </Link>
    </div>
  );
}

export default Post;