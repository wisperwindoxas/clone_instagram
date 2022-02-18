import React from 'react'
import style from './slider.module.css'

export default function SliderItems({img, text}) {
  return (
 
        
        <div className={style.slider_items}>
            <div className={style.photo}>
                <img src={img} alt={text} />
            </div>
            <p>{text}</p>
        </div>

  )
}
