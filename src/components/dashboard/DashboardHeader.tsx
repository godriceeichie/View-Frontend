import { Link } from "react-router-dom";
import logo from "../../assets/blueLogo.svg";
import { Indicator, Input } from "@mantine/core";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { useEffect } from "react";
import { api } from "../../api/axios";
import MobileDashboardSidebar from "./MobileDashboardSidebar";
import LogoutModal from "./LogoutModal";

const DashboardHeader = () => {
  useEffect(() => {
    api.get("/user/me")
      .then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <header className="border-b border-b-[#E2E1E1] flex items-center justify-between px-7 py-3">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <Input
        w={"50%"}
        placeholder="Search by; employee: Jane or goal: find fish"
        leftSection={<FiSearch size={16} />}
        styles={{input: {border: ".5px solid #BDBDBD"}}}
        className="hidden lg:block"
      />
      <div className="flex items-center gap-3">
        {/* <h3>{user && user.firstName}</h3> */}
        <MobileDashboardSidebar />
        <Indicator position="top-end" offset={5} size={8}>
          <IoNotificationsOutline fontSize={23} className="text-grey-500" />
        </Indicator>
        <LogoutModal />
      </div>
    </header>
  );
};

export default DashboardHeader;
