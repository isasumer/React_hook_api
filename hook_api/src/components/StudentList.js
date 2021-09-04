import StudentItem from "./StudentItem";
const StudentList = ({students, changeColor}) => {
  return (
    <>
      <h2>Student List</h2>
      {students.map((student) => ( 
          <StudentItem key={student.name} student={student} changeColor={changeColor} />
      ))}
    </>
  );
};
export default StudentList;