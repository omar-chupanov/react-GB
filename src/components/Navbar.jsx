import { List, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div  className="navbar" >
            <List  component="nav" sx={{  fontWeight: '600', }}> 
                <Link to ='/'  style={{ textDecoration: 'none' }}><li>Home</li></Link>
                
                <Link to = '/about'  style={{ textDecoration: 'none' }}><li>About</li></Link>
            </List>

        </div>
    )
    
}