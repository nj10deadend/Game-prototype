import { useState} from "react";
function Game ({script}) {


    const [button, setButton] = useState(false)


    

    const [gameState, setGameState] = useState( {
        choice: "Start", 
        img: "https://i.pinimg.com/474x/1a/23/2a/1a232aba094696c5a146aced5ede8e77--spongebob-brody.jpg",
        prompt: "Rise and shine its your day off from the Krusty Krab. What do you wanna do first?", 
        options: 
        [
        "Go To Patrick's house(...or rock I guess)",
        "Go to Squidward's house",
        ]
        
    } )

    function finder(act, script) {
        console.log(act)
        console.log(script)
        
        let nextAct = script.find(eachScene => eachScene.choice === act)
        console.log(nextAct)
        setGameState(nextAct)
    
    } 
    

    function act(event) {

        if (!button) {
            console.log(event.target.textContent)
            finder(event.target.textContent, script)
        }

    }

    function renderImg2() {
        if (gameState.img2 === undefined) {
            return (
                <></>
            )
        } else return (<img src={gameState.img2} alt="Image" />) 
    }

    function renderButton1() {
        if (gameState.options === "") {
            return (
                null
            )
        } else return (
            <button onClick={act} id="one" className="act-btn">{gameState.options[0] }</button> 
        )
    }
    function renderButton2() {
        if (gameState.options === "") {
            return (
                null
            )
        } else return (
            <button onClick={act} id="one" className="act-btn">{gameState.options[1] }</button> 
        )
    }




    return (
    <>
        <h2 >This is the Game</h2>

        <div className="gameCards">
            <h3 className="prompt">{gameState.choice}</h3>
            <h4>{gameState.prompt}</h4>

            <img className="images" src={gameState.img} alt="Image"/>
           
            {renderImg2()}
            

                {/* <button onClick={act} id="one" className="act-btn">{gameState.options[0]}</button>
    
                <button onClick={act} id="two" className="act-btn">{gameState.options[1]}</button> */}
                {renderButton1()}
                {renderButton2()}
                
        </div>

        

    </>       
    )
}

export default Game;