import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer id="aa-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-footer-area">
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aa-footer-left">
                      <p>2023 &copy;</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aa-footer-middle">
                      <Link to="https://www.facebook.com"><i className="fa fa-facebook" /></Link>
                      <Link to="https://twitter.com"><i className="fa fa-twitter" /></Link>
                      <Link to="https://www.google.com/account/about/?hl=bg"><i className="fa fa-google-plus" /></Link>
                      <Link to="https://www.youtube.com"><i className="fa fa-youtube" /></Link>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="aa-footer-right">
                      <a href="/">Home</a>
                      <a href="#">Properties</a>
                      <a href="#">Blog</a>
                      <a href="#">Contact</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}