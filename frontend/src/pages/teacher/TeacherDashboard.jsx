import useAuth from "../../context/useAuth";

const TeacherDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Teacher Portal</h1>

      <h2>Welcome {user?.name}</h2>

      <p>View Students</p>
      <p>Attendance</p>
      <p>Marks</p>
      <p>Assignments</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default TeacherDashboard;