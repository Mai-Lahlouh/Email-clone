import React, { useEffect, useState } from "react";
import './Emails.css'
import {Outlet, useOutletContext } from "react-router-dom";
import EmailView from "../emailView/EmailView";
import { useParams } from "react-router-dom";
import { API_URLS } from "../../services/api.urls";
import useApi from "../../hooks/useApi";
import { Refresh } from "../../contexts/refresh";

export default function Emails(){
    const openDrawer = useOutletContext();
    const {type} = useParams();
    const getEmails = useApi(API_URLS.getEmailFromType);
    const [refreshScreen , setRefreshScreen] = useState(false);

    useEffect(()=>{
        getEmails.call({},type);
    },[type,refreshScreen]); 

    const emailData = getEmails?.response?.map((email)=>{
        return <EmailView key={email.id} email={email} type={type}/>
    });
      
    return(
        <Refresh.Provider value={{setRefreshScreen}}>
            <div style={openDrawer ? {marginLeft: 200, width: "100%", top:"64px"} : {width:"100%"}}>
                <div className="div">
                    {getEmails.response && getEmails.response.length > 0 && (
                        <div className="emails">
                            {emailData}
                        </div>
                    )}       
                    <Outlet />
                </div>             
            </div>
        </Refresh.Provider>      
    );
}