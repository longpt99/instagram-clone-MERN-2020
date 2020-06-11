import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { FilePond, registerPlugin } from 'react-filepond';

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
  console.log(files)
  
  return (
    <div className='modal_upload'>
      <div className='modal_file'>
        <FilePond 
          files={files}
          onupdatefiles={setFiles}
          allowMultiple ={ true}
          maxFiles = {3}
          // instantUpload={false}
          name={"images"}
          server = '/users/postImage'
          labelIdle='Kéo hoặc thả ảnh'
        />
      </div>
      <textarea onChange={handleChangeInput}>
      </textarea>
    </div>
  );
}

export default Upload;