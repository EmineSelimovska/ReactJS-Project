import {Link} from 'react-router-dom'
export default function Menu(){
    return(
        <section id="aa-menu-area">
        <nav className="navbar navbar-default main-navbar" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              
              <a className="navbar-brand aa-logo-img" href="index.html"><img src="img/logo.png" alt="logo" /></a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul id="top-menu" className="nav navbar-nav navbar-right aa-main-nav">
                <li className="active"><Link to="/">HOME</Link></li>
               
                <li> <Link to="/properties">PROPERTIES <span className="caret" /></Link></li> 
                
                <li><Link to="/gallery">GALLERY</Link></li>
                <li className="dropdown">
                  <Link className="dropdown-toggle" data-toggle="dropdown" to="/blog">BLOG <span className="caret" /></Link>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="blog-archive.html">BLOG</a></li>
                    <li><a href="blog-single.html">BLOG DETAILS</a></li>
                  </ul>
                </li>
                <li><Link href="/contact">CONTACT</Link></li>
                <li><a href="404.html">404 PAGE</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    )
}