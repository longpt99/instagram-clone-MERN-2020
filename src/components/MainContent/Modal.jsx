import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

Modal.propTypes = {
  
};

Modal.defaultProps = {
  
}

function Modal(props) {
  const MODAL_OPEN_CLASS = "body--modal-open";
  function handleModal(value) {
    props.handleModal(value);
  }

  useEffect(()=> {
    document.body.classList.add(MODAL_OPEN_CLASS);

    return () => {
      document.body.classList.remove(MODAL_OPEN_CLASS);
    }
  }, [])

  return (
    <div className='modal-container' onClick={() => handleModal(true)}>
      <div className='modal-content'>
        <button className='btn-modal'>Báo cáo là không phù hợp</button>
        <button className='btn-modal'>Bỏ theo dõi</button>
        <button className='btn-modal'>Đi tới bài viết</button>
        <button className='btn-modal'>Chia sẻ</button>
        <button className='btn-modal'>Sao chép liên kết</button>
        <button className='btn-modal'>Nhúng</button>
        <button className='btn-modal'>Hủy</button>
      </div>
    </div>
  );
}

export default Modal;