import { useEffect, useState } from "react"
import * as dataService from "../servises/dateService"
export default function AboutUs() {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    dataService.getAbout()
      .then(result => setAbout(result))
  }, [])

  return (
    <section id="aa-about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-about-us-area">
              <div className="row">
                <div className="col-md-5">
                  <div className="aa-about-us-left">
                    <img src="img/about-us.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="aa-about-us-right">
                    <div className="aa-title">
                      <h2>About Us</h2>
                      <span />
                    </div>
                    {about.map(a => (

                      <p key={a._id}>{a.welcome}</p>

                    ))}
                    {about.map(a => (

                      <p key={a._id}>{a.mission}</p>

                    ))}

                    {about.map(a => (

                      <h4 key={a._id}>{a.setsUpApart}</h4>

                    ))}
                  
                    {about.map(a => (

                      <ul key={a._id}>
                        <li>{a.apart[0]}</li>
                        <li>{a.apart[1]}</li>
                        <li>{a.apart[2]}</li>
                        <li>{a.apart[3]}</li>
                        <li>{a.apart[4]}</li>
                      </ul>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}