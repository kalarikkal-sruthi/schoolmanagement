import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Welcome, {user?.name}</h2>

      <p>Email: {user?.email}</p>

      <p>Role: {user?.role}</p>

      <hr />

      <h2>Management</h2>

      <ul>
        <li>
          <Link to="/admin/schools">
            Manage Schools
          </Link>
        </li>

        <li>
          <Link to="/admin/teachers">
            Manage Teachers
          </Link>
        </li>

        <li>
          <Link to="/admin/students">
            Manage Students
          </Link>
        </li>

        <li>
          <Link to="/admin/parents">
            Manage Parents
          </Link>
        </li>
      </ul>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;