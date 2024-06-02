import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";



function NavBar(){
    return(
        <>
        <div style={{display:"flex", gap:"15px"}} className='navbar'>
            <AiOutlineHome size={18}/>
            <Link to='/' className='link'>Home</Link>
            <IoCallOutline size={18}/>
            <Link to='/contacto' className='link'>Contacto</Link>
        </div>
        </>


    )
}

export default NavBar;