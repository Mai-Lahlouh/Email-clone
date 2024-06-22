import React from "react";
import './EmailView.css';
import { Link } from "react-router-dom";

export default function EmailView({email,type}){
    return(
        <div className="emailDe">
            <Link to={`emailDetails/${email.id}`} state={{email,type}}>
                <div className="emailStyle">
                    <div className="emailHead">
                        <p>{email.subject}</p>
                    </div>
                    <div className="emailBody">
                        <p>{email.to}</p>
                        <div className="date">
                            {(new window.Date(email.date)).toLocaleString('default',{month:'long'})}
                            {" "}
                            {(new window.Date(email.date)).getDate()}
                            {", "}
                            {(new window.Date(email.date)).toLocaleString('default',{year: 'numeric'})}
                        </div>
                    </div> 
                </div>        
            </Link>             
        </div>
    );
}