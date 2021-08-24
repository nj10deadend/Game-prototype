
import { NavLink } from "react-router-dom"

function Home () {
    const clickHandler = () => {
        return (
            <NavLink to="/game"> [Insert Game Title] </NavLink>
        )
    }


    return (


    
        <div className="home">
            
            <h1>Welcome To Our Game</h1>
            <h3>Rules</h3>
                <p>1. </p>
                <p>2. </p>
                <p>3. </p>
            <button onClick={clickHandler}>Start!!</button>

        </div>
   
    )
}

export default Home;