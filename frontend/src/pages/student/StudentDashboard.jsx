import useAuth from "../../context/useAuth";

const StudentDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Student Portal</h1>

      <h2>Welcome {user?.name}</h2>

      <p>Attendance</p>
      <p>Marks</p>
      <p>Assignments</p>
      <p>Profile</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default StudentDashboard;