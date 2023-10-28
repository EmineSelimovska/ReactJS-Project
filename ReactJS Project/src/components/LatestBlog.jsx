export default function LatestBlog(){
    return(
        <section id="aa-latest-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-latest-blog-area">
                <div className="aa-title">
                  <h2>Latest News</h2>
                  <span />
                  <p>What's new!</p>
                </div>
                <div className="aa-latest-blog-content">
                  <div className="row">
                    <div className="col-md-4">
                      <article className="aa-blog-single">
                        <figure className="aa-blog-img">
                          <a href="#"><img src="img/blog-img-1.jpg" alt="img" /></a>
                          <span className="aa-date-tag">15 April, 22</span>
                        </figure>
                        <div className="aa-blog-single-content">
                          <h3><a href="#">One room apartment</a></h3>
                          <p>Sold!</p>
                          <div className="aa-blog-single-bottom">
                            <a href="#" className="aa-blog-author"><i className="fa fa-user" /> Admin</a>
                            <a href="#" className="aa-blog-comments"><i className="fa fa-comment-o" />6</a>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-4">
                      <article className="aa-blog-single">
                        <figure className="aa-blog-img">
                          <a href="#"><img src="img/blog-img-2.webp" alt="img" /></a>
                          <span className="aa-date-tag">15 April, 22</span>
                        </figure>
                        <div className="aa-blog-single-content">
                          <h3><a href="#">Two room apartment</a></h3>
                          <p>Sold!</p>
                          <div className="aa-blog-single-bottom">
                            <a href="#" className="aa-blog-author"><i className="fa fa-user" /> Admin</a>
                            <a href="#" className="aa-blog-comments"><i className="fa fa-comment-o" />6</a>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-md-4">
                      <article className="aa-blog-single">
                        <figure className="aa-blog-img">
                          <a href="#"><img src="img/blog-img-3.webp" alt="img" /></a>
                          <span className="aa-date-tag">15 April, 23</span>
                        </figure>
                        <div className="aa-blog-single-content">
                          <h3><a href="#">Three-room apartment</a></h3>
                          <p>Sold!</p>
                          <div className="aa-blog-single-bottom">
                            <a href="#" className="aa-blog-author"><i className="fa fa-user" /> Admin</a>
                            <a href="#" className="aa-blog-comments"><i className="fa fa-comment-o" />6</a>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}