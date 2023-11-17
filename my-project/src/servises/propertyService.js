const url = `http://localhost:3030/jsonstore`


export const create = async (propertyDate) => {
   const response = await fetch(`${url}/createProperty`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify
    })

    const result = await response.json();


    return result;
}