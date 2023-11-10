import * as dateService from "../servises/dateService";
import React, { useEffect, useState } from "react"
import { Slide } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css';
import Header from "./Header";
import Menu from "./Menu-area";
import Footer from "./Footer";
import { Link } from "react-router-dom";

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
        dateService.getProperty()
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

            <section id="aa-advance-search">
                <div className="container">
                    <div className="aa-advance-search-area">
                        <div className="form">
                            <div className="aa-advance-search-top">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="aa-single-advance-search">
                                            <input type="text" placeholder="Location" />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="aa-single-advance-search">
                                            <select >
                                                <option >Property Type</option>
                                                {options.map(crt => (
                                                    <option key={crt.property_id}
                                                        value={crt.property_type}>{crt.property_type}</option>
                                                ))}

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="aa-single-advance-search">
                                            <select>
                                                <option >Square Meters</option>
                                                {options.map(crt => (
                                                    <option key={crt.property_id}
                                                        value={crt.square_meters}>{crt.square_meters}</option>
                                                ))}

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="aa-single-advance-search">
                                            <select>
                                                <option >Year Built</option>
                                                {options.map(crt => (
                                                    <option key={crt.property_id}
                                                        value={crt.year_built}>{crt.year_built}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="aa-single-advance-search">
                                            <input className="aa-search-btn" type="submit" value="Search" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="aa-advance-search-bottom">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="aa-single-filter-search">
                                            <span>AREA (SQ)</span>
                                            <span>FROM</span>
                                            <span id="skip-value-lower" className="example-val">30.00</span>
                                            <span>TO</span>
                                            <span id="skip-value-upper" className="example-val">1000.00</span>
                                            <div id="aa-sqrfeet-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="aa-single-filter-search">
                                            <span>PRICE (EUR)</span>
                                            <span>FROM</span>
                                            <span id="skip-value-lower2" className="example-val">30.00</span>
                                            <span>TO</span>
                                            <span id="skip-value-upper2" className="example-val">500.00</span>
                                            <div id="aa-price-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

            <section id="aa-agents">
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
                                                        <img src={op.listing_agent.img} alt="agent member image" />
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
            </section>

            <Footer />
        </>
    )
}