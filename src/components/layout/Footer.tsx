import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#181b68] py-20">
      <div className="w-[80%] mx-auto flex flex-col lg:flex-row gap-10 lg:justify-between">
        <div className="flex flex-col gap-6">
          <img src={logo} alt=""  className="w-32"/>
          <ul className="flex gap-3">
            <li className="bg-[#262979] rounded-full p-3">
              <Link to="#">
                <FaFacebookSquare color="white" />
              </Link>
            </li>
            <li className="bg-[#262979] rounded-full p-3">
              <Link to={"#"}>
                <RiInstagramFill color="white" />
              </Link>
            </li>
            <li className="bg-[#262979] rounded-full p-3">
              <Link to={"#"}>
                <FaTiktok color="white" />
              </Link>
            </li>
            <li className="bg-[#262979] rounded-full p-3">
              <Link to={"#"}>
                <FaTwitter color="white" />
              </Link>
            </li>
          </ul>
          <span className="text-[#8F9FBE] text-sm">{`2009 - ${new Date().getFullYear()}`}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-0">
          <div>
            <h3 className="font-black text-lg text-white mb-7">Company</h3>
            <ul className="flex flex-col gap-6">
              <li>
                <Link to={"#"} className={"text-[#8F9FBE]"}>
                  About us
                </Link>
              </li>
              <li>
                <Link to={"#"} className={"text-[#8F9FBE]"}>
                  Careers
                </Link>
              </li>
              <li>
                <Link to={"#"} className={"text-[#8F9FBE]"}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={"#"} className={"text-[#8F9FBE]"}>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
          <h3 className="font-black text-lg text-white mb-7">Resources</h3>
            <ul className="flex flex-col gap-6">
              <li>
                <Link to={"#"} className={"text-[#8F9FBE] text-sm"}>
                  Template Library
                </Link>
              </li>
              <li>
                <Link to={"#"} className={"text-[#8F9FBE] text-sm"}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to={"#"} className={"text-[#8F9FBE] text-sm"}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link to={"#"} className={"text-[#8F9FBE] text-sm"}>
                  Service Status
                </Link>
              </li>
              <li>
                <Link to={"#"} className={"text-[#8F9FBE] text-sm"}>
                  Experts
                </Link>
              </li>
              <li>
                <Link to={"#"} className={"text-[#8F9FBE] text-sm"}>
                  Forum
                </Link>
              </li>
            </ul>
          </div>
          <div>
          <h3 className="font-black text-lg text-white mb-7">Solutions</h3>
            <ul className="flex flex-col gap-6">
              <li>
                <Link to={"#"} className={"text-[#8F9FBE] text-sm"}>
                  Customer Portal
                </Link>
              </li>
              <li>
                <Link to={"#"} className={"text-[#8F9FBE] text-sm"}>
                  Internal Workflow App
                </Link>
              </li>
              <li>
                <Link to={"#"} className={"text-[#8F9FBE] text-sm"}>
                  Flexible CRM
                </Link>
              </li>
              <li>
                <Link to={"#"} className={"text-[#8F9FBE] text-sm"}>
                  Team Intranet
                </Link>
              </li>
              <li>
                <Link to={"#"} className={"text-[#8F9FBE] text-sm"}>
                  For Small-Medium Businesses
                </Link>
              </li>
              <li>
                <Link to={"#"} className={"text-[#8F9FBE] text-sm"}>
                  For Startups
                </Link>
              </li>
              <li>
                <Link to={"#"} className={"text-[#8F9FBE] text-sm"}>
                  For Enterprises
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
