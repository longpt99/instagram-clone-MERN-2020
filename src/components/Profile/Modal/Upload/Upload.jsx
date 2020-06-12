import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { FilePond, registerPlugin } from 'react-filepond';
import * as apis from '../../../../constants/Api';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageResize)

Upload.propTypes = {
  
};

function Upload(props) {
  const [files, setFiles] = useState([])
  const [caption, setCaption] = useState('');

  function handleChangeInput(e) {
    const {value} = e.target;
    setCaption(value)
  }

  function handleHideModal(e) {
    const {value} = e.target;
    if (value === undefined) {
      props.handleModal();
      return;
    }
    console.log(value)
  }
  
  return (
    <div className='modal_upload' onDoubleClick={handleHideModal}>
      <div className='modal_file'>
        <FilePond 
          files={files}
          onupdatefiles={setFiles}
          instantUpload={false}
          name={"file"}
          server = {{
            process: {
                url: apis.ADMIN_UPLOAD_IMAGE_API,
                method: 'POST',
                withCredentials: false,
                headers: {
                  Authorization: `Bearer ${JSON.parse(localStorage.getItem('jwt'))}`
                },
                onload: null,
                onerror: null,
                ondata: (formData) => {
                  formData.append('caption', caption)
                  return formData
                }
            }
          }
          }
          labelIdle='Kéo hoặc thả ảnh'
        />
      </div>
      <textarea onChange={handleChangeInput}>
      </textarea>
    </div>
  );
}

export default Upload;