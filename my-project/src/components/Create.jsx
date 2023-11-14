import { Link } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu-area";
import Footer from "./Footer";

import  styles from "./Create.module.css"
export default function Create(){
    return(
      <>
   
        <section id={styles.create}>
        <div className={styles.container}>
        <div className="row" >
                    <div className="col-md-12">
                        <div className={styles.createArea}>
                            <div className={styles.createForm}>
                                <div className={styles.formTitle}>
                                    <Link className="aa-create-home" to="/">Home</Link>
                                    <h4>Create property</h4>
                                </div>
                                <form className="createform">
                                    <div className="aa-propertyType-field">
                                        <label htmlFor="properyType">Property Type </label>
                                        <input type="propertyType" required="required"   name="propertyType" />
                                    </div>
                                    <div className="aa-city-field">
                                        <label htmlFor="city">City</label>
                                        <input type="city" required="required"  name="city" />
                                    </div>
                                    <div className="aa-street-field">
                                        <label htmlFor="street">Street </label>
                                        <input type="street" required="required"   name="street" />
                                    </div>
                                    <div className="aa-price-field">
                                        <label htmlFor="price">Price </label>
                                        <input type="price" required="required"  name="price" />
                                    </div>
                                    <div className="aa-bedrooms-field">
                                        <label htmlFor="bedrooms">Bedrooms </label>
                                        <input type="bedrooms" required="required"  name="bedrooms" />
                                    </div>
                                    <div className="aa-bathrooms-field">
                                        <label htmlFor="bathrooms">Bathrooms </label>
                                        <input type="bathrooms" required="required"  name="bathrooms" />
                                    </div>
                                    <div className="aa-squareMeters-field">
                                        <label htmlFor="squareMeters">Square Meters </label>
                                        <input type="squareMeters" required="required"  name="squareMeters" />
                                    </div>
                                    <div className="aa-yearBuilt-field">
                                        <label htmlFor="yearBuilt">Year Built </label>
                                        <input type="yearBuilt" required="required" name="yearBuilt" />
                                    </div>
                                    <div className="aa-description-field">
                                        <label htmlFor="description">More details </label>
                                        <input type="description" required="required"  name="description" />
                                    </div>
                                    <div className="aa-single-submit">
                                        <input type="submit" value="Create" className="aa-browse-btn" name="Submit" />
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