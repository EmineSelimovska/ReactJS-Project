import { useEffect, useState } from "react";
import * as propertyService from "../servises/propertyService";
import { toast } from "react-toastify";

export default function LatestProperty(){
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
      <h3>Latest Properties</h3>
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





{/* <section id="aa-latest-property">
<div className="container">
  <div className="aa-latest-property-area">
    <div className="aa-title">
      <h2>Latest Properties</h2>
      <span />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit ea nobis quae vero voluptatibus.</p>         
    </div>
    <div className="aa-latest-properties-content">
      <div className="row">
        <div className="col-md-4">
          <article className="aa-properties-item">
            <a href="#" className="aa-properties-item-img">
              <img src="img/item/1.jpg" alt="img" />
            </a>
            <div className="aa-tag for-sale">
              For Sale
            </div>
            <div className="aa-properties-item-content">
              <div className="aa-properties-info">
                <span>5 Rooms</span>
                <span>2 Beds</span>
                <span>3 Baths</span>
                <span>1100 SQ FT</span>
              </div>
              <div className="aa-properties-about">
                <h3><a href="#">Appartment Title</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
              </div>
              <div className="aa-properties-detial">
                <span className="aa-price">
                  $35000
                </span>
                <a href="#" className="aa-secondary-btn">View Details</a>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="aa-properties-item">
            <a href="#" className="aa-properties-item-img">
              <img src="img/item/2.jpg" alt="img" />
            </a>
            <div className="aa-tag for-rent">
              For Rent
            </div>
            <div className="aa-properties-item-content">
              <div className="aa-properties-info">
                <span>5 Rooms</span>
                <span>2 Beds</span>
                <span>3 Baths</span>
                <span>1100 SQ FT</span>
              </div>
              <div className="aa-properties-about">
                <h3><a href="#">Appartment Title</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
              </div>
              <div className="aa-properties-detial">
                <span className="aa-price">
                  $11000
                </span>
                <a href="#" className="aa-secondary-btn">View Details</a>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="aa-properties-item">
            <a href="#" className="aa-properties-item-img">
              <img src="img/item/3.jpg" alt="img" />
            </a>
            <div className="aa-tag sold-out">
              Sold Out
            </div>
            <div className="aa-properties-item-content">
              <div className="aa-properties-info">
                <span>5 Rooms</span>
                <span>2 Beds</span>
                <span>3 Baths</span>
                <span>1100 SQ FT</span>
              </div>
              <div className="aa-properties-about">
                <h3><a href="#">Appartment Title</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
              </div>
              <div className="aa-properties-detial">
                <span className="aa-price">
                  $15000
                </span>
                <a href="#" className="aa-secondary-btn">View Details</a>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="aa-properties-item">
            <a href="#" className="aa-properties-item-img">
              <img src="img/item/4.jpg" alt="img" />
            </a>
            <div className="aa-tag for-sale">
              For Sale
            </div>
            <div className="aa-properties-item-content">
              <div className="aa-properties-info">
                <span>5 Rooms</span>
                <span>2 Beds</span>
                <span>3 Baths</span>
                <span>1100 SQ FT</span>
              </div>
              <div className="aa-properties-about">
                <h3><a href="#">Appartment Title</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
              </div>
              <div className="aa-properties-detial">
                <span className="aa-price">
                  $35000
                </span>
                <a href="#" className="aa-secondary-btn">View Details</a>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="aa-properties-item">
            <a href="#" className="aa-properties-item-img">
              <img src="img/item/5.jpg" alt="img" />
            </a>                
            <div className="aa-tag sold-out">
              Sold Out
            </div>
            <div className="aa-properties-item-content">
              <div className="aa-properties-info">
                <span>5 Rooms</span>
                <span>2 Beds</span>
                <span>3 Baths</span>
                <span>1100 SQ FT</span>
              </div>
              <div className="aa-properties-about">
                <h3><a href="#">Appartment Title</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
              </div>
              <div className="aa-properties-detial">
                <span className="aa-price">
                  $11000
                </span>
                <a href="#" className="aa-secondary-btn">View Details</a>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="aa-properties-item">
            <a href="#" className="aa-properties-item-img">
              <img src="img/item/6.jpg" alt="img" />
            </a>
            <div className="aa-tag for-rent">
              For Rent
            </div>
            <div className="aa-properties-item-content">
              <div className="aa-properties-info">
                <span>5 Rooms</span>
                <span>2 Beds</span>
                <span>3 Baths</span>
                <span>1100 SQ FT</span>
              </div>
              <div className="aa-properties-about">
                <h3><a href="#">Appartment Title</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
              </div>
              <div className="aa-properties-detial">
                <span className="aa-price">
                  $15000
                </span>
                <a href="#" className="aa-secondary-btn">View Details</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</div>
</section> */}