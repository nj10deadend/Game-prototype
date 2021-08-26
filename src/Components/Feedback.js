import React,{useEffect, useState} from 'react'
import Comment from './Comment'
import Marquee from "react-fast-marquee";

function Feedback () {
const [form,setForm] = useState ({
    comment: "", 
    name: ""})
const [comm, setComm] = useState ([])

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
}


    return(
        <div>
            <h1 className='h1'>Thoughts?</h1>
            <Marquee className='h2'>Let us know below!</Marquee>
            <form id='form' onSubmit={handleSubmit}>
                <textarea rows='3' cols='25'
                type="text"
                name="comment"
                className="input"
                value={form.comment}
                onChange= {changeForm}
                placeholder='Insert Comment'
                />
                
                <br></br>

                <input
                type="text"
                name="name"
                className="input"
                value={form.name}
                onChange= {changeForm}
                placeholder='Name'
                />

                <br></br>

                <input
                type="submit"
                name="submit"
                value="Submit"
                className="button"
                />
            </form>
            <div>{displayComments()}</div>

        </div>
            
    )
}
export default Feedback;