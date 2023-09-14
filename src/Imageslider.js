import React, { useState } from 'react'
import{images} from './Imagedata';
import { FaGreaterThan , FaLessThan } from 'react-icons/fa';

const Imageslider = () => {
    const[currImg , setCurrrImg] =useState(0);

  return (
   <div className='image_slider'>
      <div className='Imageslider_line' style={{backgroundImage:`url(${images[currImg].img})`}} >
        <div className='left'>
          <button id='left' onClick={() => {currImg>0 && setCurrrImg(currImg-1)
          }}>
          <FaGreaterThan style={{ fontSize: 50}} />
          </button>
          </div>

          <div className='right'>
          <button id='right'onClick={() => {
            currImg < images.length - 1 && setCurrrImg(currImg + 1);
          }}>
          <FaLessThan style={{ fontSize: 50}} />   
          </button>
          </div>
   
      </div>
   </div>
  )
}

export default Imageslider