import { Link } from "react-router-dom";

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
                                    <Link className={styles.createHome} to="/">Home</Link>
                                    <h4 className={styles.h4}>Create property</h4>
                                </div>
                                <form className="createform">
                                    <div className={styles.propertyTypeField}>
                                        <label  {...styles.label} htmlFor="properyType">Property Type </label>
                                        <input  type="propertyType" required="required" name="propertyType" id="propertyType"/>
                                    </div>
                                    <div className={styles.cityField}>
                                        <label {...styles.label} htmlFor="city">City</label>
                                        <input type="city" required="required"  name="city" id="city" />
                                    </div>
                                    <div className={styles.streetField}>
                                        <label {...styles.label} htmlFor="street">Street </label>
                                        <input type="street" required="required" name="street" id="street" />
                                    </div>
                                    <div className={styles.priceField}>
                                        <label {...styles.label} htmlFor="price">Price </label>
                                        <input type="price" required="required"  name="price" id="price"/>
                                    </div>
                                    <div className={styles.bedroomsField}>
                                        <label {...styles.label} htmlFor="bedrooms">Bedrooms </label>
                                        <input type="bedrooms" required="required"  name="bedrooms" id="bedrooms"/>
                                    </div>
                                    <div className={styles.bathroomsField}>
                                        <label {...styles.label}  htmlFor="bathrooms">Bathrooms </label>
                                        <input type="bathrooms" required="required"  name="bathrooms" id="bathrooms" />
                                    </div>
                                    <div className={styles.squareMetersField}>
                                        <label {...styles.label} htmlFor="squareMeters">Square Meters </label>
                                        <input type="squareMeters" required="required"  name="squareMeters" id="squareMeters"/>
                                    </div>
                                    <div className={styles.yearBuiltField}>
                                        <label {...styles.label} htmlFor="yearBuilt">Year Built </label>
                                        <input type="yearBuilt" required="required" name="yearBuilt" id="yearBuilt"/>
                                    </div>
                                    <div className={styles.descriptionField}>
                                        <label {...styles.label} htmlFor="description">More details </label>
                                        <input type="description" required="required"  name="description" id="description"/>
                                    </div>
                                    <div className={styles.createSubmit}>
                                        <input type="submit" value="Create" className="aa-browse-btn" name="submit" id="submit"/>
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