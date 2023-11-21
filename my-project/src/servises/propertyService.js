import { request } from "../components/lib/request";


const url = `http://localhost:3030/jsonstore/property`

export const getAll = async () => {
    const result = await request('GET', url);
     return Object.values(result)
}
export const create = async (propertyDate) => {
   const response = await fetch(`${url}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(propertyDate)
    })

    const result = await response.json();


    return result;
}