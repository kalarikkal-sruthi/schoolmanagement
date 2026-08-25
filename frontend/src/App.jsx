import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageSchools from "./pages/admin/ManageSchools";
import ManageTeachers from "./pages/admin/ManageTeachers";

import SchoolDashboard from "./pages/school/SchoolDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";


import StudentDashboard from "./pages/student/StudentDashboard";
import ParentDashboard from "./pages/parent/ParentDashboard";

import ProtectedRoute from "./components/ProtectRoute";

import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Public Routes */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />


          {/* ADMIN */}

          <Route
            path="/admin"
            element={
              <ProtectedRoute
                allowedRoles={["admin"]}
              >
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/schools"
            element={
              <ProtectedRoute
                allowedRoles={["admin"]}
              >
                <ManageSchools />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/teachers"
            element={
              <ProtectedRoute
                allowedRoles={["admin"]}
              >
                <ManageTeachers />
              </ProtectedRoute>
            }
          />


          {/* SCHOOL */}

          <Route
            path="/school"
            element={
              <ProtectedRoute
                allowedRoles={["school"]}
              >
                <SchoolDashboard />
              </ProtectedRoute>
            }
          />


          {/* TEACHER */}

          <Route
            path="/teacher"
            element={
              <ProtectedRoute
                allowedRoles={["teacher"]}
              >
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />


          {/* STUDENT */}

          <Route
            path="/student"
            element={
              <ProtectedRoute
                allowedRoles={["student"]}
              >
                <StudentDashboard />
              </ProtectedRoute>
            }
          />


          {/* PARENT */}

          <Route
            path="/parent"
            element={
              <ProtectedRoute
                allowedRoles={["parent"]}
              >
                <ParentDashboard />
              </ProtectedRoute>
            }
          />


          {/* Default */}

          <Route
            path="/"
            element={
              <Navigate
                to="/login"
                replace
              />
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;