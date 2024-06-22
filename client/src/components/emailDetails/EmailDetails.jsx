import './EmailDetails.css'
import { useOutletContext } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import useApi from '../../hooks/useApi';
import { API_URLS } from '../../services/api.urls';
import { useContext } from 'react';
import { Refresh } from '../../contexts/refresh';

export default function EmailDetails(){
    const location = useLocation();
    const {email, type} = location.state;
    const openDrawer = useOutletContext();
    const navigate = useNavigate();
    const moveEmailToTrash = useApi(API_URLS.moveEmailToTrash);
    const {setRefreshScreen}= useContext(Refresh);

    const handleDeleteEmail =async ()=>{
        if(type === 'trash'){

        }else{         
            moveEmailToTrash.call({ _id : email._id});
            console.log("Email moved to trash successfully!");
            navigate(`/${type}`); 
            setRefreshScreen(prev => !prev);
        }
    };
    return(
        <div className="emailDet" style={openDrawer ? {marginLeft: 200,width:"100%"} : {width:"100%"}}>
            <div className="head">
                <div className="title">
                    <p>{email.subject}</p>
                    <button onClick={()=>{handleDeleteEmail()}} style={{border:'none',background:'inherit'}}>
                        <DeleteIcon fontSize="x-small" style={{paddingTop:'20px',marginRight:'10px'}}></DeleteIcon>
                    </button>                    
                </div>
                <div className="subTitle">
                    <div className='name'>{email.to}</div>
                    <div className='date'>
                        {(new window.Date(email.date)).toLocaleString('default',{month:'long'})}
                        {" "}
                        {(new window.Date(email.date)).getDate()}
                        {", "}
                        {(new window.Date(email.date)).toLocaleString('default',{hour:'2-digit',minute:'2-digit',hour12: true})}                       
                    </div>
                </div> 
            </div>            
            <div style={{padding:"10px"}}>
                {email.body}
            </div>
        </div>
    );
}