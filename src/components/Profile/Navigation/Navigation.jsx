import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import styles from './styles.module.scss';

Navigation.propTypes = {
  
};

function Navigation(props) {
  const focus = useRef()
  const {userUrl, adminUrl, subPage} = props;

  useEffect(() => {
    focus.current.focus();
  }, [])

  return (
    <ul className={styles.nav_link}>
      <li onClick={()=>props.handleClickItem(1)}> 
        <Link to='#' className={`${styles.nav_item} ${subPage === 1 ? styles.nav_item__focus : ''}`} ref={focus}>
          <ion-icon name="grid-outline"></ion-icon>
          <span>Bài viết</span>
        </Link>
      </li>
      {
        userUrl === adminUrl && <li onClick={()=>props.handleClickItem(2)}>
          <Link to='#' className={`${styles.nav_item} ${subPage === 2 ? styles.nav_item__focus : ''}`}>
            <ion-icon name="cloud-upload-outline"></ion-icon>
            <span>Upload</span>
          </Link>
        </li>
      }
      <li onClick={()=>props.handleClickItem(3)}>
        <Link to='#' className={`${styles.nav_item} ${subPage === 3 ? styles.nav_item__focus : ''}`}>
          <ion-icon name="bookmark-outline"></ion-icon>
          <span>Đã lưu</span>
        </Link>
      </li>
      <li onClick={()=>props.handleClickItem(4)}>
        <Link to='#' className={`${styles.nav_item} ${subPage === 4 ? styles.nav_item__focus : ''}`}>
          <ion-icon name="people-outline"></ion-icon>
          <span>Được tag</span>
        </Link>
       </li>
    </ul>
  );
}

export default Navigation;