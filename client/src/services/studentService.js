import api from "./apis/main";
const studentService = {
  getStudents: async () => {
    const response = await api.get("/student");
    return response.data;
  },
  createStudent: async (data) => {
    const { fullname, birthdate, classroom, school_average, is_active } = data;
    const response = await api.post("/student", {
      fullname,
      birthdate,
      classroom,
      school_average,
      is_active,
    });
    return response.data;
  },
};

export default studentService;
