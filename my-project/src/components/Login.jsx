import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Login() {
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
                                <form className="contactform">
                                    <div className="aa-single-field">
                                        <label htmlFor="email">Email <span className="required">*</span></label>
                                        <input type="email" required="required" aria-required="true"  name="email" />
                                    </div>
                                    <div className="aa-single-field">
                                        <label htmlFor="password">Password <span className="required">*</span></label>
                                        <input type="password" name="password" />
                                    </div>
                                    <div className="aa-single-field">
                                        <label>
                                            <input type="checkbox" /> Remember me
                                        </label>
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