import { useEffect, useState } from "react"
import HeadeLeft from "./HeaderLeft";
import * as dateService from "../servises/dateService";
import { Link } from "react-router-dom";
import AuthContext from '../contexts/authContext'
import { useContext } from 'react'

export default function Header(props) {
  const {
    isAuthenticated,
    username,
    email
  } = useContext(AuthContext)

  const [contact, setContact] = useState([]);
  console.log(contact);
  useEffect(() => {
    dateService.getContact()
      .then(result => setContact(result))

  }, [])
  return (
    <header id="aa-header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-header-area">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-6">
                  {contact.map(c => (
                    <HeadeLeft
                      key={c.contact_id}
                      _id={c._id}
                      phone={c.phone}
                      email={c.email}
                    />
                  ))}
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
                      <span style={{color: "white"}}>{username}</span>
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