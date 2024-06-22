import React from "react";
import './SideBarBtn.css'
import { useParams } from "react-router-dom";
export default function SideBarBtn({children, title , number}){
    const {type} = useParams();
    return(
       <div className="menu" style={type === title.toLowerCase() ? {backgroundColor: "gray"} : {} }>
            <div className="label">
                <div className="icon">
                    {children}  
                </div>
                <div>
                    {title}  
                </div>
            </div>        
            <div>
                {number}  
            </div>
       </div>
    );
}