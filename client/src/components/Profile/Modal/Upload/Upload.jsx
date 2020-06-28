import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cls from './styles.module.scss';
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { FilePond, registerPlugin } from 'react-filepond';
import * as apis from 'constants/Api';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageResize)

Upload.propTypes = {
  handleClickToHideModal: PropTypes.func,
  handleGetValueCaption: PropTypes.func,
  caption: PropTypes.string.isRequired,
};

Upload.defaultProps = {
  handleClickToHideModal: null,
  handleGetValueCaption: null,
  caption: '',
}

function Upload(props) {
  const [files, setFiles] = useState([])
  const {caption} = props;
  
  return (
    <div className={cls.modal_upload} onDoubleClick={props.handleClickToHideModal}>
      <div className={cls.modal_file}>
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
      <textarea className={cls.modal_caption} onChange={props.handleGetValueCaption} placeholder='Type caption here...'>
      </textarea>
      </div>
    </div>
  );
}

export default Upload;