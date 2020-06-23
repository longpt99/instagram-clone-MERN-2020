import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

import cls from './style.module.scss';

Search.propTypes = {
  
};

function Search(props) {
  const [isFocus, setIsFocus] = useState(false);
  const [textInput, setTextInput] = useState('');

  function handleChange(e) {
    const {value} = e.target;
    setTextInput(value)
  }

  function handleOnFocus(e) {
    setIsFocus(true)
  }

  function handleOnBlur(e) {
    const {value} = e.target;
    if (value.length > 0) {

    } else {
      setIsFocus(false)
    }
  }

  function handleClearSearchInput() {
    setTextInput('');
    // setIsFocus(false)
  }

  return (
    <div className={cls.wrapper}>
      <Input 
        id='input' 
        className={cls.input}
        placeholder={isFocus ? 'Tìm kiếm' : ''}
        value={textInput}
        onChange={handleChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <label className={!isFocus ? cls.text : cls.text_edit} htmlFor='input'>
        <span >
          <ion-icon name="search-outline"></ion-icon>
        </span>
        {
          isFocus 
          ? <span><ion-icon name="close-circle-sharp" onClick={handleClearSearchInput}></ion-icon></span> 
          : <span>Tìm kiếm</span>
        }
      </label>
    </div>
  );
}

export default Search;