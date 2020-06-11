import React from "react";
import './App.scss'


export default function App(props) {
  return (
    <div className='form-download'>
      <span>Tải ứng dụng.</span>
      <div className='form-icon-download'>
        <a target='_blank' rel="noopener noreferrer" href='https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.signupPage.badge&mt=8&vt=lo'>
          <img className='icon-download' src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_vietnamese-vi.png/3025bd262cee.png" alt="app_store"/>
        </a>
        <a target='_blank' rel="noopener noreferrer" href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D7BF2AC62-19DA-4E1B-9D37-F7A2336E829A%26utm_content%3Dlo%26utm_medium%3Dbadge'>
          <img className='icon-download' src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_vietnamese-vi.png/c36c88b5a8dc.png" alt="chplay_store"/>
        </a>
      </div>
    </div>
  );
}
