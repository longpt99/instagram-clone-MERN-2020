import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import styles from './styles.module.scss';

Navigation.propTypes = {
  
};

function Navigation(props) {
  const {url , path} = useRouteMatch();
  console.log(url, path)
  const userUrl = useParams();
  const postItem = useRef();
  const {adminUrl} = props;
  const [isFocus, setIsFocus] = useState(1);


  function handleClickItem(value) {
    setIsFocus(value)
    props.handleChangeComponent(value)
  }

  useEffect(() => {
    postItem.current.focus();
  }, [])

  return (
    <ul className={styles.nav_link}>
      <li onClick={()=>handleClickItem(1)}> 
        <Link to={`${url}`} className={`${styles.nav_item} ${isFocus === 1 ? styles.nav_item__focus : ''}`} ref={postItem}>
          <ion-icon name="grid-outline"></ion-icon>
          <span>Bài viết</span>
        </Link>
      </li>
      {
        userUrl.nickname === adminUrl && <li onClick={()=>handleClickItem(2)}>
          <Link to={`${url}/upload`} className={`${styles.nav_item} ${isFocus === 2 ? styles.nav_item__focus : ''}`}>
            <ion-icon name="cloud-upload-outline"></ion-icon>
            <span>Upload</span>
          </Link>
        </li>
      }
      <li onClick={()=>handleClickItem(3)}>
        <Link to={`${url}/saved`} className={`${styles.nav_item} ${isFocus === 3 ? styles.nav_item__focus : ''}`}>
          <ion-icon name="bookmark-outline"></ion-icon>
          <span>Đã lưu</span>
        </Link>
      </li>
      <li onClick={()=>handleClickItem(4)}>
        <Link to={`${url}/tagged`} className={`${styles.nav_item} ${isFocus === 4 ? styles.nav_item__focus : ''}`}>
          <ion-icon name="people-outline"></ion-icon>
          <span>Được tag</span>
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;