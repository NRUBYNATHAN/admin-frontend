import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import "./Blog.css"
function Header() {
    const navigate = useNavigate();
   
  return (
    
      <div className='navbar'>
       <AppBar position="static">
        <Toolbar>
        <Button  onClick={()=>navigate("/")} color="inherit"><Logo/></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header