import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Root from "./layout/Root";
import { Home, SignUp } from "./pages";
import AdminDashboardRoot from "./layout/AdminDashboardRoot";
import { AdminDashboardHome } from "./components";
import Login from "./pages/auth/Login";
import AuthProtectedRoute from "./components/auth/AuthProtectedRoute";
import RoleAccess from "./components/auth/RoleProtectedRoute";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/auth">
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route
          path="/dashboard/admin"
          element={
            <AuthProtectedRoute>
              <RoleAccess role="Admin">
                <AdminDashboardRoot />
              </RoleAccess>
            </AuthProtectedRoute>
          }
        >
          <Route index element={<AdminDashboardHome />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
