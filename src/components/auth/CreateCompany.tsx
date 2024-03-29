import { Alert, Autocomplete, LoadingOverlay } from "@mantine/core";
import { Country, State, IState } from "country-state-city";
import { useEffect, useState } from "react";
import { PiCaretDown } from "react-icons/pi";
import {
  CompanyDetailsInputs,
  CreateCompanyProps,
} from "../../types/index";
import { companyDetailsSchema } from "../../validation/signupVal";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdError } from "react-icons/md";
import { api } from "../../api/axios";

const CompanyDetails = ({
  prevStep,
  nextStep,
  company,
  onCompanyChange,
}: CreateCompanyProps) => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyDetailsInputs>({
    resolver: zodResolver(companyDetailsSchema),
  });

  const [employeeNum, setEmployeeNum] = useState<number>();
  const [state, setState] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [states, setStates] = useState<IState[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [businessType, setBusinessType] = useState<string>();

  const countries = Country.getAllCountries().map((country) => country.name);
  const allStates = states?.map((state) => state.name);
  useEffect(() => {
    setStates(
      State.getStatesOfCountry(
        Country.getAllCountries().filter((item) => {
          return item.name == country;
        })[0]?.isoCode
      )
    );
  }, [country]);

  const createCompany = (data: CompanyDetailsInputs) => {
    console.log(data);
    setIsLoading(true);
    api
      .post("/company", data)
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        onCompanyChange(response.data);
        console.log(company);
        nextStep();
      })
      .catch((error) => {
        console.log(error.response.data.detail);
        setError(error.response.data.detail);
        setIsLoading(false); // Make sure to set isLoading to false on error as well
      });
  };

  const submitData: SubmitHandler<CompanyDetailsInputs> = (data, e) => {
    e?.preventDefault();
    setError("");
    createCompany(data);
  };

  return (
    <div className="flex flex-col gap-6 lg:mt-6 relative">
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      <header>
        <h1 className="font-bold text-2xl mb-2">Company details</h1>
        <p className="text-sm font-medium text-[#4f4f4f]">Welcome to View</p>
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
      <form action="" onSubmit={handleSubmit(submitData)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Company name
            </label>
            <input
              type="text"
              className={`border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                    placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${
                      errors.companyName?.message &&
                      `focus:border-error-color focus:shadow-error-input`
                    }`}
              placeholder="Enter your company name"
              {...register("companyName")}
            />
            {errors.companyName?.message && (
              <div className="text-[#E30101] text-xs flex items-center gap-1">
                <MdError /> {errors.companyName?.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Business Type
            </label>
            {/* <input
              type="text"
              className={`border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                    placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${errors.businessType?.message && `focus:border-error-color focus:shadow-error-input`}`}
              placeholder="Enter your business type"
              {...register("businessType")}
            /> */}
            <Autocomplete
              value={businessType}
              onChange={(businessType) => {
                setBusinessType(businessType)
                setValue("businessType", businessType);
              }}
              size="md"
              placeholder="Choose your business type"
              data={[
                "Consultancy",
                "Technology",
                "Marketing",
                "Finance",
                "Entertainment",
              ]}
              rightSectionPointerEvents="none"
              rightSection={<PiCaretDown />}
              comboboxProps={{
                position: "bottom",
                middlewares: { flip: false, shift: false },
                shadow: "md",
              }}
            />
            {errors.businessType?.message && (
              <div className="text-[#E30101] text-xs flex items-center gap-1">
                <MdError /> {errors.businessType?.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1 lg:col-span-2">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Address
            </label>
            <input
              type="text"
              className={`border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                    placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${
                      errors.address?.message &&
                      `focus:border-error-color focus:shadow-error-input`
                    }`}
              placeholder="Enter your address"
              {...register("address")}
            />
            {errors.address?.message && (
              <div className="text-[#E30101] text-xs flex items-center gap-1">
                <MdError /> {errors.address?.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Country
            </label>
            <Autocomplete
              value={country}
              onChange={(country) => {
                setCountry(country);
                setValue("country", country);
              }}
              size="md"
              placeholder="Choose your country"
              data={countries}
              rightSectionPointerEvents="none"
              rightSection={<PiCaretDown />}
              comboboxProps={{
                position: "bottom",
                middlewares: { flip: false, shift: false },
                shadow: "md",
              }}
            />
            {errors.country?.message && (
              <div className="text-[#E30101] text-xs flex items-center gap-1">
                <MdError /> {errors.country?.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              State
            </label>
            <Autocomplete
              size="md"
              placeholder="Choose your state"
              value={state}
              onChange={(state) => {
                setState(state);
                setValue("state", state);
              }}
              data={allStates}
              rightSectionPointerEvents="none"
              rightSection={<PiCaretDown />}
              comboboxProps={{
                position: "bottom",
                middlewares: { flip: false, shift: false },
                shadow: "md",
              }}
              disabled={country ? false : true}
            />
            {errors.state?.message && (
              <div className="text-[#E30101] text-xs flex items-center gap-1">
                <MdError /> {errors.state?.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Number of Employees
            </label>
            <Autocomplete
              size="md"
              placeholder="--Select option--"
              value={employeeNum?.toString()}
              onChange={(employeeNum) => {
                setEmployeeNum(Number(employeeNum.split("-")[0]));
                setValue(
                  "numberOfEmployees",
                  Number(employeeNum.split("-")[0])
                );
              }}
              data={["0-10", "10-50", "50-100", "100 and above"]}
              rightSectionPointerEvents="none"
              rightSection={<PiCaretDown />}
            />
            {errors.companyName?.message && (
              <div className="text-[#E30101] text-xs flex items-center gap-1">
                <MdError /> {errors.numberOfEmployees?.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Reg. no
            </label>
            <input
              type="number"
              className={`border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                    placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${
                      errors.registrationNo?.message &&
                      `focus:border-error-color focus:shadow-error-input`
                    }`}
              placeholder="Enter your reg. no"
              {...register("registrationNo")}
            />
            {errors.registrationNo?.message && (
              <div className="text-[#E30101] text-xs flex items-center gap-1">
                <MdError /> {errors.registrationNo?.message}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-12">
          <button
            onClick={prevStep}
            className="bg-[#E7E8FF] text-primary-color py-3 px-10 rounded-lg"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-primary-color text-white py-3 px-10 rounded-lg"
            disabled={isLoading}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyDetails;
