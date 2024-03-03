import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import UseScroll from "../../hooks/useScroll";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { Alert, Loader } from "@mantine/core";
import useLogin from "../../hooks/useLogin";
import { MdError } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginPayload } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginVal } from "../../validation/loginVal";

// export let handleOpen: () => (value: React.SetStateAction<boolean>) => void;
const LoginModal = () => {
  const [open, setOpen] = useState(false);
  let handleOpen = () => setOpen(!open);

  const { scrollPosition } = UseScroll();
  const { isLoading, login, error } = useLogin();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: zodResolver(loginVal),
  });

  const submitData: SubmitHandler<LoginPayload> = (data, e) => {
    localStorage.clear();
    e?.preventDefault();
    console.log(data);
    login(data);
  };
  return (
    <>
      <button
        onClick={handleOpen}
        className={`bg-[#E7E8FF] ${
          scrollPosition >= 400
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
        className="lg:min-w-fit lg:w-1/3 font-sans pb-3 px-3"
      >
        <DialogHeader placeholder={""} className="flex flex-col gap-1">
          <button
            className="p-1 bg-[#EEEFF6] rounded-full self-end"
            onClick={handleOpen}
          >
            <IoCloseOutline className="text-[#979797]" />
          </button>
          <h1 className="text-3xl">Welcome back</h1>
          <p className="font-medium text-[#4F4F4F] text-sm">
            We've missed you so much
          </p>
        </DialogHeader>
        <DialogBody placeholder={""} className="flex flex-col gap-6 pb-0">
          {error && (
            <Alert
              variant="light"
              color="red"
              title="Error"
              icon={<MdError />}
              withCloseButton
              styles={{
                label: { fontSize: "16px" },
                body: { gap: ".25rem" },
              }}
            >
              {error}
            </Alert>
          )}
          <form action="" onSubmit={handleSubmit(submitData)}>
            <div>
              <div className="flex flex-col gap-1 mb-3">
                <label
                  htmlFor=""
                  className="text-sm text-[#3e3e3e] font-medium"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  className="border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                focus:border-[#0912ff] focus:shadow-active-input"
                  placeholder="Enter your work email"
                  {...register("workEmail")}
                />
                {errors.workEmail?.message && (
                  <div className="text-[#E30101] text-xs flex items-center gap-1">
                    <MdError /> {errors.workEmail?.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="text-sm text-[#3e3e3e] font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                focus:border-[#0912ff] focus:shadow-active-input mb-4"
                  placeholder="Enter your password"
                  {...register("password")}
                />
                {errors.password?.message && (
                  <div className="text-[#E30101] text-xs flex items-center gap-1">
                    <MdError /> {errors.password?.message}
                  </div>
                )}
              </div>
            </div>
            <Link
              to={"#"}
              className="text-[#3E79EB] text-sm font-semibold hover:underline"
            >
              Forgot password?
            </Link>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 mt-8 bg-primary-color p-3 text-white font-medium rounded-xl w-full"
            >
              Login
              {isLoading ? <Loader size={17} color="#fff" /> : ""}
            </button>
          </form>
        </DialogBody>
        <DialogFooter placeholder={""} className="justify-center p-0 mt-2">
          <span className="text-[#2f2f2f] text-center font-medium text-sm">
            Don't have an account?{" "}
            <Link
              to={"/auth/signup"}
              className="text-[#3E79EB] hover:underline"
            >
              Sign up
            </Link>
          </span>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default LoginModal;
