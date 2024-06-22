import React , {useState} from "react";
import {Drawer} from '@mui/material';
import './SideBar.css';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import ComposeMail from "../composeMail/ComposeMail";
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import SideBarBtn from "../sideBarBtn/SideBarBtn";

export default function SideBar({openDrawer}){
    const [openDialog,setOpenDialog] = useState(false);
    
    const handleDialogState = ()=>{
        setOpenDialog(true);
    };
    return(
        <>
        <Drawer
        anchor="left"
        open={openDrawer}
        hideBackdrop={true}
        ModalProps={{
            keepMounted:true
        }}
        variant="persistent"
        sx={{
            '& .MuiDrawer-paper' : {
                marginTop : '64px',
                width:"200px",
                background:"#161313b7",
            }
        }}
        >
            <div>
                <button className="composeBtn" onClick={()=>handleDialogState()}>
                    <div className="text">Compose</div>
                    <EditIcon className="icon"></EditIcon>           
                </button>
                <div className="links">
                    <Link to="/inbox">
                        <SideBarBtn title="Inbox">
                            <InboxIcon style={{fontSize:"medium"}}></InboxIcon>
                        </SideBarBtn>
                    </Link> 
                    <Link to="/sent">
                        <SideBarBtn title="Sent">
                            <SendIcon style={{fontSize:"medium"}}></SendIcon>
                        </SideBarBtn>                
                    </Link>
                    <Link to="/drafts" >
                        <SideBarBtn title="Drafts">
                            <DraftsIcon style={{fontSize:"medium"}}></DraftsIcon>
                        </SideBarBtn>
                    </Link>                  
                    <Link to="/trash">
                        <SideBarBtn title="Trash">
                            <DeleteSharpIcon style={{fontSize:"medium"}}></DeleteSharpIcon>
                        </SideBarBtn> 
                    </Link>                             
                </div>
                <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog}/>       
            </div>            
        </Drawer>
        </>
    );
}