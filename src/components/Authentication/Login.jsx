import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ImgApp from "./ImgApp";
import "./auth.css";
import FormLogin from "./FormLogin";
import RegisterAccount from "./RegisterAccount";
import { Container, Row, Col } from "reactstrap";

Login.propTypes = {};

Login.defaultProps = {};

export default function Login(props) {
  const [imgList, setImgList] = useState([
    "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"
  ]);
  const [pickImg, setPickImg] = useState("");
  useEffect(() => {
    let i = 1;
    setPickImg(imgList[0]);
    const imgInterval = setInterval(() => {
      if (i === imgList.length) i = 0;
      setPickImg(imgList[i]);
      i++;
    }, 2000);
    return () => {
      clearInterval(imgInterval);
    };
  }, []);

  function handelLoginState(value) {
    props.handelLoginState(value);
  }
  return (
    <div className="auth">
      <Container>
        <Row>
          <Col>
            <ImgApp img={pickImg} />
          </Col>
          <Col>
            <div className="form-login">
              <FormLogin handelLoginState={handelLoginState} />
            </div>
            <RegisterAccount />
            <div className="download-app">
              <span>Tải ứng dụng.</span>
              <div className="download-btn">
                <a
                  target="_blank"
                  className="download-link"
                  href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
                >
                  <img
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_vietnamese-vi.png/3025bd262cee.png"
                    alt="appstore"
                  />
                </a>
                <a
                  target="_blank"
                  className="download-link"
                  href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D7BF2AC62-19DA-4E1B-9D37-F7A2336E829A%26utm_content%3Dlo%26utm_medium%3Dbadge"
                >
                  <img
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_vietnamese-vi.png/c36c88b5a8dc.png"
                    alt="chplay"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
