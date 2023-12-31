import * as dateService from "../../servises/dateService";
import * as propertyService from '../../servises/propertyService'
import React, { useEffect, useState, useReducer } from "react"
import { Slide } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css';
import Header from "../header/Header";
import Menu from "../menu-area/Menu-area";
import Footer from "../footer/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

export default function Home(props) {
     const navigate = useNavigate()
    const [options, setOption] = useState([]);
    const [about, setAbout] = useState([]);
    console.log(options);

    useEffect(() => {
        propertyService.getAll()
            .then(result => setOption(result))
            .catch((err) => {
              if(err){
                console.log(err.message);
                navigate('/')
              }
            })

        dateService.getAbout()
            .then(result => setAbout(result))
            .catch((err) => {
              
                console.log(err.message);
                navigate('/')
              
            })
            

    }, [])
    


    console.log(about);

    return (
        <>
            <Header />

            <Menu />
            <section id="aa-slider">

                <div className="aa-slider-area">

                    <div className="aa-top-slider">
                        <Slide {...proprietes}>


                            <div className="aa-top-slider-single">

                                <img src="img/slider/1.jpg" alt="img1" />


                            </div>
                            <div className="aa-top-slider-single">
                                <img src="img/slider/2.jpg" alt="img" />


                            </div>
                            <div className="aa-top-slider-single">
                                <img src="img/slider/3.jpg" alt="img" />


                            </div>
                            <div className="aa-top-slider-single">
                                <img src="img/slider/4.jpg" alt="img" />


                            </div>
                            <div className="aa-top-slider-single">
                                <img src="img/slider/5.jpg" alt="img" />

                            </div>
                            <div className="aa-top-slider-single">
                                <img src="img/slider/6.jpg" alt="img" />

                            </div>

                        </Slide>
                    </div>

                </div>

            </section>
               
          

            <section id="aa-about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aa-about-us-area">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="aa-about-us-left">
                                            <img src="img/about-us.jpg" alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="aa-title">
                                            <h2>About Us</h2>
                                            <span />
                                        </div>
                                        {about.map(a => (
                                            <div className="aa-about-us-right" key={a._id}>
                                                <p >{a.welcome}</p>
                                                <h4 style={{ paddingTop: "0", paddingBottom: '0' }}>{a.setsUpApart}</h4>

                                                <div >
                                                    <div style={{ padding: "0 0 0.5em 0" }}>{a.name1}</div>
                                                    <div style={{ padding: "0 0 0.5em 0.2em" }}>{a.name2}</div>
                                                    <div style={{ padding: "0 0 0.5em 0.2em" }} >{a.name3}</div>
                                                    <div style={{ padding: "0 0 0 0.1em" }} >{a.name4}</div>
                                                </div>


                                            </div>

                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="aa-service" style={{ paddingTop: '5px' }}>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aa-service-area"  >
                                <div className="aa-title">
                                    {about.map(a => (
                                        <h2 key={a._id}>{a.service}</h2>
                                    ))}
                                    <span />
                                    {about.map(a => (
                                        <p key={a._id}>{a.def}</p>
                                    ))}

                                </div>
                                <div className="aa-service-content">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="aa-single-service">
                                                <div className="aa-service-icon">
                                                    <span className="fa fa-home" />
                                                </div>

                                                {about.map(a => (
                                                    <div className="aa-single-service-content" key={a._id}>
                                                        <h4>{a.n1}</h4>
                                                        <p>{a.definition1}</p>
                                                    </div>

                                                ))}

                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="aa-single-service">
                                                <div className="aa-service-icon">
                                                    <span className="fa fa-check" />
                                                </div>
                                                {about.map(a => (
                                                    <div className="aa-single-service-content" key={a._id}>
                                                        <h4>{a.n2}</h4>
                                                        <p>{a.definition2}</p>
                                                    </div>

                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="aa-single-service">
                                                <div className="aa-service-icon">
                                                    <span className="fa fa-crosshairs" />
                                                </div>
                                                {about.map(a => (
                                                    <div className="aa-single-service-content" key={a._id}>
                                                        <h4>{a.n3}</h4>
                                                        <p>{a.definition3}</p>
                                                    </div>

                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="aa-single-service">
                                                <div className="aa-service-icon">
                                                    <span className="fa fa-bar-chart-o" />
                                                </div>
                                                {about.map(a => (
                                                    <div className="aa-single-service-content" key={a._id}>
                                                        <h4>{a.n4}</h4>
                                                        <p>{a.definition4}</p>
                                                    </div>

                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="aa-promo-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aa-promo-banner-area">
                                <h3>Find Your Best Property</h3>
                                <p>Take a look at our offers and don't hesitate to contact us if you have any questions.</p>
                                <div>
                                    <p> <Link to="/properties" className="aa-view-btn"> View Details</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            {/* <section id="aa-latest-property">
    <div class="container">
      <div class="aa-latest-property-area">
        <div class="aa-title">
          <h2>Latest Properties</h2>
          <span></span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit ea nobis quae vero voluptatibus.</p>         
        </div>
        <div class="aa-latest-properties-content">
          <div class="row">
            <div class="col-md-4">
              <article class="aa-properties-item">
                <a href="#" class="aa-properties-item-img">
                  <img src="img/item/1.jpg" alt="img">
                </a>
                <div class="aa-tag for-sale">
                  For Sale
                </div>
                <div class="aa-properties-item-content">
                  <div class="aa-properties-info">
                    <span>5 Rooms</span>
                    <span>2 Beds</span>
                    <span>3 Baths</span>
                    <span>1100 SQ FT</span>
                  </div>
                  <div class="aa-properties-about">
                    <h3><a href="#">Appartment Title</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
                  </div>
                  <div class="aa-properties-detial">
                    <span class="aa-price">
                      $35000
                    </span>
                    <a href="#" class="aa-secondary-btn">View Details</a>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-4">
              <article class="aa-properties-item">
                <a href="#" class="aa-properties-item-img">
                  <img src="img/item/2.jpg" alt="img">
                </a>
                <div class="aa-tag for-rent">
                  For Rent
                </div>
                <div class="aa-properties-item-content">
                  <div class="aa-properties-info">
                    <span>5 Rooms</span>
                    <span>2 Beds</span>
                    <span>3 Baths</span>
                    <span>1100 SQ FT</span>
                  </div>
                  <div class="aa-properties-about">
                    <h3><a href="#">Appartment Title</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
                  </div>
                  <div class="aa-properties-detial">
                    <span class="aa-price">
                      $11000
                    </span>
                    <a href="#" class="aa-secondary-btn">View Details</a>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-4">
              <article class="aa-properties-item">
                <a href="#" class="aa-properties-item-img">
                  <img src="img/item/3.jpg" alt="img">
                </a>
                <div class="aa-tag sold-out">
                  Sold Out
                </div>
                <div class="aa-properties-item-content">
                  <div class="aa-properties-info">
                    <span>5 Rooms</span>
                    <span>2 Beds</span>
                    <span>3 Baths</span>
                    <span>1100 SQ FT</span>
                  </div>
                  <div class="aa-properties-about">
                    <h3><a href="#">Appartment Title</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
                  </div>
                  <div class="aa-properties-detial">
                    <span class="aa-price">
                      $15000
                    </span>
                    <a href="#" class="aa-secondary-btn">View Details</a>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-4">
              <article class="aa-properties-item">
                <a href="#" class="aa-properties-item-img">
                  <img src="img/item/4.jpg" alt="img">
                </a>
                <div class="aa-tag for-sale">
                  For Sale
                </div>
                <div class="aa-properties-item-content">
                  <div class="aa-properties-info">
                    <span>5 Rooms</span>
                    <span>2 Beds</span>
                    <span>3 Baths</span>
                    <span>1100 SQ FT</span>
                  </div>
                  <div class="aa-properties-about">
                    <h3><a href="#">Appartment Title</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
                  </div>
                  <div class="aa-properties-detial">
                    <span class="aa-price">
                      $35000
                    </span>
                    <a href="#" class="aa-secondary-btn">View Details</a>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-4">
              <article class="aa-properties-item">
                <a href="#" class="aa-properties-item-img">
                  <img src="img/item/5.jpg" alt="img">
                </a>                
                <div class="aa-tag sold-out">
                  Sold Out
                </div>
                <div class="aa-properties-item-content">
                  <div class="aa-properties-info">
                    <span>5 Rooms</span>
                    <span>2 Beds</span>
                    <span>3 Baths</span>
                    <span>1100 SQ FT</span>
                  </div>
                  <div class="aa-properties-about">
                    <h3><a href="#">Appartment Title</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
                  </div>
                  <div class="aa-properties-detial">
                    <span class="aa-price">
                      $11000
                    </span>
                    <a href="#" class="aa-secondary-btn">View Details</a>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-4">
              <article class="aa-properties-item">
                <a href="#" class="aa-properties-item-img">
                  <img src="img/item/6.jpg" alt="img">
                </a>
                <div class="aa-tag for-rent">
                  For Rent
                </div>
                <div class="aa-properties-item-content">
                  <div class="aa-properties-info">
                    <span>5 Rooms</span>
                    <span>2 Beds</span>
                    <span>3 Baths</span>
                    <span>1100 SQ FT</span>
                  </div>
                  <div class="aa-properties-about">
                    <h3><a href="#">Appartment Title</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
                  </div>
                  <div class="aa-properties-detial">
                    <span class="aa-price">
                      $15000
                    </span>
                    <a href="#" class="aa-secondary-btn">View Details</a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}


            <Footer />
        </>
    )
}