import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import UseScroll from "../hooks/useScroll";
import googleIcon from "../assets/logos_google-icon.svg";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

const LoginDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const { scrollPosition } = UseScroll();
  return (
    <>
      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <button
        onClick={handleOpen}
        className={`bg-[#E7E8FF] ${scrollPosition >= 400
            ? "text-primary-color"
            : "text-white bg-opacity-15"
          }  px-6 py-3 rounded-md text-sm`}
      >
        Login
      </button>
      <Dialog
        placeholder={""}
        open={open}
        handler={handleOpen}
        className="lg:min-w-fit lg:w-1/3 font-sans pb-3"
      >
        <DialogHeader placeholder={""} className="flex flex-col gap-1">
          <button className="p-1 bg-[#EEEFF6] rounded-full self-end" onClick={handleOpen}>
            <IoCloseOutline className="text-[#979797]"/>
          </button>
          <h1 className="text-3xl">Welcome back</h1>
          <p className="font-medium text-[#4F4F4F] text-sm">
            We've missed you so much
          </p>
        </DialogHeader>
        <DialogBody placeholder={""} className="flex flex-col gap-6 pb-0">
          <button
            onClick={() => { }}
            className="text-black font-medium flex items-center 
            gap-2 py-2 justify-center rounded-lg border-[0.5px] border-[#cbcbcb] text-sm"
          >
            <img src={googleIcon} alt="" />
            Login with google
          </button>
          <div className="flex items-center gap-3">
            <div className="border-t-[0.5px] border-t-[#747474] w-1/2"></div>
            <span>or</span>
            <div className="border-t-[0.5px] border-t-[#747474] w-1/2"></div>
          </div>
          <form action="">
            <div>
            <div className="flex flex-col gap-1 mb-3">
              <label htmlFor="" className="text-sm text-[#3e3e3e] font-medium">
                Work Email
              </label>
              <input
                type="email"
                className="border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                focus:border-[#0912ff] focus:shadow-sm focus:shadow-[#C2C4F6]"
                placeholder="Enter your work email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm text-[#3e3e3e] font-medium">
                Password
              </label>
              <input
                type="password"
                className="border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                focus:border-[#0912ff] focus:shadow-sm focus:shadow-[#C2C4F6] mb-4"
                placeholder="Enter your password"
              />
            </div>
            </div>
            <Link to={"#"} className="text-[#3E79EB] text-sm font-semibold">
              Forgot password?
            </Link>
            <button type="submit" className="block mt-8 bg-primary-color p-3 text-white rounded-xl w-full">
              Login
            </button>
          </form>
        </DialogBody>
        <DialogFooter placeholder={""} className="justify-center p-0 mt-2">
          <span className="text-[#2f2f2f] text-center font-medium">I would rather <Link to={"#"} className="text-[#3E79EB]">Sign up</Link></span>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default LoginDialog;
