import * as dateService from "../servises/dateService";
import * as propertyService from '../servises/propertyService'
import React, { useEffect, useState } from "react"
import { Slide } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css';
import Header from "./Header";
import Menu from "./Menu-area";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import AdvanceSearch from "./AdvanceSearch";

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}


export default function Home(props) {

  const [options, setOption] = useState([]);
  const [about, setAbout] = useState([]);
  console.log(options);

  useEffect(() => {
    propertyService.getAll()
      .then(result => setOption(result))

    dateService.getAbout()
      .then(result => setAbout(result))

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

      <AdvanceSearch />


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
                    
                      <div className="aa-about-us-right" >
                        <p>Welcome to Msell Real Estate, your trusted partner in the world of real estate in Plovdiv, Bulgaria. With a strong presence in the local real estate market, we have built a reputation for excellence and reliability.</p>
                        <h4 style={{ paddingTop: "0", paddingBottom: '0' }}>What Sets Us Apart:</h4>

                        <div>
                          <div >Local Expertise: We have an in-depth knowledge of the Plovdiv real estate market, allowing us to offer expert advice and guidance.</div>
                          <div >Client-Centric Approach: Your goals are our top priority. We take the time to understand your unique needs and work tirelessly to achieve your objectives.</div>
                          <div>Integrity and Trust: We believe in transparency and honesty. You can trust us to provide accurate information, fair deals, and unwavering support.</div>
                          <div>Innovation: We leverage the latest technology and market insights to provide innovative solutions and marketing strategies.</div>
                        <div>Community Involvement: We are proud to be a part of the Plovdiv community and actively contribute to its growth and development.</div>
                        </div>


                      </div>

                    
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

                  <h2>Our Service</h2>

                  <span />

                  <p>What we offer!</p>


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

      {/* <section id="aa-agents">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aa-agents-area">
                                <div className="aa-title">
                                    <h2>Our Agents</h2>
                                    <span />

                                </div>
                                <div className="aa-agents-content"  >

                                    {options.map(op => (
                                        <ul className="aa-agents-slider" key={op.listing_agent.agent_id}>
                                            <li >
                                                <div className="aa-single-agents" >
                                                    <div className="aa-agents-img">
                                                        <img src={op.listing_agent.imgAgent} alt="" />
                                                    </div>
                                                    <div className="aa-agetns-info" >
                                                        <h4 >{op.listing_agent.name}</h4>
                                                        <span>{op.listing_agent.contact.email}</span>
                                                        <div className="aa-agent-social">
                                                            <Link to="https://www.facebook.com"><i className="fa fa-facebook" /></Link>
                                                            <Link to="https://twitter.com"><i className="fa fa-twitter" /></Link>
                                                            <Link to="https://www.linkedin.com"><i className="fa fa-linkedin" /></Link>
                                                            <Link to="https://www.google.com/account/about/?hl=bg"><i className="fa fa-google-plus" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    ))}

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