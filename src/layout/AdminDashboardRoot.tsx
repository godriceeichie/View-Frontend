import { Outlet } from "react-router-dom";
import { DashboardHeader, DashboardSidebar } from "../components";

const AdminDashboardRoot = () => {
  return (
    <>
      <DashboardHeader />
      <div className="dashboard__main-container flex">
        <DashboardSidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminDashboardRoot;
