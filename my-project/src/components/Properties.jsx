import { Link } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu-area";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import * as propertyService from "../servises/propertyService";
import ProperyListItem from "./PropertyListItem";


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
                <aside className="aa-properties-sidebar">

                  <div className="aa-properties-single-sidebar">
                    <h3>Properties Search</h3>
                    <form >
                      <div className="aa-single-advance-search">
                        <input type="text" placeholder="Type Your Location" />
                      </div>
                      <div className="aa-single-advance-search">
                        <select >
                          <option >Property Type</option>
                          {property.map(crt => (
                            <option key={crt._id}
                              value={crt.property_type}>{crt.property_type}</option>
                          ))}
                        </select>
                      </div>
                      <div className="aa-single-advance-search">
                        <select >
                          <option >Square Meters</option>
                          {property.map(crt => (
                            <option key={crt._id}
                              value={crt.square_meters}>{crt.square_meters}</option>
                          ))}
                        </select>
                      </div>
                      <div className="aa-single-advance-search">
                        <select >
                          <option >Year Built</option>
                          {property.map(crt => (
                            <option key={crt._id}
                              value={crt.year_built}>{crt.year_built}</option>
                          ))}
                        </select>
                      </div>

                      <div className="aa-single-advance-search">
                        <input type="submit" defaultValue="Search" className="aa-search-btn" />
                      </div>
                    </form>
                  </div>

                  <div className="aa-properties-single-sidebar">
                    <h3>Populer Properties</h3>
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img className="media-object" src="img/item/1.jpg" alt="img" />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading"><a href="#">This is Title</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <span>$65000</span>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img className="media-object" src="img/item/1.jpg" alt="img" />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading"><a href="#">This is Title</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <span>$65000</span>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img className="media-object" src="img/item/1.jpg" alt="img" />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading"><a href="#">This is Title</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <span>$65000</span>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}