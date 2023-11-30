import { Link } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu-area";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import * as propertyService from "../servises/propertyService";
import ProperyListItem from "./PropertyListItem";
import PropertySearch from "./PropertySearch";
import { toast } from "react-toastify";


export default function Properties() {

const [property, setProperty] = useState([]);
  useEffect(() => {
    propertyService.getAll()
      .then(result => setProperty(result))
       .catch((err) => {
        if(err){
          return err.message
        }
        
         
       })

  }, [])

  console.log(property);
  return (
    <><Header />
      <Menu />
      <div>
        <section id="aa-property-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="aa-property-header-inner">
                  <h2>Properties</h2>
                  <ol className="breadcrumb">
                    <li><Link to="/">HOME</Link></li>
                    <li className="active">PROPERTIES</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="aa-properties">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
               
                <div className="aa-properties-content">

                 <ProperyListItem/>

                  
                </div>

                {property.length === 0 && (
                  <p className="no-comment" style={{fontSize: "6em" , marginLeft:'150px' }}>No properties found</p>
                )}
              </div>

              <div className="col-md-4">
              <PropertySearch/>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}