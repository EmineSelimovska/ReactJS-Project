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
              
              <Link className="navbar-brand aa-logo-img" to="/"><img src="../img/logo.png" alt="logo" /></Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul id="top-menu" className="nav navbar-nav navbar-right aa-main-nav">
            
              <li> <Link to="/">HOME</Link></li> 
                <li> <Link to="/properties">PROPERTIES </Link></li> 
                
                <li><Link to="/create">CREATE</Link></li>
               
                <li><Link to="/contact">CONTACT</Link></li>
               
              </ul>
            </div>
          </div>
        </nav>
      </section>
    )
}