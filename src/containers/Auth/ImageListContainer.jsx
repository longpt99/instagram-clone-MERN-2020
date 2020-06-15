import React, {useState, useEffect} from 'react';
import AuthImg from '../../components/Auth/Image'

ImageListContainer.propTypes = {
  
};

function ImageListContainer(props) {
  const [imgList, setImgList] = useState([
    "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"
  ]);
  const [slideImg, setSlideImg] = useState('');

  useEffect(() => {
    let i = 1;
    setSlideImg(imgList[0]);
    const imgInterval = setInterval(() => {
      if (i === imgList.length) i = 0;
      setSlideImg(imgList[i]);
      i++;
    }, 2000);
    return () => {
      clearInterval(imgInterval);
    };
  }, []);

  return (
    <AuthImg slideImg={slideImg}/>
  );
}

export default ImageListContainer;