import { useEffect, useState } from "react";
import * as propertyService from "../servises/propertyService";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProperyListItem (){
  const navigate = useNavigate()
const [property, setProperty] = useState([]);
  useEffect(() => {
    propertyService.getAll()
      .then(result => setProperty(result))
        .catch((err) => {
           console.log(err.message);
           
        })

  }, [])

  return ( <div className="aa-properties-content-body">
   
  <ul className="aa-properties-nav"  >
  {property.map(prop => (
      <li className="aa-properties-item" key={prop._id} >
    
        <article className="aa-properties-item" >
          <div className="aa-properties-item-img" >
            <img alt="img" src={prop.imgProperty} />
          </div>

          <div className="aa-tag ">
            {prop.status}
          </div>

          <div className="aa-properties-item-content" >
            <div className="aa-properties-info">
              <span>{prop.bedrooms} Beds</span>
              <span>{prop.bathrooms} Baths</span>
              <span>{prop.square_meters} SQ FT</span>
            </div>
            <div className="aa-properties-about">
              <h3><Link to={`/properties/${prop._id}`}>{prop.property_type}</Link></h3>
              <p>{prop.description}</p>
            </div>
            <div className="aa-properties-detial">
              <span className="aa-price">
                ${prop.price}
              </span>
              <Link className="aa-secondary-btn" to={`/properties/${prop._id}`}>View Details</Link>
            </div>
          </div>
        </article>

      </li>
    ))}

  </ul>
  
</div>)
}