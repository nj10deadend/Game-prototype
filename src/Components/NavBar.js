import { NavLink } from "react-router-dom"

function NavBar () {
    return (
        <nav className="navBar">
            <NavLink exact to="/" className='navLink'> Home </NavLink>
            <NavLink to="/BBInfo" className='navLink'> Life In Bikini Bottom </NavLink>
            <NavLink to="/game" className='navLink'> Adventures with SpongeBob </NavLink>
            <NavLink to="/HWYS" className='navLink'> How was Your Stay? </NavLink>
           
            
        </nav>
    );
}

export default NavBar;