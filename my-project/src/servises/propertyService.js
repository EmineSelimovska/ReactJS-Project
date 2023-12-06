import { toast } from "react-toastify";
import * as request from "../lib/request";


const url = `http://localhost:3030/data/property`



export const getAll = async () => {

    const result = await request.get(url);
    return result
  
}

export const search = async (searchItem) => {

     const propertyDate  = await request.get(`${url}/search/${searchItem}`)
     return propertyDate
}

export const getOne = async (propertyId) => {
    const result = await request.get(`${url}/${propertyId}`);
    return result;
}

export const create = async (propertyDate) => {
    const result = await request.post(url, propertyDate);
    return result;
}

export const edit = async (propertyId, propertyDate) => {
    const result = await request.put(`${url}/${propertyId}`, propertyDate);
    return result;
}