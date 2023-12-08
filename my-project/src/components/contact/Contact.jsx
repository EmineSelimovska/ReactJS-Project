import Header from "../header/Header";
import Menu from "../menu-area/Menu-area";
import Footer from "../footer/Footer";
import Map from '../map/Map';
import * as dataService from '../../servises/dateService';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function Contact() {
  const navigate = useNavigate();
  const [contact, setContact] = useState([]);
  
  
  useEffect(() => {
    dataService.getContact()
      .then(result => setContact(result))
  }, [])
  console.log(contact);


  const onCreateSubmitHadler = async (e) => {
    e.preventDefault();

    const propertyDate = Object.fromEntries(new FormData(e.currentTarget));

    try{
      await dataService.create(propertyDate);
      toast.success('You message send')
      navigate('/')
    }catch(err){
      toast.error(err.message)
    }
     
  }
   
  return (
    <>
      <Header />
      <Menu />
      <section id="aa-property-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-property-header-inner">
                <h2>Contact</h2>
                <ol className="breadcrumb">
                  <li><a href="#">HOME</a></li>
                  <li className="active">CONTACT</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="aa-contact" >
        <div className="container" style={{ padding: '5em' }}>
          <div className="row">
            <div className="col-md-12">
              <div className="aa-contact-area">
                <div className="aa-contact-top">
                  <div className="aa-contact-top-left " >
                    <Map />
                  </div>
                  {contact.map(c => (
                    <div className="aa-contact-top-right" key={c._id} style={{ padding: '1em' }}>
                      <h2>Contact</h2>
                      <p>{c.info}</p>
                      <ul className="contact-info-list">
                        <li> <i className="fa fa-phone" /> {c.tel}</li>
                        <li> <i className="fa fa-envelope-o" /> {c.email}</li>
                        <li> <i className="fa fa-map-marker" /> {c.address}</li>
                      </ul>
                    </div>
                  ))}

                </div>
                <div className="aa-contact-bottom">
                  <div className="aa-title">
                    <h2>Send Your Message</h2>
                    <span />
                    <p>Your email address will not be published. Required fields are marked <strong className="required">*</strong></p>
                  </div>
                  <div className="aa-contact-form" >
                    <form className="contactform" onSubmit={onCreateSubmitHadler}>
                      <p className="comment-form-author">
                        <label htmlFor="author">Name <span className="required">*</span></label>
                        <input type="text" name="author" required="required" />
                      </p>
                      <p className="comment-form-email">
                        <label htmlFor="email">Email <span className="required">*</span></label>
                        <input type="email" name="email"  required="required" />
                      </p>
                      <p className="comment-form-url">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" />
                      </p>
                      <p className="comment-form-comment">
                        <label htmlFor="comment">Message</label>
                        <textarea name="comment"  required="required"  />
                      </p>
                      <p className="form-submit">
                        <input type="submit" name="submit" className="aa-browse-btn" value="Send Message" />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )

}