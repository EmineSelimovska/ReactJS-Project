
    export default function Contact(){
        return(
          <>
             <section id="aa-property-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="aa-property-header-inner">
              <h2>Contact</h2>
              <ol class="breadcrumb">
              <li><a href="#">HOME</a></li>            
              <li class="active">CONTACT</li>
            </ol>
            </div>
          </div>
        </div>
      </div>
      </section> 
<section id="aa-contact" >
        <div className="container" style={{padding: '5em'}}>
          <div className="row">
            <div className="col-md-12">
              <div className="aa-contact-area">
                <div className="aa-contact-top">
                  <div className="aa-contact-top-left " style={{}}>
                    <iframe width="100%" height={450} frameBorder={0} allowFullScreen style={{border: 0}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6851.201919469417!2d-86.11773906635584!3d33.47324776828677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888bdb60cc49c571%3A0x40451ca6baf275c7!2s36008+AL-77%2C+Talladega%2C+AL+35160%2C+USA!5e0!3m2!1sbn!2sbd!4v1460452919256" />
                  </div>
                  <div className="aa-contact-top-right">
                    <h2>Contact</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae placeat aspernatur aperiam, quisquam voluptas enim tempore ab itaque nam modi eos corrupti distinctio nobis labore dolorum quae tenetur. Sapiente, sequi.</p>
                    <ul className="contact-info-list">
                      <li> <i className="fa fa-phone" /> 1-700-564-6321</li>
                      <li> <i className="fa fa-envelope-o" /> info@homeproperty.com</li>
                      <li> <i className="fa fa-map-marker" /> 36008 AL-77, Talladega, AL 35160, USA</li>
                    </ul>
                  </div>
                </div>
                <div className="aa-contact-bottom">
                  <div className="aa-title">
                    <h2>Send Your Message</h2>
                    <span />
                    <p>Your email address will not be published. Required fields are marked <strong className="required">*</strong></p>
                  </div>
                  <div className="aa-contact-form">
                    <form className="contactform">                  
                      <p className="comment-form-author">
                        <label htmlFor="author">Name <span className="required">*</span></label>
                        <input type="text" name="author" defaultValue size={30} required="required" />
                      </p>
                      <p className="comment-form-email">
                        <label htmlFor="email">Email <span className="required">*</span></label>
                        <input type="email" name="email" defaultValue aria-required="true" required="required" />
                      </p>
                      <p className="comment-form-url">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" />  
                      </p>
                      <p className="comment-form-comment">
                        <label htmlFor="comment">Message</label>
                        <textarea name="comment" cols={45} rows={8} aria-required="true" required="required" defaultValue={""} />
                      </p>                
                      <p className="form-submit">
                        <input type="submit" name="submit" className="aa-browse-btn" defaultValue="Send Message" />
                      </p>        
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
        )
    }