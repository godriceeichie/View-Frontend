import { NavLink } from "react-router-dom";
import { RiHome5Fill } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { PiUsersThree } from "react-icons/pi";
import { MdOutlineRateReview } from "react-icons/md";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const DashboardSidebar = () => {
  return (
    <aside className="sticky right-0 bottom-0 h-full w-1/5 border-r border-r-[#E9E9E9] py-3">
      <ul className="flex flex-col gap-2 px-4">
        <li className={"group px-6 py-3 rounded-lg"}>
          <NavLink
            to={"/dashboard/admin/"}
            // className={"flex items-center gap-3 text-primary-color font-medium"}
            className={({ isActive }) => {
              return `flex items-center gap-3 font-medium ${
                isActive && "text-primary-color group-[bg-light-bg-color]"
              }`;
            }}
          >
            <RiHome5Fill size={20} />
            Home
          </NavLink>
        </li>
        <li className="px-6 py-3 rounded-lg">
          <NavLink
            to={"/teams"}
            className={"flex items-center gap-3 text-grey-500 font-medium"}
          >
            <PiUsersThree size={23} />
            Teams
          </NavLink>
        </li>
        <li className="px-6 py-3 rounded-lg">
          <NavLink
            to={"/reviews"}
            className={"flex items-center gap-3 text-grey-500 font-medium"}
          >
            <MdOutlineRateReview size={20} />
            Reviews
          </NavLink>
        </li>
        <li className="px-6 py-3 rounded-lg">
          <NavLink
            to={"employees"}
            className={"flex items-center gap-3 text-grey-500 font-medium"}
          >
            <BsPeople size={22} />
            Employee
          </NavLink>
        </li>
      </ul>
      <div className="absolute bottom-0 border-t border-t-[#ECECEC] w-full py-6 px-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="bg-[#5157ED] rounded-full text-white p-1.5">CC</span>
          <div>
            <p className="text-[#727272] text-sm">Affics</p>
            <h3 className="text-[#717171] font-medium">Admin</h3>
          </div>
        </div>
        <PiDotsThreeVerticalBold size={25} color="#898989"/>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
