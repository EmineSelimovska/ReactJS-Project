import { Link } from "react-router-dom";

export default function Properties(){
    return(
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
           
            <div className="aa-properties-content-head">              
              <div className="aa-properties-content-head-left">
                <form action="" className="aa-sort-form">
                  <label htmlFor="">Sort by</label>
                  <select name="">
                    <option value="1" selected="Default">Default</option>
                    <option value="2">Name</option>
                    <option value="3">Price</option>
                    <option value="4">Date</option>
                  </select>
                </form>
                <form action="" className="aa-show-form">
                  <label htmlFor="">Show</label>
                  <select name="">
                    <option value="1" selected="12">6</option>
                    <option value="2">12</option>
                    <option value="3">24</option>
                  </select>
                </form>
              </div>
              <div className="aa-properties-content-head-right">
                <a id="aa-grid-properties" href="#"><span className="fa fa-th"></span></a>
                <a id="aa-list-properties" href="#"><span className="fa fa-list"></span></a>
              </div>            
            </div>
          
            <div className="aa-properties-content-body">
              <ul className="aa-properties-nav">
                <li>
                  <article className="aa-properties-item">
                    <a className="aa-properties-item-img" href="#">
                      <img alt="img" src="img/promo-banner.jpg"/>
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
                          $35000
                        </span>
                        <a className="aa-secondary-btn" href="#">View Details</a>
                      </div>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="aa-properties-item">
                    <a className="aa-properties-item-img" href="#">
                      <img alt="img" src="img/item/1.jpg"/>
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
                          $35000
                        </span>
                        <a className="aa-secondary-btn" href="#">View Details</a>
                      </div>
                    </div>
                  </article>
                </li>
                 <li>
                  <article className="aa-properties-item">
                    <a className="aa-properties-item-img" href="#">
                      <img alt="img" src="img/item/2.jpg"/>
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
                          $35000
                        </span>
                        <a className="aa-secondary-btn" href="#">View Details</a>
                      </div>
                    </div>
                  </article>
                </li>
                <li>
                  <article className="aa-properties-item">
                    <a className="aa-properties-item-img" href="#">
                      <img alt="img" src="img/item/5.jpg"/>
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
                        <a className="aa-secondary-btn" href="#">View Details</a>
                      </div>
                    </div>
                  </article>
                </li>
                 <li>
                  <article className="aa-properties-item">
                    <a className="aa-properties-item-img" href="#">
                      <img alt="img" src="img/item/3.jpg"/>
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
                          $35000
                        </span>
                        <a className="aa-secondary-btn" href="#">View Details</a>
                      </div>
                    </div>
                  </article>
                </li>
                 <li>
                  <article className="aa-properties-item">
                    <a className="aa-properties-item-img" href="#">
                      <img alt="img" src="img/item/4.jpg"/>
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
                        <a className="aa-secondary-btn" href="#">View Details</a>
                      </div>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
            
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
              <form action>
        <div className="aa-single-advance-search">
          <input type="text" placeholder="Type Your Location" />
        </div>
        <div className="aa-single-advance-search">
          <select id name>
            <option selected value={0}>Category</option>
            <option value={1}>Flat</option>
            <option value={2}>Land</option>
            <option value={3}>Plot</option>
            <option value={4}>Commercial</option>
          </select>
        </div>
        <div className="aa-single-advance-search">
          <select id name>
            <option selected value={0}>Type</option>
            <option value={1}>Flat</option>
            <option value={2}>Land</option>
            <option value={3}>Plot</option>
            <option value={4}>Commercial</option>
          </select>
        </div>
        <div className="aa-single-advance-search">
          <select id name>
            <option selected value={0}>Type</option>
            <option value={1}>Flat</option>
            <option value={2}>Land</option>
            <option value={3}>Plot</option>
            <option value={4}>Commercial</option>
          </select>
        </div>
        <div className="aa-single-filter-search">
          <span>AREA (SQ)</span>
          <span>FROM</span>
          <span id="skip-value-lower" className="example-val">30.00</span>
          <span>TO</span>
          <span id="skip-value-upper" className="example-val">100.00</span>
          <div id="aa-sqrfeet-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
          </div>                  
        </div>
        <div className="aa-single-filter-search">
          <span>PRICE ($)</span>
          <span>FROM</span>
          <span id="skip-value-lower2" className="example-val">30.00</span>
          <span>TO</span>
          <span id="skip-value-upper2" className="example-val">100.00</span>
          <div id="aa-price-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
          </div>      
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
                    <img className="media-object" src="img/item/1.jpg" alt="img"/>
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
                    <img className="media-object" src="img/item/1.jpg" alt="img"/>
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
                    <img className="media-object" src="img/item/1.jpg" alt="img"/>
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
    )
}