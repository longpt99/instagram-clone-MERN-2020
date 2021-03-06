import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import {Button} from 'reactstrap';

Upload.propTypes = {
  onHandleClickToShowModal: PropTypes.func,
};

Upload.defaultProps = {
  onHandleClickToShowModal: null,
}

function Upload(props) {
  return (
    <div className={styles.profile_upload}>
      <ion-icon name="images-outline"></ion-icon>
      <span className={styles.profile_upload_text}>Tải ảnh lên</span>
      <Button color='primary' onClick={props.onHandleClickToShowModal}>Tải lên</Button>
    </div>
  );
}

export default Upload;