function Feedback () {
    return(
        <div>
            <h1>Insert Comments here</h1>
            <form>
                <input
                type="text"
                placeholder="Insert your Name/Username"
                name="name"
                className="input"
                />


                <input
                type="text"
                placeholder="Feedback here"
                name="Comment"
                className="input"
                />


                <input
                type="submit"
                value="Submit"
                className="input"
                />
            </form>
        </div>
            
    )
}
export default Feedback;