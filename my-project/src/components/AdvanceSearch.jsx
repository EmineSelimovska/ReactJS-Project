import { useEffect, useState } from "react"
import * as propertyService from "../servises/propertyService";


export default function AdvanceSearch(){
   const [options, setOption] = useState([]);

   useEffect(() => {
    propertyService.getAll()
    .then(result => setOption(result))
   }, [])
   
    return(
        <section id="aa-advance-search">
        <div className="container">
            <div className="aa-advance-search-area">
                <div className="form">
                    <div className="aa-advance-search-top">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="aa-single-advance-search">
                                    <input type="text" placeholder="Location" />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="aa-single-advance-search">
                                    <select >
                                        <option >Property Type</option>
                                        {options.map(crt => (
                                            <option key={crt._id}
                                                value={crt.property_type}>{crt.property_type}</option>
                                        ))}

                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="aa-single-advance-search">
                                    <select>
                                        <option >Square Meters</option>
                                        {options.map(crt => (
                                            <option key={crt._id}
                                                value={crt.square_meters}>{crt.square_meters}</option>
                                        ))}

                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="aa-single-advance-search">
                                    <select>
                                        <option >Year Built</option>
                                        {options.map(crt => (
                                            <option key={crt._id}
                                                value={crt.year_built}>{crt.year_built}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="aa-single-advance-search">
                                    <input className="aa-search-btn" type="submit" value="Search" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aa-advance-search-bottom">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="aa-single-filter-search">
                                    <span>AREA (SQ)</span>
                                    <span>FROM</span>
                                    <span id="skip-value-lower" className="example-val">30.00</span>
                                    <span>TO</span>
                                    <span id="skip-value-upper" className="example-val">1000.00</span>
                                    <div id="aa-sqrfeet-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="aa-single-filter-search">
                                    <span>PRICE (EUR)</span>
                                    <span>FROM</span>
                                    <span id="skip-value-lower2" className="example-val">30.00</span>
                                    <span>TO</span>
                                    <span id="skip-value-upper2" className="example-val">500.00</span>
                                    <div id="aa-price-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                                    </div>
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