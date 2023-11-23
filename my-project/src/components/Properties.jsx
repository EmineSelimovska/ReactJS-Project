import { Link } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu-area";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import * as propertyService from "../servises/propertyService";
import ProperyListItem from "./PropertyListItem";
import PropertySearch from "./PropertySearch";


export default function Properties() {

const [property, setProperty] = useState([]);
  useEffect(() => {
    propertyService.getAll()
      .then(result => setProperty(result))


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

                  <div className="aa-properties-content-bottom">
                    <nav>
                      <ul className="pagination">
                        <li>
                          <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li className="active"><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li>
                          <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
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