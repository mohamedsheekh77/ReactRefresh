// In this exercise I aimed to combine both props and useState to build a more interactive component, this is the exmaple i asked ai to create so that i can work on .
// Props allowed me to pass static information (like name, subject, or price) into the child component to the parent component.
// while useState helped me manage functional behaviour — for example, showing or hiding grade until they click the button and then it shows their grade 
// This helped me understand the difference between data passed into a component (props)
// and data that changes inside a component (state) whilst updating the dom in react.


import {useState} from "react"


const ReportCard = ({name, subject, grade, teacher, pass}) => {

    const [showGrade, setShowGrade] = useState(false);

  // Function to update state when button clicked
  const handleShowGrade = () => {
    setShowGrade(true);
  };



    return (
        <div className = "ReportCard">
            <h1> Hi</h1>
            <p> {name}</p>
            <p> {subject}</p>
            {showGrade && <p>Grade: {grade}</p>}
            <p> {teacher}</p>
            <p>Passed: {pass ? " pass" : " fail"}</p>
           

            <button onClick={handleShowGrade} type="button"> check to see your grade </button>
        </div>
        
        
    )
}

const ReportCardShowcase =() => {
    return(
        <div className="ReportCardShowcase">
            <ReportCard
            name = "mohamed"
            subject = "economics"
            grade = "A*"
            teacher ="Tomasso"
            pass= {true}
            

            />
       
        </div>

    )
}

export default ReportCardShowcase 

