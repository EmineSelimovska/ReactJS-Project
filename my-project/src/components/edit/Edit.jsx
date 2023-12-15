import { Link, useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import * as propertyService from '../../servises/propertyService';
import styles from './Edit.module.css'
import { toast } from 'react-toastify';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/authContext';
import NotFound from '../not-found/NotFound';
import Create from '../create/Create';

export default function Edit() {
    const navigate = useNavigate();
    const {
        isAuthenticated,
        userId,
        username,
        email
    } = useContext(AuthContext);
    const { propertyId } = useParams();
    const [property, setProperty] = useState({
        property_type: '',
        city: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        square_meters: '',
        imgProperty: '',
        status: '',
        year_built: '',
        description: ''
    });
    const [errors, setErrors] = useState({});

    const isOwnerGuard = property._ownerId === userId;



    useEffect(() => {
        propertyService.getOne(propertyId)
            .then(result => {
                setProperty(result)
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }, [propertyId])

    const onEditSubmitHadler = async (e) => {

        e.preventDefault()
        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await propertyService.edit(propertyId, values);
            navigate('/properties')
        } catch (err) {

            setHasServerError(true);
            setServerError(err.message);
            toast.error(err.message);

        }
    }

    const onChange = (e) => {
        setProperty(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const propertyTypeValidator = () => {
        if (property.property_type.length < 5) {
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
        if (property.city.length < 6) {
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
        if (Number(property.price) <= 0) {
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
        if (Number(property.bedrooms) < 1) {
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
        if (Number(property.bathrooms) < 1) {
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
        if (Number(property.square_meters) < 50) {
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

    function imgPropertyValid(imgProperty) {
        const img = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
        return img.test(imgProperty)
    }

    const imgPropertyValidator = () => {
        if (!imgPropertyValid(property.imgProperty)) {
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

    const statusValidator = () => {
        if (property.status.length < 7) {
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
        if (Number(property.year_built) < 1900) {
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

    const descriptionValidator = () => {
        if (property.description.length < 10) {
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

    return (
        <>
        {isOwnerGuard && (
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
                                <form className="createform" onSubmit={onEditSubmitHadler}>
                                    <div className={styles.propertyTypeField}>
                                        <label  {...styles.label} htmlFor="property_type">Property Type </label>
                                        <input
                                            type="property_type"
                                            required="required"
                                            name="property_type"
                                            value={property.property_type}
                                            onChange={onChange}
                                            id="property_type"
                                            onBlur={propertyTypeValidator} />
                                        {errors.property_type && (
                                            <p>{errors.property_type}</p>)}
                                    </div>
                                    <div className={styles.cityField}>
                                        <label {...styles.label} htmlFor="city">City</label>
                                        <input type="city"
                                            required="required"
                                            name="city"
                                            value={property.city}
                                            onChange={onChange}
                                            id="city"
                                            onBlur={cityValidator} />
                                        {errors.city && (
                                            <p>{errors.city}</p>)}
                                    </div>
                                    <div className={styles.priceField}>
                                        <label {...styles.label} htmlFor="price">Price </label>
                                        <input type="price"
                                            required="required"
                                            name="price"
                                            value={property.price}
                                            onChange={onChange}
                                            id="price"
                                            onBlur={priceValidator} />
                                        {errors.price && (
                                            <p>{errors.price}</p>)}
                                    </div>
                                    <div className={styles.bedroomsField}>
                                        <label {...styles.label} htmlFor="bedrooms">Bedrooms </label>
                                        <input type="bedrooms"
                                            required="required"
                                            name="bedrooms"
                                            value={property.bedrooms}
                                            onChange={onChange}
                                            id="bedrooms"
                                            onBlur={bedroomsValidator} />
                                        {errors.bedrooms && (
                                            <p>{errors.bedrooms}</p>)}
                                    </div>
                                    <div className={styles.bathroomsField}>
                                        <label {...styles.label} htmlFor="bathrooms">Bathrooms </label>
                                        <input type="bathrooms"
                                            required="required"
                                            name="bathrooms"
                                            value={property.bathrooms}
                                            onChange={onChange}
                                            id="bathrooms"
                                            onBlur={bathroomsValidator} />
                                        {errors.bathrooms && (
                                            <p>{errors.bathrooms}</p>)}
                                    </div>
                                    <div className={styles.squareMetersField}>
                                        <label {...styles.label} htmlFor="square_meters">Square Meters </label>
                                        <input type="square_meters"
                                            required="required"
                                            name="square_meters"
                                            value={property.square_meters}
                                            onChange={onChange}
                                            id="square_meters"
                                            onBlur={square_metersValidator} />
                                        {errors.square_meters && (
                                            <p>{errors.square_meters}</p>)}
                                    </div>
                                    <div className={styles.propertyImageField}>
                                        <label {...styles.label} htmlFor="imgProperty">Image </label>
                                        <input type="text"
                                            name="imgProperty"
                                            value={property.imgProperty}
                                            onChange={onChange}
                                            id="imgProperty"
                                            onBlur={imgPropertyValidator} />
                                        {errors.imgProperty && (
                                            <p>{errors.imgProperty}</p>)}
                                    </div>
                                    <div className={styles.statusField}>
                                        <label {...styles.label} htmlFor="status">Status </label>
                                        <input type="status"
                                            required="required"
                                            name="status"
                                            value={property.status}
                                            onChange={onChange}
                                            id="status"
                                            onBlur={statusValidator} />
                                        {errors.status && (
                                            <p>{errors.status}</p>)}
                                    </div>
                                    <div className={styles.yearBuiltField}>
                                        <label {...styles.label} htmlFor="year_built">Year Built </label>
                                        <input type="year_built"
                                            required="required"
                                            name="year_built"
                                            value={property.year_built}
                                            onChange={onChange}
                                            id="year_built"
                                            onBlur={year_builtValidator} />
                                        {errors.year_built && (
                                            <p>{errors.year_built}</p>)}
                                    </div>
                                    <div className={styles.descriptionField}>
                                        <label {...styles.label}>More Details</label>
                                        <textarea type="description"
                                            required="required"
                                            name="description"
                                            value={property.description}
                                            onChange={onChange}
                                            id="description"
                                            onBlur={descriptionValidator}></textarea>
                                        {errors.description && (
                                            <p>{errors.description}</p>)}

                                    </div>
                                    <div className={styles.editSubmit}>
                                        <button className={styles.editSubmit} type="submit"
                                            disabled={(Object.values(errors).some(x => x)
                                                || (Object.values(property).some(x => x == '')))}

                                        >Edit</button>
                                        {/* <input type="submit" value="Edit" className="aa-browse-btn" name="submit" id="submit" /> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )}
        {!isOwnerGuard && (
            <><p style={{ fontSize: '25px', color: 'rgb(95, 156, 235)', marginLeft: '150px', padding: '250px' }}>Not found this page!</p>
            <Link style={{margin: '500px', paddingTop: '100px', color: 'rgb(95, 156, 235)'}} to='/properties'> Back to Property</Link></>
        )
        }
        </>
    )
}