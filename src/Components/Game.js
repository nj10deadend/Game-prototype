function Game ({script}) {

    const baseStart =   {
        "start": {
            "question": "Rise and shine its your day off from the Krusty Krab. What do you wanna do first?!",
            "img": "https://i.pinimg.com/474x/1a/23/2a/1a232aba094696c5a146aced5ede8e77--spongebob-brody.jpg",
            "answers": {
                "a": "Go To Patrick's house(...or rock I guess)",
                "b": "Go to Squidward's house",
                "c": "Feed Gary"
            }
        }
    }

    // const [gameScenario, setGameScenario] = useState(baseStart)

    // function scenarioSelector (gameScenario) {

    //     return (
            
    //     )
 
    // }


    return (
    <>
        <h1>This is the Game</h1>

        <div className="gameCards">
            <h3>Question goes here</h3>
            <img />
            

            <button id="one" className="optionsButtons">Option 1</button>
            <button id="two" className="optionsButtons">Option 2</button>
            <button id="three" className="optionsButtons">Option 3</button>

        </div>

    </>       
    )
}

export default Game;