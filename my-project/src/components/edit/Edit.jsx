import { Link, useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import * as propertyService from '../../servises/propertyService';
import styles from './Edit.module.css'
import useForm from '../../hooks/useForm';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

export default function Edit() {
    const navigate = useNavigate();
    const { propertyId } = useParams();
    const [property, setProperty] = useState({});
    const onCreateSubmitHadler = async (values) => {

        useEffect(() => {
            propertyService.getOne(propertyId)
                .then(result => {
                    setProperty(result);
                })
                .catch((err) => {
                    toast.error(err.message);
                })
        }, [propertyId])

        try {
            await propertyService.create(values);
            navigate('/properties')
        } catch (err) {
            if (err) {
                toast.error(err.message);
            }
        }


    }

    const { values, onChange, onSubmit } = useForm(onCreateSubmitHadler, property)

    return (
        <section id={styles.edit}>
            <div className={styles.container}>
                <div className="row" >
                    <div className="col-md-12">
                        <div className={styles.editArea}>
                            <div className={styles.editForm}>
                                <div className={styles.formTitle}>
                                    <Link className={styles.editHome} to="/properties">Property</Link>
                                    <h4 className={styles.h4}>Edit property</h4>
                                </div>
                                <form className="createform" onSubmit={onSubmit}>
                                    <div className={styles.propertyTypeField}>
                                        <label  {...styles.label} htmlFor="propery_type">Property Type </label>
                                        <input
                                            type="property_type"
                                            required="required"
                                            name="property_type"
                                            value={values.propety_type}
                                            onChange={onChange}
                                            id="property_type" />
                                    </div>
                                    <div className={styles.cityField}>
                                        <label {...styles.label} htmlFor="city">City</label>
                                        <input type="city"
                                            required="required"
                                            name="city"
                                            value={values.city}
                                            onChange={onChange}
                                            id="city" />
                                    </div>
                                    <div className={styles.priceField}>
                                        <label {...styles.label} htmlFor="price">Price </label>
                                        <input type="price"
                                            required="required"
                                            name="price"
                                            value={values.price}
                                            onChange={onChange}
                                            id="price" />
                                    </div>
                                    <div className={styles.bedroomsField}>
                                        <label {...styles.label} htmlFor="bedrooms">Bedrooms </label>
                                        <input type="bedrooms"
                                            required="required"
                                            name="bedrooms"
                                            value={values.bedrooms}
                                            onChange={onChange}
                                            id="bedrooms" />
                                    </div>
                                    <div className={styles.bathroomsField}>
                                        <label {...styles.label} htmlFor="bathrooms">Bathrooms </label>
                                        <input type="bathrooms"
                                            required="required"
                                            name="bathrooms"
                                            value={values.bathrooms}
                                            onChange={onChange}
                                            id="bathrooms" />
                                    </div>
                                    <div className={styles.squareMetersField}>
                                        <label {...styles.label} htmlFor="square_meters">Square Meters </label>
                                        <input type="square_meters"
                                            required="required"
                                            name="square_meters"
                                            value={values.square_meters}
                                            onChange={onChange}
                                            id="square_meters" />
                                    </div>
                                    <div className={styles.propertyImageField}>
                                        <label {...styles.label} htmlFor="imgProperty">Image </label>
                                        <input type="text"
                                            name="imgProperty"
                                            value={values.imgProperty}
                                            onChange={onChange}
                                            id="imgProperty" />
                                    </div>
                                    <div className={styles.statusField}>
                                        <label {...styles.label} htmlFor="status">Status </label>
                                        <input type="status"
                                            required="required"
                                            name="status"
                                            value={values.status}
                                            onChange={onChange}
                                            id="status" />
                                    </div>
                                    <div className={styles.yearBuiltField}>
                                        <label {...styles.label} htmlFor="year_built">Year Built </label>
                                        <input type="year_built"
                                            required="required"
                                            name="year_built"
                                            value={values.year_built}
                                            onChange={onChange}
                                            id="year_built" />
                                    </div>
                                    <div className={styles.descriptionField}>
                                        <label {...styles.label}>More Details</label>
                                        <textarea type="description"
                                            required="required"
                                            name="description"
                                            value={values.description}
                                            onChange={onChange}
                                            id="description" ></textarea>

                                    </div>
                                    <div className={styles.editSubmit}>
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