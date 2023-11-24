import { Link } from "react-router-dom";
import useForm from "../hooks/useForm"

export default function Login() {
    const {values, onChange, onSubmit} = useForm({
        email: '',
        password: '',
    });
    return (
        <><section id="aa-signin">
            <div className="container" style={{ padding: '5em' }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="aa-signin-area">
                            <div className="aa-signin-form">
                                <div className="aa-signin-form-title">
                                    <Link className="aa-property-home" to="/">Home</Link>
                                    <h4>Sign in to your account</h4>
                                </div>
                                <form className="contactform" onSubmit={onSubmit}>
                                    <div className="aa-single-field">
                                        <label htmlFor="email">Email <span className="required">*</span></label>
                                        <input 
                                        type="email" 
                                        required="required" 
                                        id="email"
                                        name="email" 
                                        onChange={onChange}
                                        value={values.email}/>
                                    </div>
                                    <div className="aa-single-field">
                                        <label htmlFor="password">Password <span className="required">*</span></label>
                                        <input 
                                        type="password" 
                                        id="password-login"
                                        name="password" 
                                        onChange={onChange}
                                        value={values.password}/>
                                    </div>
                                    <div className="aa-single-submit">
                                        <input type="submit" value="Send Message" className="aa-browse-btn" name="Submit" />
                                        <p>Don't Have A Account Yet? <Link to="/register">CREATE NOW!</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}