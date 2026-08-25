import useAuth from "../../context/useAuth";

const ParentDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Parent Portal</h1>

      <h2>Welcome {user?.name}</h2>

      <p>Child Profile</p>
      <p>Attendance</p>
      <p>Marks</p>
      <p>Fees</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default ParentDashboard;