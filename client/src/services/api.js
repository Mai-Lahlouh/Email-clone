import axios from 'axios';
const API_URL = 'http://localhost:3000';

const API_MAIL = async (urlObject,emails,type)=>{
    return await axios({
        method : urlObject.method,
        url : `${API_URL}/${urlObject.endpoint}/${type}`,
        data : emails
    });
}
export default API_MAIL;