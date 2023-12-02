// const baseUrl = `http://localhost:3030/jsonstore/contact`;
const aboutUrl = `http://localhost:3030/data/about`;

// export const getContact = async () => {
//     try {
//         const response = await fetch(baseUrl);
//         const result = await response.json();

//         const data = Object.values(result);

//         return data;
//     } catch (err) {
//         return err
//     }


// }

export const getAbout = async () => {
    try {
        const response = await fetch(aboutUrl);
        const result = await response.json();

        const data = Object.values(result);

        return data;
    } catch (err) {
        return err
    }


}


