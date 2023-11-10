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

const img = [
    "img/slider/3.jpg",
    "img/slider/2.jpg",
    "img/slider/1.jpg",
    "img/slider/4.jpg",
    "img/slider/5.jpg",
    "img/slider/6.jpg"

]


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
                                        <div className="aa-about-us-right">
                                            <div className="aa-title">
                                                <h2>About Us</h2>
                                                <span />
                                            </div>
                                            {about.map(a => (

                                                <p key={a._id}>{a.welcome}</p>

                                            ))}
                                            {about.map(a => (

                                                <p key={a._id}>{a.mission}</p>

                                            ))}

                                            {about.map(a => (

                                                <h4 style={{ paddingTop: "0", paddingBottom: '0' }} key={a._id}>{a.setsUpApart}</h4>

                                            ))}

                                            {about.map(a => (

                                                <div key={a._id}>
                                                    <div style={{ padding: "0 0 0.5em 0" }}>{a.name1}</div>
                                                    <div style={{ padding: "0 0 0.5em 0.2em" }}>{a.name2}</div>
                                                    <div style={{ padding: "0 0 0.5em 0.2em" }} >{a.name3}</div>
                                                    <div style={{ padding: "0 0 0 0.1em" }} >{a.name4}</div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="aa-service" style={{paddingTop: '5px'}}>
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
                                                        <h4><a href="#">{a.n1}</a></h4>
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
                                                        <h4><a href="#">{a.n2}</a></h4>
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
                                                        <h4><a href="#">{a.n3}</a></h4>
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
                                                        <h4><a href="#">{a.n4}</a></h4>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit ea nobis quae vero voluptatibus.</p>
                                </div>
                                <div className="aa-agents-content">
                                    <ul className="aa-agents-slider">
                                        <li>
                                            <div className="aa-single-agents">
                                                <div className="aa-agents-img">
                                                    <img src="img/agents/agent-1.png" alt="agent member image" />
                                                </div>
                                                <div className="aa-agetns-info">
                                                    <h4><a href="#">Philip Smith</a></h4>
                                                    <span>Top Agent</span>
                                                    <div className="aa-agent-social">
                                                        <a href="#"><i className="fa fa-facebook" /></a>
                                                        <a href="#"><i className="fa fa-twitter" /></a>
                                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                                        <a href="#"><i className="fa fa-google-plus" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="aa-single-agents">
                                                <div className="aa-agents-img">
                                                    <img src="img/agents/agent-5.jpg" alt="agent member image" />
                                                </div>
                                                <div className="aa-agetns-info">
                                                    <h4><a href="#">Adam Barney</a></h4>
                                                    <span>Expert Agent</span>
                                                    <div className="aa-agent-social">
                                                        <a href="#"><i className="fa fa-facebook" /></a>
                                                        <a href="#"><i className="fa fa-twitter" /></a>
                                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                                        <a href="#"><i className="fa fa-google-plus" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="aa-single-agents">
                                                <div className="aa-agents-img">
                                                    <img src="img/agents/agent-2.jpeg" alt="agent member image" />
                                                </div>
                                                <div className="aa-agetns-info">
                                                    <h4><a href="#">Paul Walker</a></h4>
                                                    <span>Director</span>
                                                    <div className="aa-agent-social">
                                                        <a href="#"><i className="fa fa-facebook" /></a>
                                                        <a href="#"><i className="fa fa-twitter" /></a>
                                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                                        <a href="#"><i className="fa fa-google-plus" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="aa-single-agents">
                                                <div className="aa-agents-img">
                                                    <img src="img/agents/agent-4.jpg" alt="agent member image" />
                                                </div>
                                                <div className="aa-agetns-info">
                                                    <h4><a href="#">John Smith</a></h4>
                                                    <span>Jr. Agent</span>
                                                    <div className="aa-agent-social">
                                                        <a href="#"><i className="fa fa-facebook" /></a>
                                                        <a href="#"><i className="fa fa-twitter" /></a>
                                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                                        <a href="#"><i className="fa fa-google-plus" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="aa-single-agents">
                                                <div className="aa-agents-img">
                                                    <img src="img/agents/agent-1.png" alt="agent member image" />
                                                </div>
                                                <div className="aa-agetns-info">
                                                    <h4><a href="#">Philip Smith</a></h4>
                                                    <span>Top Agent</span>
                                                    <div className="aa-agent-social">
                                                        <a href="#"><i className="fa fa-facebook" /></a>
                                                        <a href="#"><i className="fa fa-twitter" /></a>
                                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                                        <a href="#"><i className="fa fa-google-plus" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="aa-single-agents">
                                                <div className="aa-agents-img">
                                                    <img src="img/agents/agent-5.jpg" alt="agent member image" />
                                                </div>
                                                <div className="aa-agetns-info">
                                                    <h4><a href="#">Adam Barney</a></h4>
                                                    <span>Expert Agent</span>
                                                    <div className="aa-agent-social">
                                                        <a href="#"><i className="fa fa-facebook" /></a>
                                                        <a href="#"><i className="fa fa-twitter" /></a>
                                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                                        <a href="#"><i className="fa fa-google-plus" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="aa-single-agents">
                                                <div className="aa-agents-img">
                                                    <img src="img/agents/agent-3.jpg" alt="agent member image" />
                                                </div>
                                                <div className="aa-agetns-info">
                                                    <h4><a href="#">Paul Walker</a></h4>
                                                    <span>Director</span>
                                                    <div className="aa-agent-social">
                                                        <a href="#"><i className="fa fa-facebook" /></a>
                                                        <a href="#"><i className="fa fa-twitter" /></a>
                                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                                        <a href="#"><i className="fa fa-google-plus" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="aa-single-agents">
                                                <div className="aa-agents-img">
                                                    <img src="img/agents/agent-4.jpg" alt="agent member image" />
                                                </div>
                                                <div className="aa-agetns-info">
                                                    <h4><a href="#">John Smith</a></h4>
                                                    <span>Jr. Agent</span>
                                                    <div className="aa-agent-social">
                                                        <a href="#"><i className="fa fa-facebook" /></a>
                                                        <a href="#"><i className="fa fa-twitter" /></a>
                                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                                        <a href="#"><i className="fa fa-google-plus" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
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