import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

HeaderSreach.propTypes = {
  
};

function HeaderSreach(props) {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('');

  function handleCancelSearch() {
    setValue('');
    setIsFocus(false);
  };

  function handleValueChange(event) {
    setValue(event.target.value)
  }

  function handleFocusInput(event) {
    const {value} = event.target;
    setIsFocus(true)
  }

  function handleBlurInput(event) {
    const {value} = event.target
    if(value.length === 0) {
      setIsFocus(false)
    }
  }

  return (
    <div className='navbar-search'>
      <label>
        <input 
          type="text" 
          placeholder={isFocus ? 'Tìm kiếm' : ''}
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
          onChange={handleValueChange}
          value={value}
          />
        {
          !isFocus && <span className='blur-input'>
          <ion-icon name="search-outline"></ion-icon>Tìm kiếm
        </span>
        }
        {
          isFocus && <span className='focus-input'>
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon onClick={handleCancelSearch} name="close-circle-sharp"></ion-icon>
        </span>
        }
      </label>
    </div>
  );
}

export default HeaderSreach;