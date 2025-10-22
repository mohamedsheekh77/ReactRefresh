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

