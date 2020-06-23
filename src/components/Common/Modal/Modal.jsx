import React from "react";
import { withRouter } from "react-router-dom";
import './styles.scss'

const Modal = (props) => {
  const {isModal} = props
  if (isModal) {
    return (
      <div
        className="modal-wrapper"
        onClick={() => props.history.goBack()}
      >
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          {props.children}
        </div>
      </div>
    );
  } else {
    return (
      <div className="no-modal-wrapper">
         {props.children}
      </div>
    );
  }
}

export default withRouter(Modal);
