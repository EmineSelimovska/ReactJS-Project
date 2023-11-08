import { useEffect, useState } from "react"
import * as dataService from "../servises/dateService"
export default function AboutUs() {

  const [about, setAbout] = useState([]);
  console.log(about);
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

                      <h4 style={{ paddingTop: "0", paddingBottom: '0' }} key={a._id}>{a.setsUpApart}</h4>

                    ))}

                    {about.map(a => (

                      <div key={a._id}>
                        <div style={{ padding: "0 0 0.5em 0" }}>{a.name1}</div>
                        <div style={{ padding: "0 0 0.5em 0.2em" }}>{a.name2}</div>
                        <div style={{ padding: "0 0 0.5em 0.2em" }} >{a.name3}</div>
                        <div style={{ padding: "0 0 0.5em 0.2em" }} >{a.name4}</div>
                      </div>
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