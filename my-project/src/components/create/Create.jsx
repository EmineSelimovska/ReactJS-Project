import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as propertyService from '../../servises/propertyService';
import styles from "./Create.module.css"


export default function Create() {
    const navigate = useNavigate();
    const onCreateSubmitHadler = async (e) => {
        e.preventDefault();

        const propertyDate = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await propertyService.create(propertyDate);
            navigate('/properties')
        } catch (err) {
            return err
        }


    }

    return (
        <section id={styles.create}>
            <div className={styles.container}>
                <div className="row" >
                    <div className="col-md-12">
                        <div className={styles.createArea}>
                            <div className={styles.createForm}>
                                <div className={styles.formTitle}>
                                    <Link className={styles.createHome} to="/properties">Property</Link>
                                    <h4 className={styles.h4}>Create property</h4>
                                </div>
                                <form className="createform" onSubmit={onCreateSubmitHadler}>
                                    <div className={styles.propertyTypeField}>
                                        <label  {...styles.label} htmlFor="propery_type">Property Type </label>
                                        <input type="property_type" required="required" name="property_type" id="property_type" />
                                    </div>
                                    <div className={styles.cityField}>
                                        <label {...styles.label} htmlFor="city">City</label>
                                        <input type="city" required="required" name="city" id="city" />
                                    </div>
                                    <div className={styles.priceField}>
                                        <label {...styles.label} htmlFor="price">Price </label>
                                        <input type="price" required="required" name="price" id="price" />
                                    </div>
                                    <div className={styles.bedroomsField}>
                                        <label {...styles.label} htmlFor="bedrooms">Bedrooms </label>
                                        <input type="bedrooms" required="required" name="bedrooms" id="bedrooms" />
                                    </div>
                                    <div className={styles.bathroomsField}>
                                        <label {...styles.label} htmlFor="bathrooms">Bathrooms </label>
                                        <input type="bathrooms" required="required" name="bathrooms" id="bathrooms" />
                                    </div>
                                    <div className={styles.squareMetersField}>
                                        <label {...styles.label} htmlFor="square_meters">Square Meters </label>
                                        <input type="square_meters" required="required" name="square_meters" id="square_meters" />
                                    </div>
                                    <div className={styles.propertyImageField}>
                                        <label {...styles.label} htmlFor="imgProperty">Image </label>
                                        <input type="text" name="imgProperty" id="imgProperty" />
                                    </div>
                                    <div className={styles.statusField}>
                                        <label {...styles.label} htmlFor="status">Status </label>
                                        <input type="status" required="required" name="status" id="status" />
                                    </div>
                                    <div className={styles.yearBuiltField}>
                                        <label {...styles.label} htmlFor="year_built">Year Built </label>
                                        <input type="year_built" required="required" name="year_built" id="year_built" />
                                    </div>
                                    <div className={styles.descriptionField}>
                                        <label {...styles.label}>More Details</label>
                                        <textarea  type="description" required="required" name="description" id="description" ></textarea>
                                       
                                    </div>
                                    <div className={styles.createSubmit}>
                                        <input type="submit" value="Create" className="aa-browse-btn" name="submit" id="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}