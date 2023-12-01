import * as request from "../lib/request"
import { toast } from 'react-toastify';

const baseUrl = 'http://localhost:3030/users'

export const login = async (email, password) => {
  const result = await request.post(`${baseUrl}/login`, {
    email,
    password
   });

   return result;
}

export const register = async (username,email, password) => {

  try{
    const result = await request.post(`${baseUrl}/register`, {
     username,
     email,
     password
    });
    toast.success('Register Successful');
    return result;
  }catch(err){

   toast.error(err.message)
  }
 
}

export const logout = () => request.get(`${baseUrl}/logout`);
 
 