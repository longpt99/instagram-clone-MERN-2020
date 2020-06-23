import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { ModalUpload } from 'components/Profile';

ModalUploadContainer.propTypes = {
  
};

function ModalUploadContainer(props) {
  const [caption, setCaption] = useState('');

  function handleGetValueCaption(e) {
    const {value} = e.target;
    setCaption(value)
  }

  return <ModalUpload
          handleGetValueCaption={handleGetValueCaption}
          caption={caption}
        />
}

export default ModalUploadContainer;