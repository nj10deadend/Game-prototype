import {comment, name} from "./Feedback"

function Comment({comment, name}){
    return (
        
        <div className='comment'>
            <h3>{comment}</h3>
            <em>{name}</em>
        </div>
    )
}

export default Comment