import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as propertyService from '../../servises/propertyService';
import { propertyFormValue } from "../../utils/propertyFormValue";
import styles from "./Create.module.css"
import { toast } from "react-toastify";
import { useState } from "react";
import useForm from "../../hooks/useForm";


export default function Create() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(propertyFormValue);
    const [errors, setErrors] = useState({});
    const [hasServerError, setHasServerError] = useState(false);
    const [serverError, setServerError] = useState({});


    const resetHadler = () => {
        setFormValues(propertyFormValue);
        setErrors({});
    }

    const onCreateSubmitHadler = async (values) => {


        try {
            await propertyService.create(values);
            navigate('/properties')
        } catch (err) {
            
                toast.error(err.message);
                setHasServerError(true);
                setServerError(err.message);
            
        }
        resetHadler()

    }

    const propertyTypeValidator = () => {
        if (values.property_type.length < 5) {
            setErrors(state => ({
                ...state,
                property_type: 'The pattern must be a minimum of 5 characters',
            }));
        } else {
            if (errors.property_type) {
                setErrors(state => ({ ...state, property_type: '' }));
            }
        }
    }

    const cityValidator = () => {
        if (values.city.length < 6) {
            setErrors(state => ({
                ...state,
                city: 'The pattern must be a minimum of 6 characters',
            }));
        } else {
            if (errors.city) {
                setErrors(state => ({ ...state, city: '' }));
            }
        }
    }

    const priceValidator = () => {
        if (Number(values.price) <= 0) {
            setErrors(state => ({
                ...state,
                price: 'Price is invalid',
            }));
        } else {
            if (errors.price) {
                setErrors(state => ({ ...state, price: '' }));
            }
        }
    }

    const bedroomsValidator = () => {
        if (Number(values.bedrooms) < 1) {
            setErrors(state => ({
                ...state,
                bedrooms: 'Bedrooms is invalid',
            }));
        } else {
            if (errors.bedrooms) {
                setErrors(state => ({ ...state, bedrooms: '' }));
            }
        }
    }
    
    const bathroomsValidator = () => {
        if (Number(values.bathrooms) < 1) {
            setErrors(state => ({
                ...state,
                bathrooms: 'Bathrooms is invalid',
            }));
        } else {
            if (errors.bathrooms) {
                setErrors(state => ({ ...state, bathrooms: '' }));
            }
        }
    }
   

    const square_metersValidator = () => {
        if (Number(values.square_meters) < 50) {
            setErrors(state => ({
                ...state,
                square_meters: 'Square meters should not be less than 50!',
            }));
        } else {
            if (errors.square_meters) {
                setErrors(state => ({ ...state, square_meters: '' }));
            }
        }
    }

    function imgPropertyValid(imgProperty){
        const img = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
        return img.test(imgProperty)
    }
    
    const  imgPropertyValidator = () => {
        if ( !imgPropertyValid(values.imgProperty)) {
            setErrors(state => ({
                ...state,
                imgProperty: 'Add image!',
            }));
        } else {
            if (errors.imgProperty) {
                setErrors(state => ({ ...state, imgProperty: '' }));
            }
        }
    }
    
    const  statusValidator = () => {
        if (values.status.length < 7) {
            setErrors(state => ({
                ...state,
                status: 'Status is invalid!',
            }));
        } else {
            if (errors.status) {
                setErrors(state => ({ ...state, status: '' }));
            }
        }
    }

    const year_builtValidator = () => {
        if (Number(values.year_built) < 1900) {
            setErrors(state => ({
                ...state,
                year_built: 'Year built should not be less than 1900!',
            }));
        } else {
            if (errors.year_built) {
                setErrors(state => ({ ...state, year_built: '' }));
            }
        }
    }

    const  descriptionValidator = () => {
        if (values.description.length < 10) {
            setErrors(state => ({
                ...state,
                description: 'Description is too short!',
            }));
        } else {
            if (errors.description) {
                setErrors(state => ({ ...state, description: '' }));
            }
        }
    }
    const { values, onChange, onSubmit } = useForm(onCreateSubmitHadler, formValues);
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
                                <form className="createform" onSubmit={onSubmit}>
                                    <div className={styles.propertyTypeField}>
                                        <label  {...styles.label} htmlFor="property_type">Property Type </label>
                                        <input 
                                        type="property_type" 
                                        required="required" 
                                        name="property_type" 
                                        id="property_type"
                                        value={values.property_type} 
                                        onChange={onChange}
                                        onBlur={propertyTypeValidator}/>
                                         {errors.property_type && (
                                        <p>{errors.property_type}</p>)}
                                
                                    </div>
                                    <div className={styles.cityField}>
                                        <label {...styles.label} htmlFor="city">City</label>
                                        <input type="city" 
                                        required="required"
                                         name="city" 
                                         id="city" 
                                         value={values.city}
                                         onChange={onChange}
                                         onBlur={cityValidator}/>
                                          {errors.city && (
                                        <p>{errors.city}</p>)}
                                    </div>
                                    <div className={styles.priceField}>
                                        <label {...styles.label} htmlFor="price">Price </label>
                                        <input type="price"
                                         required="required" 
                                         name="price" 
                                         id="price"
                                         value={values.price}
                                         onChange={onChange}
                                         onBlur={priceValidator}/>
                                          {errors.price && (
                                        <p>{errors.price}</p>)}
                                    </div>
                                    <div className={styles.bedroomsField}>
                                        <label {...styles.label} htmlFor="bedrooms">Bedrooms </label>
                                        <input type="bedrooms"
                                         required="required"
                                          name="bedrooms" 
                                          id="bedrooms" 
                                          value={values.bedrooms}
                                          onChange={onChange}
                                          onBlur={bedroomsValidator}/>
                                           {errors.bedrooms && (
                                        <p>{errors.bedrooms}</p>)}
                                    </div>
                                    <div className={styles.bathroomsField}>
                                        <label {...styles.label} htmlFor="bathrooms">Bathrooms </label>
                                        <input type="bathrooms" 
                                        required="required" 
                                        name="bathrooms" 
                                        id="bathrooms" 
                                        value={values.bathrooms}
                                        onChange={onChange}
                                        onBlur={bathroomsValidator}/>
                                         {errors.bathrooms && (
                                        <p>{errors.bathrooms}</p>)}
                                    </div>
                                    <div className={styles.squareMetersField}>
                                        <label {...styles.label} htmlFor="square_meters">Square Meters </label>
                                        <input type="square_meters"
                                         required="required" 
                                         name="square_meters" 
                                         id="square_meters"
                                         value={values.square_meters}
                                         onChange={onChange}
                                         onBlur={square_metersValidator}/>
                                          {errors.square_meters && (
                                         <p>{errors.square_meters}</p>)}
                                    </div>
                                    <div className={styles.propertyImageField}>
                                        <label {...styles.label} htmlFor="imgProperty">Image </label>
                                        <input type="text" 
                                        name="imgProperty" 
                                        id="imgProperty" 
                                        value={values.imgProperty}
                                        onChange={onChange}
                                        onBlur={imgPropertyValidator}/>
                                         {errors.imgProperty && (
                                        <p>{errors.imgProperty}</p>)}
                                    </div>
                                    <div className={styles.statusField}>
                                        <label {...styles.label} htmlFor="status">Status </label>
                                        <input type="status" 
                                        required="required" 
                                        name="status" 
                                        id="status" 
                                        value={values.status}
                                        onChange={onChange}
                                        onBlur={statusValidator}/>
                                         {errors.status && (
                                        <p>{errors.status}</p>)}
                                    </div>
                                    <div className={styles.yearBuiltField}>
                                        <label {...styles.label} htmlFor="year_built">Year Built </label>
                                        <input type="year_built"
                                         required="required" 
                                         name="year_built" 
                                         id="year_built" 
                                         value={values.year_built}
                                         onChange={onChange}
                                         onBlur={year_builtValidator}/>
                                          {errors.year_built && (
                                         <p>{errors.year_built}</p>)}
                                    </div>
                                    <div className={styles.descriptionField}>
                                        <label {...styles.label}>More Details</label>
                                        <textarea type="description" 
                                        required="required" 
                                        name="description" 
                                        id="description" 
                                        value={values.description}
                                        onChange={onChange}
                                        onBlur={descriptionValidator}></textarea>
                                          {errors.description && (
                                         <p>{errors.description}</p>)}

                                    </div>
                                    <div className={styles.createSubmit}>
                                    <button className={styles.createSubmit} type="submit"
                                            disabled={(Object.values(errors).some(x => x)
                                                || (Object.values(values).some(x => x == '')))}

                                        >Edit</button>
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