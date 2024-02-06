import { Link } from "react-router-dom";
import { Logo } from ".";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="bg-primary-color px-6 md:px-10 py-3 flex items-center justify-between">
      <div className="flex items-center gap-28">
        <Logo />
        <ul className="hidden md:flex gap-6 text-white text-sm ">
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
        <Link
          to={"/auth/login"}
          className="bg-[#E7E8FF] text-white bg-opacity-15 px-[24px] py-[6px] rounded-md text-sm"
        >
          Login
        </Link>
        <Link to={"/"} className="hidden md:block text-white text-sm">Request a demo</Link>
        {/* <TiThMenuOutline className="text-white text-lg"/> */}
        <FiMenu className="md:hidden text-white text-lg"/>
      </div>
    </header>
  );
};

export default Navbar;
