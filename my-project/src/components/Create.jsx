import { Link } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu-area";
import Footer from "./Footer";
export default function Create(){
    return(
      <>
      <Header/>
      <Menu/>
      <section id="aa-property-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="aa-property-header-inner">
              <h2>Gallery</h2>
              <ol class="breadcrumb">
              <li><Link to="/">HOME</Link></li>            
              <li class="active">Create</li>
            </ol>
            </div>
          </div>
        </div>
      </div>
      </section>
        <section id="aa-create">
        
      </section>
      <Footer/>
      </>
    )
    }