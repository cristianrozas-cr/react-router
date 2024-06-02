import { Link } from 'react-router-dom'

function Nav(){
    return(
        <div style={{display:"flex", gap:"15px"}}>
            <Link to='/'>Home</Link>
            <Link to='/contacto'>Productos</Link>
        </div>
    )
}

export default Nav