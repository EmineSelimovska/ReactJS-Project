import PropertySearch from "./PropertySearch";
import Header from "./Header";

import { Link,} from "react-router-dom";
import { useParams } from "react-router-dom";
import * as propertyService from "../servises/propertyService"
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Menu from "./Menu-area";

export default function PropertyDetails({match}){
    const {propertyId} = useParams();
    const [property, setProperty] = useState({})
  
    useEffect(() => {
    
        propertyService.getOne(propertyId)
        .then(result => setProperty(result));
    
    },[propertyId])
    return(
        <>
        <Header />
        
       <Menu/>
            <section id="aa-property-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aa-property-header-inner">
                                <h2>Properties Details</h2>
                                <ol className="breadcrumb">
                                    <li><Link to="/properties">Properties</Link></li>
                                    <li className="active">{property.property_type}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Proerty header  */}
            {/* Start Properties  */}
            <section id="aa-properties">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="aa-properties-content">
                                {/* Start properties content body */}
                                <div className="aa-properties-details">
                                    <div className="aa-properties-details-img">
                                        <img src={property.imgProperty} />
                                    </div>
                                    <div className="aa-properties-info">
                                        <h2>{property.property_type}</h2>
                                        <span className="aa-price">${property.price}</span>
                                        <p>City: {property.city}</p>
                                        <p>Bedrooms: {property.bedrooms}</p>
                                        <p>Bathrooms:{property.bathrooms}</p>
                                        <p>Square Meters: {property.square_meters}</p>
                                        <p>Year Built: {property.year_built}</p>
                                        <p>Description: {property.description} </p>
                                        
                                        <h4>Property Map</h4>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6851.201919469417!2d-86.11773906635584!3d33.47324776828677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888bdb60cc49c571%3A0x40451ca6baf275c7!2s36008+AL-77%2C+Talladega%2C+AL+35160%2C+USA!5e0!3m2!1sbn!2sbd!4v1460452919256" width="100%" height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                                    </div>
                                    {/* Properties social share */}
                                    <div className="aa-properties-social">
                                        <ul>
                                            <li>Share</li>
                                            <li><Link to="https://www.facebook.com"><i className="fa fa-facebook" /></Link></li>
                                            <li><Link to="https://twitter.com"><i className="fa fa-twitter" /></Link></li>
                                            <li><Link to="https://www.google.com/account/about/?hl=bg"><i className="fa fa-google-plus" /></Link></li>
                                            <li><Link to="https://www.youtube.com"><i className="fa fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Start properties sidebar */}
                        <div className="col-md-4">
                            <aside className="aa-properties-sidebar">
                                <PropertySearch />
                            </aside>
                        </div>
                    </div>
                </div>
                <div>
                {/* <div className="buttons" style={{display:'flex', justifyContent:"center", alignItems: "center", gap:"2em", paddingTop: "1em"}}>
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
                </div>
            </section>
    
        <Footer/>
        </>
    );
}