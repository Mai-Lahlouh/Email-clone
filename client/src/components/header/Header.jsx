import React from "react";
import { AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'

export default function Header({toggleDrawer}){
    return(
        <>
        <AppBar position="fixed" style={{ boxShadow:"none", background:"#F5F5F5"}}>
            <Toolbar>
                <MenuIcon color="action" onClick={toggleDrawer}/>
                <span className="textStyle">
                    Gmail 
                </span>            
            </Toolbar>
        </AppBar>
        </>
    );
}