import { useState,useEffect } from "react";
import api from "../../services/api";

const ManageTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const getTeachers = async () => {
    try {
      const response = await api.get(
        "/admin/users/teacher"
      );

      setTeachers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTeachers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/admin/users", {
        ...formData,
        role: "teacher",
      });

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      getTeachers();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Manage Teachers</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Teacher name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          required
        />

        <input
          type="email"
          placeholder="Teacher email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
          required
        />

        <button>
          Create Teacher
        </button>
      </form>

      <hr />

      {teachers.map((teacher) => (
        <div key={teacher._id}>
          <h3>{teacher.name}</h3>
          <p>{teacher.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ManageTeachers;