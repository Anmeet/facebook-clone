import React from 'react';
import './Widgets.css';

const Widgets = () => {
  return (
    <div className='widgets'>
      <iframe
        src='https://leanlab.com.au/'
        width='340'
        height='100%'
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
        frameBorder='0'
        allowTransparency='true'
        allow='encrypted-media'
      ></iframe>
    </div>
  );
};

export default Widgets;
