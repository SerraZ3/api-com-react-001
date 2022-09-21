import React, { useState } from "react";
// import axios from "axios";
// const api = axios.create({
//   baseURL: "http://localhost:3333",
// });
import studentService from "../../services/studentService";
const Home = () => {
  const [students, setStudents] = useState([]);
  const handleApi = async () => {
    try {
      // const response = await fetch("http://localhost:3333/student");
      // const responseData = await response.json();
      // console.log(responseData);
      // const response = await api.get("/student");
      // const data = response.data.data;
      const response = await studentService.getStudents();
      const data = response.data;
      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };
  const createStudent = async () => {
    try {
      // const response = await api.post("/student", {
      //   fullname: "Rogério",
      //   birthdate: "1999-11-10",
      //   classroom: "Sala 29",
      //   school_average: 7,
      //   is_active: true,
      // });
      // const data = response.data.data;
      const response = await studentService.createStudent({
        fullname: "Rogério",
        birthdate: "1999-11-10",
        classroom: "Sala 29",
        school_average: 7,
        is_active: true,
      });
      console.log(response.data);
      // setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {students.map((item, idx) => (
        <div key={idx}>
          <span>{item.fullname}</span>
        </div>
      ))}
      <h1 onClick={handleApi}>Home</h1>
      <h1 onClick={createStudent}>Criar estudante</h1>
    </div>
  );
};
export default Home;
