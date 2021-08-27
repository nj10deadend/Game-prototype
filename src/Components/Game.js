import { useState} from "react";
import Marquee from "react-fast-marquee";

function Game ({script}) {
    const [button, setButton] = useState(false)
    const [gameState, setGameState] = useState( {
        choice: "Good Morning!", 
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
        } else return (<img className='imgG' src={gameState.img2} alt="Image" />) 
    }
    function renderButton1() {
        if (gameState.options === "") {
            return (
                null
            )
        } else return (
           
                <button onClick={act} className="button">{gameState.options[0] }</button>
            
        )
    }
    function renderButton2() {
        if (gameState.options === "") {
            return (
                null
            )
        } else return (
            <button onClick={act} className="button">{gameState.options[1] }</button> 
        )
    }

    function buttonThreeConditional() {
        if (gameState.options[2] === undefined) {
            return (
                <></>
            )
        } else return (<button onClick={act} id="two" className="button">{gameState.options[2]}</button>) 
    }

    function resetGame() {
        setGameState(
            {
                choice: "Start", 
                img: "https://c.tenor.com/y05bQXbwBIYAAAAM/sponge-bob-sleep.gif",
                prompt: "Rise and shine its your day off from the Krusty Krab. What do you wanna do first?", 
                options: 
                [
                "Go To Patrick's house(...or rock I guess)",
                "Go to Squidward's house",
                ]
                
            }
        )
    }

    return (
    <>
         <h1 className='h1'>
         <img className='SB' src='https://y.yarn.co/050564e9-27d7-4d9c-8b1b-08ed2d94b4b4_screenshot.jpg' alt='SpongeBoi'/>   
             *~Adventures with Spongebob~*
         <img className='PP' src='https://talkiesnetwork.files.wordpress.com/2020/05/08dd7-paintythepirate-2_1024x1024.jpg?w=930&h=450&crop=1' alt='Painty the Pirate'/>
         
         </h1>
        <Marquee className='h2'>Are yah ready kids?!!</Marquee>
        <br></br>
        <div>
        <img className='imgG' src={gameState.img} alt="Image"/>
        <br></br>
        <h3 className="homeText">{gameState.choice}</h3>
        <br></br>
        <h4 className="homeText">{gameState.prompt}</h4>
        <br></br>
            {renderImg2()}
            <br></br>
                {renderButton1()} {renderButton2()} {buttonThreeConditional()}
                <br></br>
                <button className='button' onClick={resetGame}>Reset</button>
        </div>
    </>       
    )
}

export default Game;