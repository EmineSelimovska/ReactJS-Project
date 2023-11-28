import { useContext, useEffect } from "react";
import * as authService from '../servises/authService';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../contexts/authContext";



export default function Logout(){
    const navigate = useNavigate();
    const {logoutHandler} = useContext(AuthContext);
   useEffect(() => {
     authService.logout()
     .then(() => {
        logoutHandler(),
        navigate('/'),
       toast.success('Logout Successful')
   })
     .catch(() => {
     navigate('/')
     })
   }, []);
   
   
    return null;
}