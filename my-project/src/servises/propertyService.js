const url = `http://localhost:3030/jsonstore`


export const create = async (propertyDate) => {
   const response = await fetch(`${url}/property`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(propertyDate)
    })

    const result = await response.json();


    return result;
}