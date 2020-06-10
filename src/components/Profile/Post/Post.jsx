import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import styles from './styles.module.scss';
Post.propTypes = {
  
};

function Post(props) {
  return (
    <div className={styles.profile_post}>
      <Link>
        <img clasName='img-fluid' src='https://instagram.fhan5-5.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/26068182_320952031739552_5583432307701710848_n.jpg?_nc_ht=instagram.fhan5-5.fna.fbcdn.net&_nc_cat=108&_nc_ohc=pEY1PnQWhWsAX_ZLDRZ&oh=00d5f684db47b6487f0bac6328c30aee&oe=5F09442F'
        />
      </Link>
    </div>
  );
}

export default Post;