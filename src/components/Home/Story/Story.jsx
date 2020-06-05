import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import cls from './style.module.scss'


Story.propTypes = {
  
};

function PrevButton({ onClick }) {
  return <button onClick={onClick} className={cls.slick_prev} style={{ display: "block" }}></button>;
}

function NextButton({ onClick }) {
  return <button onClick={onClick} className={cls.slick_next} style={{ display: "block"}}></button>;
}

function Story(props) {
  const users = [
    
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
    {
      name: 'Long',
      imgUrl: 'https://instagram.fhan5-4.fna.fbcdn.net/v/t51.2885-19/s150x150/91239910_211424973256450_2989229025345404928_n.jpg?_nc_ht=instagram.fhan5-4.fna.fbcdn.net&_nc_ohc=UEBKyj07fnEAX8ZR0h_&oh=fcb687970cccf8916d8ae72a4965d92f&oe=5F02434C'
    },
  ];
  var settings = {
    speed: 500,
    slidesToShow: 8,
    infinite: true,
    slidesToScroll: 3,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    swipe: false,
  };
  
  return (
    <div className={cls.wrapper}>
      <Slider {...settings}>
        {
          users.map(user => (
            <div className={cls.info}>
              <img src={user.imgUrl}/>
              <span className={cls.name} >{user.name}</span>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default Story;