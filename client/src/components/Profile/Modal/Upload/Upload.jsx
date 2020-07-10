import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import cls from './styles.module.scss';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import "filepond/dist/filepond.min.css";
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { FilePond, registerPlugin } from 'react-filepond';
import { actSetPostToProfile } from 'store/actions';
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType, FilePondPluginFileValidateSize)

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
  const [file, setFile] = useState([])
  const {caption} = props;
  const dispatch = useDispatch();
  return (
    <div className={cls.modal_upload} onDoubleClick={props.handleClickToHideModal}>
      <div className={cls.modal_file}>
        <FilePond 
          file={file}
          onupdatefiles={setFile}
          instantUpload={false}
          name='image'
          labelIdle='Kéo hoặc thả ảnh'
          maxFileSize='5MB'
          labelMaxFileSize={`Maximum file size is 5MB`}
          acceptedFileTypes={['image/*']}
          labelFileTypeNotAllowed='File of invalid type'

          server = {{
            process: {
              url: '/api/posts/upload',
              method: 'POST',
              withCredentials: false,
              headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
              },
              onload: (response) => {
                dispatch(actSetPostToProfile(JSON.parse(response)))
              },
              ondata: (formData) => {
                formData.append('caption', caption)
                return formData
              },
            }
          }}
        />
      <textarea className={cls.modal_caption} onChange={props.handleGetValueCaption} placeholder='Type caption here...'>
      </textarea>
      </div>
    </div>
  );
}

export default Upload;