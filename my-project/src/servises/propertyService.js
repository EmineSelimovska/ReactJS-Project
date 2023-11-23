import * as request from "../components/lib/request";


const url = `http://localhost:3030/jsonstore/property`

export const getAll = async () => {
    const result = await request.get(url);
     return Object.values(result)
}

export const getOne = async (propertyId) => {
    const result = await request.get(`${url}/${propertyId}`);
    return result;
}

export const create = async (propertyDate) => {
    const result = await request.post(url, propertyDate);
    return result;
}