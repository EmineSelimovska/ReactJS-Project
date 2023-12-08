import { toast } from "react-toastify";
import * as request from "../lib/request";


const url = `http://localhost:3030/data/property`



export const getAll = async () => {

    const result = await request.get(url);
    return result
  
}

export const getOne = async (propertyId) => {
    const result = await request.get(`${url}/${propertyId}`);
    return result;
}

export const getLatest = async () => {
   // const query = new URLSearchParams({
         //  sortBy: `sortBy=_createdOn%20desc`,
          //   offset: 0,
          //  pageSize: 3,
//});
  const query = encodeURI(`offset=0&pageSize=3`);
    const result = await request.get(`${url}?sortBy=_createdOn%20desc&${query}`);

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

export const remove = async(propertyId) => {
    const result = await request.remove(`${url}/${propertyId}`);
    return result;
}