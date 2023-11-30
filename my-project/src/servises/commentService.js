import * as request from '../components/lib/request'

const url = `http://localhost:3030/data/comments`


export const getAll = async (propertyId) => {
     const query = new URLSearchParams({
        where: `propertyId="${propertyId}"`,
        load: `owner=_ownerId:users`,
    })
 const result = await request.get(`${url}?${query}`)

 return result
}


export const create = async (propertyId, text) => {
    const newComment = await request.post(url, {
        propertyId,
        text,
    });

    return newComment;
}
