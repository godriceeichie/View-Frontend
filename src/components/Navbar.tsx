import { Link } from "react-router-dom";
import { LoginDialog, Logo } from ".";
import { FiMenu } from "react-icons/fi";
import UseScroll from "../hooks/useScroll";

const Navbar = () => {
  const { scrollPosition } = UseScroll();
  return (
    <header
      className={`sticky top-0 z-10 ${
        scrollPosition >= 400
          ? "bg-white border-b border-b-[#b7b7b7] shadow-sm"
          : "bg-primary-color border-b border-b-[#e7e8ff2b]"
      } px-6 md:px-10 py-4 flex items-center justify-between`}
    >
      <div className="flex items-center gap-28">
        <Logo />
        <ul
          className={`hidden lg:flex gap-6 ${
            scrollPosition >= 400 ? "text-[#3E3E3F]" : "text-white"
          } text-sm font-medium`}
        >
          <li>
            <Link to={"#"} className="">
              Use cases
            </Link>
          </li>
          <li>
            <Link to={"#"}>Why View</Link>
          </li>
          <li>
            <Link to={"#"}>Pricing</Link>
          </li>
          <li>
            <Link to={"#"}>Resources</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <LoginDialog />
        <Link
          to={"/"}
          className={`${
            scrollPosition >= 400 &&
            "bg-primary-color text-white px-6 py-3 rounded-md"
          } hidden md:block text-white text-sm font-medium`}
        >
          Request a demo
        </Link>
        {/* <TiThMenuOutline className="text-white text-lg"/> */}
        <FiMenu className={`md:hidden text-lg ${scrollPosition >= 400 ? "text-primary-color": "text-white"}`} />
      </div>
    </header>
  );
};

export default Navbar;
