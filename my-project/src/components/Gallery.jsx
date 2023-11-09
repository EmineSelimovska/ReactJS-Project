import { Link } from "react-router-dom";

export default function Gallery(){
    return(
      <>
      <section id="aa-property-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="aa-property-header-inner">
              <h2>Gallery</h2>
              <ol class="breadcrumb">
              <li><Link to="/">HOME</Link></li>            
              <li class="active">Gallery</li>
            </ol>
            </div>
          </div>
        </div>
      </div>
      </section>
        <section id="aa-gallery">
        <div className="container"style={{padding: '5em'}} >
          <div className="row">
            <div className="col-md-12">
              <div className="aa-gallery-area">
                <div className="aa-title">
                  <h2>Gallery View</h2>
                  <span />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi commodi eum dolorem aut eos, debitis quaerat reiciendis, officiis consectetur ducimus atque suscipit ab at tempora!</p>
                </div>
                {/* Start gallery */}
                <div className="aa-gallery-content">
                  <div className="aa-gallery-top">
                    {/* Start gallery menu */}
                    <ul>
                      <li data-filter="all" className="filter active">All</li>
                      <li data-filter=".apartment" className="filter">Apartment</li>
                      <li data-filter=".livingroom" className="filter">Living Room</li>
                      <li data-filter=".bedroom" className="filter">Bedroom</li>
                      <li data-filter=".kitchen" className="filter">Kitchen</li>
                      <li data-filter=".garage" className="filter">Garage</li>
                    </ul>
                  </div>
                  {/* Start gallery image */}
                  <div id="mixit-container" className="aa-gallery-body">
                    {/* start single gallery image */}
                    <div className="aa-single-gallery mix apartment">                  
                      <div className="aa-single-gallery-item">
                        <div className="aa-single-gallery-img">
                          <a href="#"><img src="img/gallery/small/1.jpg" alt="img" /></a>
                        </div>
                        <div className="aa-single-gallery-info">
                          <a className="fancybox" data-fancybox-group="gallery" href="img/gallery/big/1.jpg"><span className="fa fa-eye">
                            </span></a><a className="aa-link" href="#"><span className="fa fa-link" /></a>
                        </div>                  
                      </div>
                    </div>
                    {/* start single gallery image */}
                    <div className="aa-single-gallery mix garage">                  
                      <div className="aa-single-gallery-item">
                        <div className="aa-single-gallery-img">
                          <a href="#"><img src="img/gallery/small/2.jpg" alt="img" /></a>
                        </div>
                        <div className="aa-single-gallery-info">
                          <a className="fancybox" data-fancybox-group="gallery" href="img/gallery/big/2.jpg"><span className="fa fa-eye" /></a>
                          <a className="aa-link" href="#"><span className="fa fa-link" /></a>
                        </div>                  
                      </div>
                    </div>
                    {/* start single gallery image */}
                    <div className="aa-single-gallery mix livingroom">                  
                      <div className="aa-single-gallery-item">
                        <div className="aa-single-gallery-img">
                          <a href="#"><img src="img/gallery/small/3.jpg" alt="img" /></a>
                        </div>
                        <div className="aa-single-gallery-info">
                          <a className="fancybox" data-fancybox-group="gallery" href="img/gallery/big/3.jpg"><span className="fa fa-eye">
                            </span></a><a className="aa-link" href="#"><span className="fa fa-link" /></a>
                        </div>
                      </div>
                    </div>
                    {/* start single gallery image */}
                    <div className="aa-single-gallery mix bedroom">                  
                      <div className="aa-single-gallery-item">
                        <div className="aa-single-gallery-img">
                          <a href="#"><img src="img/gallery/small/4.jpg" alt="img" /></a>
                        </div>
                        <div className="aa-single-gallery-info">
                          <a className="fancybox" data-fancybox-group="gallery" href="img/gallery/big/4.jpg"><span className="fa fa-eye">
                            </span></a><a className="aa-link" href="#"><span className="fa fa-link" /></a>
                        </div>
                      </div>
                    </div>
                    {/* start single gallery image */}
                    <div className="aa-single-gallery mix apartment">                  
                      <div className="aa-single-gallery-item">
                        <div className="aa-single-gallery-img">
                          <a href="#"><img src="img/gallery/small/5.jpg" alt="img" /></a>
                        </div>
                        <div className="aa-single-gallery-info">
                          <a className="fancybox" data-fancybox-group="gallery" href="img/gallery/big/5.jpg"><span className="fa fa-eye">
                            </span></a><a className="aa-link" href="#"><span className="fa fa-link" /></a>
                        </div>
                      </div>
                    </div>
                    {/* start single gallery image */}
                    <div className="aa-single-gallery mix livingroom">                  
                      <div className="aa-single-gallery-item">
                        <div className="aa-single-gallery-img">
                          <a href="#"><img src="img/gallery/small/6.jpg" alt="img" /></a>
                        </div>
                        <div className="aa-single-gallery-info">
                          <a className="fancybox" data-fancybox-group="gallery" href="img/gallery/big/6.jpg"><span className="fa fa-eye">
                            </span></a><a className="aa-link" href="#"><span className="fa fa-link" /></a>
                        </div>
                      </div>
                    </div>
                    {/* start single gallery image */}
                    <div className="aa-single-gallery mix apartment">                  
                      <div className="aa-single-gallery-item">
                        <div className="aa-single-gallery-img">
                          <a href="#"><img src="img/gallery/small/7.jpg" alt="img" /></a>
                        </div>
                        <div className="aa-single-gallery-info">
                          <a className="fancybox" data-fancybox-group="gallery" href="img/gallery/big/7.jpg"><span className="fa fa-eye">
                            </span></a><a className="aa-link" href="#"><span className="fa fa-link" /></a>
                        </div>                  
                      </div>
                    </div>
                    {/* start single gallery image */}
                    <div className="aa-single-gallery mix garage">                  
                      <div className="aa-single-gallery-item">
                        <div className="aa-single-gallery-img">
                          <a href="#"><img src="img/gallery/small/8.jpg" alt="img" /></a>
                        </div>
                        <div className="aa-single-gallery-info">
                          <a className="fancybox" data-fancybox-group="gallery" href="img/gallery/big/8.jpg"><span className="fa fa-eye" /></a>
                          <a className="aa-link" href="#"><span className="fa fa-link" /></a>
                        </div>                  
                      </div>
                    </div>
                    {/* start single gallery image */}
                    <div className="aa-single-gallery mix livingroom">                  
                      <div className="aa-single-gallery-item">
                        <div className="aa-single-gallery-img">
                          <a href="#"><img src="img/gallery/small/9.jpg" alt="img" /></a>
                        </div>
                        <div className="aa-single-gallery-info">
                          <a className="fancybox" data-fancybox-group="gallery" href="img/gallery/big/9.jpg"><span className="fa fa-eye">
                            </span></a><a className="aa-link" href="#"><span className="fa fa-link" /></a>
                        </div>
                      </div>
                    </div>
                    {/* start single gallery image */}
                    <div className="aa-single-gallery mix bedroom">                  
                      <div className="aa-single-gallery-item">
                        <div className="aa-single-gallery-img">
                          <a href="#"><img src="img/gallery/small/10.jpg" alt="img" /></a>
                        </div>
                        <div className="aa-single-gallery-info">
                          <a className="fancybox" data-fancybox-group="gallery" href="img/gallery/big/10.jpg"><span className="fa fa-eye">
                            </span></a><a className="aa-link" href="#"><span className="fa fa-link" /></a>
                        </div>
                      </div>
                    </div>
                    {/* start single gallery image */}
                    <div className="aa-single-gallery mix kitchen">                  
                      <div className="aa-single-gallery-item">
                        <div className="aa-single-gallery-img">
                          <a href="#"><img src="img/gallery/small/11.jpg" alt="img" /></a>
                        </div>
                        <div className="aa-single-gallery-info">
                          <a className="fancybox" data-fancybox-group="gallery" href="img/gallery/big/11.jpg"><span className="fa fa-eye">
                            </span></a><a className="aa-link" href="#"><span className="fa fa-link" /></a>
                        </div>
                      </div>
                    </div>
                    {/* start single gallery image */}
                    <div className="aa-single-gallery mix livingroom">                  
                      <div className="aa-single-gallery-item">
                        <div className="aa-single-gallery-img">
                          <a href="#"><img src="img/gallery/small/12.jpg" alt="img" /></a>
                        </div>
                        <div className="aa-single-gallery-info">
                          <a className="fancybox" data-fancybox-group="gallery" href="img/gallery/big/12.jpg"><span className="fa fa-eye">
                            </span></a><a className="aa-link" href="#"><span className="fa fa-link" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
    }