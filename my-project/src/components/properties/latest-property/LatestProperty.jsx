import * as propertyService from "../../../servises/propertyService";
import { Link } from "react-router-dom";
import { pathToUrl } from "../../../utils/pathUtils";
import { useEffect , useState} from "react";

export default function LatestProperty() {
  const [latestProperty, setLatestProperty] = useState([]);

  useEffect(() => {
    propertyService.getLatest()
      .then(result => setLatestProperty(result))
  }, [])
  return (

    <aside className="aa-properties-sidebar">
     
        <div className="aa-properties-single-sidebar">
          <h3>Latest Properties</h3>
          {latestProperty.map(latest =>
          <div className="media" key={latest._id}>
            <div className="media-left">

              <img className="media-object" src={latest.imgProperty} alt="img" />

            </div>
            <div className="media-body">
              <h4 className="media-heading"><Link to={pathToUrl("/properties/:propertyId", { propertyId:latest._id })}>{latest.property_type}</Link></h4>
              <p>{latest.description}</p>
              <span>${latest.price}</span>
            </div>
          </div>
              )}
        </div>
  
      {!latestProperty.length && <p className="no-articles">No games yet</p>}
    </aside>


  )
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