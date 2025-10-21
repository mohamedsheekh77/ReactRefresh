const ReportCard = ({studentName, subject, grade, teacher, passed}) => {
  let resultMessage;
  if (grade === "A" || grade === "B" || grade === "C") {
    resultMessage = "Passed";
  } else if (grade === "D" || grade === "E") {
    resultMessage = "Just About Passed";
  } else {
    resultMessage = "Failed";
  }

  return( 
    <div className="ReportCard">
      <h1> Report Card</h1>
      <p> {studentName}</p>
      <p> {subject} </p>
      <p> {grade}</p>
      <p>{teacher}</p>
      <p>{passed}</p>
      <p> {resultMessage}</p>
    </div>
  )
}


const ReportCards = () => {
  return (
    <div className="ReportCardShowcase">
      <ReportCard 
      studentName = "Mohamed"
      subject = "Economics"
      grade = "A" 
      teacher = "Tommasso"
      
      />
      <ReportCard
      studentName = "Sara"
      subject = "Economics"
      grade = "B" 
      teacher = "Tommasso"
     
      />
      <ReportCard
      studentName = "Baker"
      subject = "Economics"
      grade = "C" 
      teacher = "Tommasso"
      
      />
      <ReportCard
      studentName = "Tim"
      subject = "Economics"
      grade = "D" 
      teacher = "Tommasso"
      
      />
      <ReportCard
      studentName = "Max"
      subject = "Economics"
      grade = "U" 
      teacher = "Tommasso"
      
      />
    </div>
  );
}
export default ReportCards