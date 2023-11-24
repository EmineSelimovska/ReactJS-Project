import * as request from '../components/lib/request'

const url = `http://localhost:3030/jsonstore/comments`


export const getAll = async (propertyId) => {
    // const query = new URLSearchParams({
    //     where: `propertyId="${propertyId}"`
    // })
 const result = await request.get(url)

 return Object.values(result).filter(comment => comment.propertyId === propertyId);
}


export const create = async (propertyId, text) => {
    const newComment = await request.post(url, {
        propertyId,
        text,
    });

    return newComment;
}
