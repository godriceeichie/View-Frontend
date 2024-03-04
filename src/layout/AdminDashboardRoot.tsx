import { Outlet } from "react-router-dom";
import { DashboardHeader, DashboardSidebar } from "../components";

const AdminDashboardRoot = () => {
  return (
    <>
      <DashboardHeader />
      <div className="dashboard__main-container flex">
        <DashboardSidebar />
        <main className="w-full bg-[#F7F7F9] overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminDashboardRoot;
