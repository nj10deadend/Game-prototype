import React,{useEffect, useState} from 'react'
import { findRenderedDOMComponentWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min'
import Comment from './Comment'

function Feedback () {
const [form,setForm] = useState ({
    comment: "", 
    name: ""})
const [comm, setComm] = useState ([])
// useEffect (fetch('http://localhost:3000/comments')
// .then (x=>x.json()).then
useEffect(()=>{
    fetch('http://localhost:3000/comments')
    .then (x=>x.json()).then(setComm)
}, [])
function displayComments () {
    return comm.map((z)=> <Comment name={z.name} comment={z.comment} key={z.id}/>
        
    )
}

function changeForm (z) {
    let y = z.target.name
    let w = z.target.value
    setForm({...form, [y]:w})
}

function addComm (a) {
    const newCA=[...comm, a]
    setComm (newCA)
}

function handleSubmit (b){
    b.preventDefault()
    fetch('http://localhost:3000/comments', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
            "Accepts": 'application/json',
            'Content-Type': 'application/json',
        }
    }).then (x=>x.json()).then(y=> {
        addComm(y)
        setForm ({comment: "", 
        name: ""})
    })
    
    // add new comment
    // addComm(newC)

    // clear input field 
   
}


    return(
        <div>
            <h1>Thoughts? Let us know below!</h1>
            <form onClick={handleSubmit}>
                <input
                type="text"
                name="comment"
                className="input"
                value={form.comment}
                onChange= {changeForm}
                placeholder='Insert Comment'
                />


                <input
                type="text"
                name="name"
                className="input"
                value={form.name}
                onChange= {changeForm}
                placeholder='Name'
                />


                <input
                type="submit"
                name="submit"
                value="Submit"
                className="input"
                />
            </form>
            <div>{displayComments()}</div>

        </div>
            
    )
}
export default Feedback;