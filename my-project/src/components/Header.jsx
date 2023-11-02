import { useEffect, useState } from "react"
import HeadeLeft from "./HeaderLeft";
import * as dateService from "../servises/dateService";

export default function Header(props) {

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
                      key={c._id}
                      _id={c._id}
                      phone={c.phone}
                      email={c.email}
                      />
                     ))}
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="aa-header-right">
                    <a href="register.html" className="aa-register">Register</a>
                    <a href="signin.html" className="aa-login">Login</a>
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