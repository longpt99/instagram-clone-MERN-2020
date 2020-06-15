import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {ProfileModalUpload} from '../../components'

ModalUploadContainer.propTypes = {
  
};

function ModalUploadContainer(props) {
  const [caption, setCaption] = useState('');

  function handleGetValueCaption(e) {
    const {value} = e.target;
    setCaption(value)
  }

  return <ProfileModalUpload 
          handleGetValueCaption={handleGetValueCaption}
          caption={caption}
        />
}

export default ModalUploadContainer;