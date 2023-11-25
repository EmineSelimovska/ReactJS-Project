import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/authContext";
import useForm from "../hooks/useForm";

const RegisterFormKeys = {
  Email: 'email',
  Username: 'username',
  Password: 'password',
  ConfirmPassword: 'confirm-password'
}

export default function Register(){
  const {registerSubmitHandler} = useContext(AuthContext);
 
  const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
   [RegisterFormKeys.Email]: '',
   [RegisterFormKeys.Username]: '',
   [RegisterFormKeys.Password]: '',
   [RegisterFormKeys.ConfirmPassword]: '',
  })
  
   
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
                  <form className="contactform"onSubmit={onSubmit}>                                                 
                    <div className="aa-single-field">
                      <label for="username">Name <span className="required">*</span></label>
                      <input 
                      type="text" 
                      required="required" 
                      aria-required="true" 
                      values={values[RegisterFormKeys.Username]} 
                      id="username"
                      name="username" 
                      onChange={onChange}/>
                    </div>
                    <div className="aa-single-field">
                      <label for="email">Email <span className="required">*</span></label>
                      <input 
                      type="email" 
                      required="required" 
                      aria-required="true" 
                      values={values[RegisterFormKeys.Email]}
                      id="email"
                      name="email"
                      onChange={onChange}/>
                    </div>
                    <div className="aa-single-field">
                      <label for="password">Password <span className="required">*</span></label>
                      <input 
                      type="password" 
                      id="password"
                      values={values[RegisterFormKeys.Password]}
                      name="password" 
                      onChange={onChange}/> 
                    </div>
                    <div className="aa-single-field">
                      <label for="confirm-password">Confirm Password <span className="required">*</span></label>
                      <input 
                      type="password"
                      id="confirm-password" 
                      values={values[RegisterFormKeys.ConfirmPassword]}
                      name="confirm-password" 
                      onChange={onChange}/> 
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