import * as request from '../components/lib/request'

const url = `http://localhost:3030/jsonstore/comments`

export const create = async (propertyId, text) => {
    const newComment = await request.post(url, {
        propertyId,
        text,
    });

    return newComment;
}
