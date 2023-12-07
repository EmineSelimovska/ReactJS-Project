import { Link } from "react-router-dom";
import Header from "../header/Header";
import Menu from "../menu-area/Menu-area";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import * as propertyService from "../../servises/propertyService";
import ProperyListItem from "../property-list-item/PropertyListItem";
import { toast } from "react-toastify";
import LatestProperty from "./latest-property/LatestProperty";
import withAuth from "../../HOC/withAuth";


function Properties() {

  const [property, setProperty] = useState([]);
 

  useEffect(() => {
    propertyService.getAll()
      .then(result => setProperty(result))
      .catch((err) => {
        if (err) {
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
                  <div>
                    <ProperyListItem />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
              
                   
                    <LatestProperty />
                   
                  </div>
               
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

const enhanceProperties = withAuth(Properties)

export default enhanceProperties
