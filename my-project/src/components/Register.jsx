import { Link } from "react-router-dom";

export default function Register(){
    return(
        <section id="aa-signin">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-signin-area">
                <div className="aa-signin-form">
                  <div className="aa-signin-form-title">
                    <Link className="aa-property-home" to="/">Home</Link>
                    <h4>Create your account and Stay with us</h4>
                  </div>
                  <form className="contactform">                                                 
                    <div className="aa-single-field">
                      <label for="name">Name <span className="required">*</span></label>
                      <input type="text" required="required" aria-required="true" value="" name="name"/>
                    </div>
                    <div className="aa-single-field">
                      <label for="email">Email <span className="required">*</span></label>
                      <input type="email" required="required" aria-required="true" value="" name="email"/>
                    </div>
                    <div className="aa-single-field">
                      <label for="password">Password <span className="required">*</span></label>
                      <input type="password" name="password"/> 
                    </div>
                    <div className="aa-single-field">
                      <label for="confirm-password">Confirm Password <span className="required">*</span></label>
                      <input type="password" name="confirm-password"/> 
                    </div>
                    <div className="aa-single-submit">
                      <input type="submit" value="Create Account" name="submit"/>                    
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    )
}