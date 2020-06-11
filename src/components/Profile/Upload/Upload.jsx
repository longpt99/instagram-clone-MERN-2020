import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

Upload.propTypes = {
  
};

function Upload(props) {

  function handleShowModal() {
    props.handleModal();
  }
  return (
    <div className={styles.profile_upload}>
      <ion-icon name="images-outline"></ion-icon>
      <span className={styles.profile_upload_text}>Tải ảnh lên</span>
      <Button color='primary' onClick={handleShowModal}>Tải lên</Button>
    </div>
  );
}

export default Upload;