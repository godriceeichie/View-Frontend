import { SubmitHandler, useForm } from "react-hook-form";
import {zodResolver } from "@hookform/resolvers/zod"
import { adminDetailsSchema } from "../../validation/signupVal";
import { MdError } from "react-icons/md";
import { AdminSignUpInputs, NavButtonsProps } from "../../types";



const CreateAccount = ({ prevStep, nextStep }: NavButtonsProps) => {
  const { handleSubmit, register, formState: {errors, dirtyFields}} = useForm<AdminSignUpInputs>({resolver: zodResolver(adminDetailsSchema)})
  const submitData: SubmitHandler<AdminSignUpInputs> = ( data, e ) => {
    e?.preventDefault()
    console.log(data)
    console.log(dirtyFields)
    nextStep()
  }
  return (
    <div className="flex flex-col gap-6 lg:mt-6">
      <header>
        <h1 className="font-bold text-2xl mb-1">Create an account</h1>
        <p className="text-base font-medium text-[#4f4f4f]">Welcome to View</p>
      </header>
      <form action="" onSubmit={handleSubmit(submitData)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              First name
            </label>
            <input
              type="text"
              className={`border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                focus:border-[#0912ff] focus:shadow-active-input ${errors.firstName?.message && `focus:border-error-color focus:shadow-error-input`}`}
              placeholder="Enter your first name"
              {...register("firstName")}
            />
            {errors.firstName?.message && (<div className="text-[#E30101] text-xs flex items-center gap-1"><MdError /> {errors.firstName?.message}</div>)}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Last name
            </label>
            <input
              type="text"
              className={`border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                focus:border-[#0912ff] focus:shadow-active-input ${errors.lastName?.message && `focus:border-error-color focus:shadow-error-input`}`}
              placeholder="Enter your last name"
              {...register("lastName")}
            />
            {errors.lastName?.message && (<div className="text-[#E30101] text-xs flex items-center gap-1"><MdError /> {errors.lastName?.message}</div>)}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Work email
            </label>
            <input
              type="email"
              className={`border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                focus:border-[#0912ff] focus:shadow-active-input ${errors.workEmail?.message && `focus:border-error-color focus:shadow-error-input`}`}
              placeholder="Enter your work email"
              {...register("workEmail")}
            />
            {errors.workEmail?.message && (<div className="text-[#E30101] text-xs flex items-center gap-1"><MdError /> {errors.workEmail?.message}</div>)}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Password
            </label>
            <input
              type="password"
              className={`border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                focus:border-[#0912ff] focus:shadow-active-input ${errors.password?.message && `focus:border-error-color focus:shadow-error-input`}`}
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password?.message && (<div className="text-[#E30101] text-xs flex items-center gap-1"><MdError /> {errors.password?.message}</div>)}
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-12">
          <button onClick={prevStep} className="bg-[#E7E8FF] text-primary-color py-3 px-10 rounded-lg">
            Back
          </button>
          <button className="bg-primary-color text-white py-3 px-10 rounded-lg">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
