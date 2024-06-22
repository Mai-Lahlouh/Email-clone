import React,{useState} from "react";
import useApi from "../../hooks/useApi";
import {Dialog, InputBase} from "@mui/material";
import './ComposeMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { API_URLS } from "../../services/api.urls";
import { v4 as uuid } from "uuid";

export default function ComposeMail({openDialog , setOpenDialog}){
    const [data,setData] = useState([]);
    const saveDraftsServices = useApi(API_URLS.saveDraftsEmails);
    const sentEmailServices = useApi(API_URLS.saveSentEmail);
    const closeIcon = <CloseIcon className="icons" />;
    const dialogStyle ={
        height : '400px',
        width: '600px',
        borderRadius : '7px 7px 0 0',
    };
    const handleEmailData = (e)=>{
        setData({...data,[e.target.name]: e.target.value});
    }; 
    const handleDialogState = ()=>{
        setOpenDialog(false);
    };
    const handleSaveData = ()=>{
        if(!data.subject && !data.to){
            handleDialogState();
            return;
        };
        const emails = {
            id : uuid(),
            date : Date(),
            to: data.to,
            subject : data.subject,
            body : data.body,
            from :"maylahlooh75@gmail.com",
            type: 'sent',
            trash: false
        };
        sentEmailServices.call(emails);
        if(!sentEmailServices.error){
            handleDialogState();
            setData({});
        }else{
            handleDialogState();
        }
        console.log(data);
    };   
    const handleCloseForm =()=>{
        if(!data.subject && !data.to){
            handleDialogState();
            return;
        };
        const emails = {
            id : uuid(),
            date : Date(),
            to: data.to,
            subject : data.subject,
            body : data.body,
            from :"maylahlooh75@gmail.com",
            type: 'drafts',
            trash : false
        };
        saveDraftsServices.call(emails);
        if(!saveDraftsServices.error){
            setOpenDialog(false);
            setData({});
        }else{
            setOpenDialog(false);
        }
    };
    return(      
        <Dialog open={openDialog} PaperProps={{sx:dialogStyle}}>
            <div className="header">
                <p>New Message</p>
                <button onClick={()=>{handleCloseForm()}} className="deleteIcon">
                    <button className="icon">
                        {closeIcon}
                    </button>
                </button>                                               
            </div>
            <div className="emailForm">
                <InputBase type="email"
                placeholder="Recipients" 
                className="input"
                name="to" 
                value={data.id}
                onChange={(e)=>{handleEmailData(e)}} 
                /> 
                <InputBase 
                type="text" 
                placeholder="Subject" 
                className="input"
                name="subject"
                value={data.subject}
                onChange={(e)=>handleEmailData(e)}
                />
                <textarea 
                className="textArea"
                name="body"
                value={data.body}
                onChange={(e)=>handleEmailData(e)}
                /> 
                <div className="row">
                    <button 
                    className="sendBtn"
                    onClick={()=>{handleSaveData()}}
                    >Send
                    </button>                      
                </div>              
            </div>
        </Dialog>               
    );
}