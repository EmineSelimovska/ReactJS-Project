import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <section id="aa-error">
        <div className="container">
          <row>
            <div className="col-md-12">
              <div className="aa-error-area">
                <h2>Not Found Page</h2>
                <p><span className="fa fa-warning" />Oops! The Page you requested was not found!</p>
                <Link to="/">Back Home</Link>
              </div>
            </div>
          </row>
        </div>
      </section>
    )
}