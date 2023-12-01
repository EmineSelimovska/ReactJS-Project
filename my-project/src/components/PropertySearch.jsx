import { useEffect, useState } from "react";
import * as propertyService from "../servises/propertyService";
import { toast } from "react-toastify";

export default function PropertySearch(){
    const [property, setProperty] = useState([]);
    useEffect(() => {
      propertyService.getAll()
        .then(result => setProperty(result))
         .catch((err) => {
          return err.message
         })
  
    }, [])
   
   return(  <aside className="aa-properties-sidebar">

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