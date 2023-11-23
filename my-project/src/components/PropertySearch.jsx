import { useEffect, useState } from "react";
import * as propertyService from "../servises/propertyService";

export default function PropertySearch(){
    const [property, setProperty] = useState([]);
    useEffect(() => {
      propertyService.getAll()
        .then(result => setProperty(result))
  
  
    }, [])
   
   return(  <aside className="aa-properties-sidebar">

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
  </aside>)
}