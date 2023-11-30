import * as request from "../components/lib/request";



const url = `http://localhost:3030/data/about`;



export const getAbout = async () => {
    
        const response = await request.get(url);
    
        return response;
   

}


