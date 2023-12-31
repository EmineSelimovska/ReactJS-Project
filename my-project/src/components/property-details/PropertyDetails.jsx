import Header from "../header/Header";

import { Link, useNavigate, } from "react-router-dom";

import { useParams } from "react-router-dom";
import * as propertyService from "../../servises/propertyService"
import * as commentService from "../../servises/commentService"
import Footer from "../footer/Footer";
import { useContext, useEffect, useReducer, useState } from "react";
import Menu from "../menu-area/Menu-area";
import { toast } from "react-toastify";
import LatestProperty from "../properties/latest-property/LatestProperty";
import AuthContext from "../../contexts/authContext";
import { pathToUrl } from "../../utils/pathUtils";


const reducer = (state, action) => {
    switch (action?.type) {
        case 'GET_ALL_PROPERTY':
            return [...action.payload];
        case 'ADD_COMMENT':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default function PropertyDetails() {
    const {
        isAuthenticated,
        userId,
        username,
        email
    } = useContext(AuthContext)

    const { propertyId } = useParams();
    const [property, setProperty] = useState({})
    // const [comments, setComments] = useState([])
    const [comments, dispatch] = useReducer(reducer, [])
    const owner = property._ownerId === userId;
   const navigate = useNavigate();

    useEffect(() => {

        propertyService.getOne(propertyId)
            .then(result => setProperty(result))
            .catch((err) => {
                if (err) {
                    toast.error(err.message)
                }
            })

        commentService.getAll(propertyId)
            .then(result => {
                dispatch({
                    type: 'GET_ALL_PROPERTY',
                    payload: result,
                })
            })
            .catch((err) => {
                if (err) {
                    toast.error(err.message)
                }
            })

    }, [propertyId])


    const addCommentHandler = async (e) => {
        e.preventDefault();
     
         
       
        const formData = new FormData(e.currentTarget);
        try {
            const newComment = await commentService.create(
                propertyId,
                formData.get('comment')
            )
            newComment.owner = { username };
            // setComments(state => [...state,{...newComment, owner: { username }} ]);
            dispatch({
                type: 'ADD_COMMENT',
                payload: newComment
            })
        } catch (err) {
            if (err) {
                toast.error(err.message)
            }

        }
        e.target.reset();

      
       
    }
    

    const deleteButtonHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${property.property_type}`);

        if (hasConfirmed) {

            await propertyService.remove(propertyId);
         
            navigate('/properties')
           
        }
    }

    return (
        <>
            <Header />

            <Menu />
            <section id="aa-property-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aa-property-header-inner">
                                <h2>Properties Details</h2>
                                <ol className="breadcrumb">
                                    <li><Link to="/properties">Properties</Link></li>
                                    <li className="active">{property.property_type}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Proerty header  */}
            {/* Start Properties  */}
            <section id="aa-properties">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="aa-properties-content">
                                {/* Start properties content body */}
                                <div className="aa-properties-details">
                                    <div className="aa-properties-details-img">
                                        <img src={property.imgProperty} />
                                    </div>
                                    <div className="aa-properties-info">
                                        <h2>{property.property_type}</h2>
                                        <span className="aa-price">${property.price}</span>
                                        <p>City: {property.city}</p>
                                        <p>Bedrooms: {property.bedrooms}</p>
                                        <p>Bathrooms:{property.bathrooms}</p>
                                        <p>Square Meters: {property.square_meters}</p>
                                        <p>Year Built: {property.year_built}</p>
                                        <p>Description: {property.description} </p>
                                    </div>
                                    {/* Properties social share */}
                                    <div className="aa-properties-social">
                                        <ul>
                                            <li>Share</li>
                                            <li><Link to="https://www.facebook.com"><i className="fa fa-facebook" /></Link></li>
                                            <li><Link to="https://twitter.com"><i className="fa fa-twitter" /></Link></li>
                                            <li><Link to="https://www.google.com/account/about/?hl=bg"><i className="fa fa-google-plus" /></Link></li>
                                            <li><Link to="https://www.youtube.com"><i className="fa fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Start properties sidebar */}
                        <div className="col-md-4">
                            <aside className="aa-properties-sidebar">
                                <LatestProperty />
                            </aside>
                        </div>
                    </div>
                </div>
                <div>
                    {owner && (
                        <div className="buttons" style={{ display: 'flex', justifyContent: "center", alignItems: "center", gap: "2em", paddingTop: "1em" }}>
                            <Link to={pathToUrl("/properties/:propertyId/edit", { propertyId })} className="button">Edit</Link>
                            <button style={{ border: "#59abe3" }} className="button" onClick={deleteButtonHandler} >Delete</button>
                        </div>
                    )}


                    <div className="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            {comments.map(({ _id, text, owner: { username } }) => (
                                text && (
                                    <li key={_id} className="comment">
                                    <p>{username}: {text}</p>
                                </li>
                                ) 
                            ))}
                        </ul>

                        {comments.length === 0 && (
                            <p className="no-comment" style={{ marginLeft: '150px' }}>No comments.</p>
                        )}
                    </div>
                    {isAuthenticated && (
                        <div className="create-comment" >
                            <label>Add new comment:</label>
                            <form className="form" onSubmit={addCommentHandler}>
                                <textarea name="comment" placeholder="Comment......"></textarea>
                                <input className="btn submit" type="submit" value="Add Comment" />
                            </form>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
}