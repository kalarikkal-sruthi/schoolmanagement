import useAuth from "../../context/useAuth";

const SchoolDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>School Portal</h1>

      <h2>Welcome {user?.name}</h2>

      <p>School Profile</p>
      <p>Teachers</p>
      <p>Students</p>
      <p>Parents</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default SchoolDashboard;