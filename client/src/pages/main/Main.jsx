import React, { useState } from "react";
import SideBar from "../../components/sideBar/SideBar";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import { EmailData } from "../../contexts/email";
import emails from "../../emails";
export default function Main(){
   
    const [openDrawer , setOpenDrawer] = useState(true);
    const toggleDrawer = ()=>{
        setOpenDrawer(prevState => !prevState);
    };
    return(
        <>
        <EmailData.Provider value={emails}>
            <div style={{display:"flex"}}>
                <Header toggleDrawer={toggleDrawer}/> 
                <SideBar openDrawer={openDrawer}/> 
                <Outlet context={openDrawer}/>              
            </div>              
        </EmailData.Provider>            
        </>
    );
}