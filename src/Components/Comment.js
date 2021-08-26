import {comment, name} from "./Feedback"

function Comment({comment, name}){
    // console.log({comment, name})
    return (
        
        <div>
            <h3>{comment}</h3>
            <em>{name}</em>
        </div>
    )
}

export default Comment