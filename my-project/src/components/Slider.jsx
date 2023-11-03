import React, { useEffect, useState } from "react"
import { Slide } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css';




const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const img = [
  "img/slider/3.jpg",
  "img/slider/2.jpg",
  "img/slider/1.jpg",
  "img/slider/4.jpg",
  "img/slider/5.jpg",
  "img/slider/6.jpg"

]




export default function Slider() {




  return (

    <section id="aa-slider">

      <div className="aa-slider-area">

        <div className="aa-top-slider">
          <Slide {...proprietes}>


            <div className="aa-top-slider-single">

              <img src={img[1]} alt="img1" />


            </div>
            <div className="aa-top-slider-single">
              <img src={img[2]} alt="img" />


            </div>
            <div className="aa-top-slider-single">
              <img src={img[3]} alt="img" />


            </div>
            <div className="aa-top-slider-single">
              <img src={img[4]} alt="img" />


            </div>
            <div className="aa-top-slider-single">
              <img src={img[5]} alt="img" />

            </div>
          </Slide>
        </div>

      </div>

    </section>

  )
}