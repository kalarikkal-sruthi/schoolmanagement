import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

const Login = () => {
  const navigate = useNavigate();

  const { login, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const result = await login(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    // Redirect according to role

    switch (result.user.role) {
      case "admin":
        navigate("/admin");
        break;

      case "school":
        navigate("/school");
        break;

      case "teacher":
        navigate("/teacher");
        break;

      case "student":
        navigate("/student");
        break;

      case "parent":
        navigate("/parent");
        break;

      default:
        setError("Invalid user role");
    }
  };

  return (
    <div>
      <h1>School Management System</h1>

      <h2>Login</h2>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Enter email"
            required
          />
        </div>

        <br />

        <div>
          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="Enter password"
            required
          />
        </div>

        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;