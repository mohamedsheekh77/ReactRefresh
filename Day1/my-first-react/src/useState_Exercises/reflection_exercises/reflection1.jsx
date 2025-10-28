const WelcomeMessage = ({name, age, year}) => {
    return (
        <div className = "welcomemessagePrompt">
            <h1> hi mate how are you ? </h1>
                <p> {name} </p>
                <p> {age} </p>
                <p> {year} </p>


        </div>
    )

}

const MessagePrompt =() =>{
    return(
        <div className ="messageprompt">
            <WelcomeMessage 
            name  = "mohamed sheekh"
            age = "23"
            year= {true} />
        </div>
    )
}
export default MessagePrompt