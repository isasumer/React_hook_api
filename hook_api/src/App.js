import { useState } from "react";
import StudentList from "./components/StudentList";
const data = [
  {
    id: 1,
    name: "Jason Response",
    email: "jason@mail.com",
    age: 23,
    color: "lightcyan",
  },
  {
    id: 2,
    name: "Benjamin Evalent",
    email: "benjamin@mail.com",
    age: 20,
    color: "honeydew",
  },
  {
    id: 3,
    name: "Malcolm Function",
    email: "malcolm@mail.com",
    age: 21,
    color: "mistyrose",
  },
];
const App = () => {
  const [students, SetStudents] = useState(data);
  const changeColor = (id, color) =>
    SetStudents(
      students.map((student) =>
        student.id === id ? { ...student, color: color } : student
      )
    );
  return (
    <div className="App">
      <header>
        <h1>Welcome!</h1>
      </header>
      <StudentList students={students} changeColor={changeColor} />
    </div>
  );
};
export default App;