import { Link } from "react-router-dom";
import AuthContext from '../../contexts/authContext'
import { useContext } from 'react'

export default function Header(props) {
  const {
    isAuthenticated,
    username,
    email
  } = useContext(AuthContext)

  return (
    <header id="aa-header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-header-area">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="aa-header-left">
                    <div className="aa-telephone-no">
                      <span className="fa fa-phone" />
                      <span> +359 877 123 321</span>
                    </div>
                    <div className="aa-email hidden-xs">
                      <span className="fa fa-envelope-o" /> 
                      <span>msell@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="aa-header-right">
                    {!isAuthenticated && (
                      <>
                        <Link to="/register" className="aa-register">Register</Link>
                        <Link to="/login" className="aa-login">Login</Link>
                      </>
                    )}

                    {isAuthenticated && (
                      <>
                        <span style={{ color: "white" }}>{username}</span>
                        <Link to="/logout" className="aa-logout">Logout</Link>
                      </>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}