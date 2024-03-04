import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BsPeople } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineRateReview } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { RiHome5Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const MobileDashboardSidebar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer opened={opened} onClose={close}>
        <ul className="flex flex-col gap-2 px-4">
          <li className={"group px-6 py-3 rounded-lg border-b"}>
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
          <li className="px-6 py-3 rounded-lg border-b">
            <NavLink
              to={"/teams"}
              className={"flex items-center gap-3 text-grey-500 font-medium"}
            >
              <PiUsersThree size={23} />
              Teams
            </NavLink>
          </li>
          <li className="px-6 py-3 rounded-lg border-b">
            <NavLink
              to={"/reviews"}
              className={"flex items-center gap-3 text-grey-500 font-medium"}
            >
              <MdOutlineRateReview size={20} />
              Reviews
            </NavLink>
          </li>
          <li className="px-6 py-3 rounded-lg border-b">
            <NavLink
              to={"employees"}
              className={"flex items-center gap-3 text-grey-500 font-medium"}
            >
              <BsPeople size={22} />
              Employee
            </NavLink>
          </li>
        </ul>
      </Drawer>
      <button onClick={open}>
        <CgMenuGridO fontSize={23} className="lg:hidden text-grey-500" />
      </button>
    </>
  );
};

export default MobileDashboardSidebar;
