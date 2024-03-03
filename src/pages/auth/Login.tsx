import { Alert, Loader, LoadingOverlay } from "@mantine/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdError } from "react-icons/md";
import useLogin from "../../hooks/useLogin";
import { LoginPayload } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginVal } from "../../validation/loginVal";
import signupImg from "../../assets/Image holder.svg";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: zodResolver(loginVal),
  });
  const { error, isLoading, login } = useLogin();

  const submitData: SubmitHandler<LoginPayload> = (data, e) => {
    e?.preventDefault();
    console.log(data);
    login(data);
  };
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] h-screen lg:overflow-y-hidden">
      <div className="w-[85%] mx-auto py-4 flex flex-col justify-center">
        <Link
          to={"/"}
          className="flex items-center text-primary-color hover:underline mb-2 lg:mb-0"
        >
          <IoIosArrowBack />
          Back home
        </Link>
        <div className="flex flex-col gap-6 lg:mt-6 relative w-full">
          <LoadingOverlay
            visible={isLoading}
            zIndex={1000}
            overlayProps={{ radius: "sm", blur: 2 }}
          />
          <header>
            <h1 className="font-bold text-2xl mb-1">Welcome Back</h1>
            <p className="text-base font-medium text-[#4f4f4f]">
              We have missed you
            </p>
          </header>
          {error && (
            <Alert
              variant="light"
              color="red"
              title="Error"
              icon={<MdError />}
              withCloseButton
              styles={{ label: { fontSize: "16px" }, body: { gap: ".25rem" } }}
            >
              {error}
            </Alert>
          )}
          <form action="" onSubmit={handleSubmit(submitData)} className=" ">
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              
            </div> */}
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="" className="text-sm text-[#3e3e3e]">
                Work Email
              </label>
              <input
                type="text"
                className={`border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                    placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${
                      errors.workEmail?.message &&
                      `focus:border-error-color focus:shadow-error-input`
                    }`}
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
              <label htmlFor="" className="text-sm text-[#3e3e3e]">
                Password
              </label>
              <input
                type="password"
                className={`border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                    placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${
                      errors.password?.message &&
                      `focus:border-error-color focus:shadow-error-input`
                    }`}
                placeholder="Enter your password"
                {...register("password")}
              />
              {errors.password?.message && (
                <div className="text-[#E30101] text-xs flex items-center gap-1">
                  <MdError /> {errors.password?.message}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 mt-8 bg-primary-color p-3 text-white font-medium rounded-xl w-full"
            >
              Login
              {isLoading ? <Loader size={17} color="#fff" /> : ""}
            </button>
          </form>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={signupImg} alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default Login;
