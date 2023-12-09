import * as request from "../lib/request"
import { toast } from 'react-toastify';

const baseUrl = 'http://localhost:3030/users'

export const login = async (userData) => {
  const result = await request.post(`${baseUrl}/login`, userData);

   return result;
}

export const register = async (userData) => {

    const result = await request.post(`${baseUrl}/register`, userData);
    toast.success('Register Successful');
    return result;
 
 
}

export const logout = () => request.get(`${baseUrl}/logout`);
 
 
