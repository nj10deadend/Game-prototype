import { NavLink } from "react-router-dom"

// script state
// current script
// useState holds one object that'll be put into card
// const [script, setScript] = 

function NavBar () {
    return (
        <nav className="navBar">
            <NavLink exact to="/"> Home </NavLink>
            <NavLink to="/game"> [Insert Game Title] </NavLink>
            <NavLink to="/feedback"> Feedback </NavLink>
            <NavLink to="/filler"> Filler </NavLink>
            
        </nav>
    );
}

export default NavBar;