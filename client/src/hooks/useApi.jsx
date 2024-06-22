import { useState } from "react";
import Api from '../services/api';

const useApi =(urlObject)=>{
    const [response , setResponse] = useState(null);
    const [error, setError] = useState("");
    const call = async (emails,type = '')=>{
        setResponse(null);
        setError("");
        try{
            const res = await Api(urlObject,emails,type);
            setResponse(res.data);
        }catch(error){
            setError(error.message);
        }
    };
    return {call, response, error};
}
export default useApi;