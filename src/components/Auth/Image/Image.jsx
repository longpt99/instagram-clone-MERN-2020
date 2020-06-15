import React from "react";

import './Image.scss'

export default function Image(props) {
  const {slideImg} = props;
  return (
    <div className='auth-img'>
      <img
        src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
        alt="wrap-img"
      />
      <img className="auth-img__animation" alt="img" src={slideImg} />
    </div>
  );
}
