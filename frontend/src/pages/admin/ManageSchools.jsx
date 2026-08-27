import {  useState,useEffect } from "react";
import api from "../../services/api";

const ManageSchools = () => {
  const [schools, setSchools] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const getSchools = async () => {
    try {
      const response = await api.get(
        "/admin/users/school"
      );

      setSchools(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSchools();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/admin/users", {
        ...formData,
        role: "school",
      });

      setMessage("School created successfully");

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      getSchools();

    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Failed to create school"
      );
    }
  };

  return (
    <div>
      <h1>Manage Schools</h1>

      <p>{message}</p>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="School name"
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
          placeholder="School email"
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

        <button type="submit">
          Create School
        </button>
      </form>

      <hr />

      <h2>Schools</h2>

      {schools.map((school) => (
        <div key={school._id}>
          <h3>{school.name}</h3>
          <p>{school.email}</p>
          <p>{school.role}</p>
        </div>
      ))}
    </div>
  );
};

export default ManageSchools;