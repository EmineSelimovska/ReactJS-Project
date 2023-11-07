const baseUrl = `http://localhost:3030/jsonstore/contact`;
const propUrl = `http://localhost:3030/jsonstore/property`;
const aboutUrl = `http://localhost:3030/jsonstore/about`;

export const getContact = async () => {
    try {
        const response = await fetch(baseUrl);
        const result = await response.json();

        const data = Object.values(result);

        return data;
    } catch (err) {
        return err
    }


}

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

export const getProperty = async () => {
    try {
        const response = await fetch(propUrl);
        const result = await response.json();

        const date = Object.values(result);

        return date;
    } catch (err) {
        return err;
    }
}

