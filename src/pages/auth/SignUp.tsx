import signupImg from "../../assets/Image holder.svg";
import { useState } from "react";
import { Stepper } from "@mantine/core";
import { CompanyDetails, CreateAccount, TermsOfUse } from "../../components";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Company } from "../../types";

const SignUp = () => {
  const [active, setActive] = useState(0);
  const [company, setCompany] = useState<Company>()
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));


  const handleCompanyChange = (company: Company) => {
    setCompany(company)
  } 
  return (
    <>
      <div className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] h-screen lg:overflow-y-hidden">
        <div className="pt-4 overflow-y-auto">
          <Link
            to={"/"}
            className="w-[85%] mx-auto flex items-center text-primary-color hover:underline mb-2 lg:mb-0"
          >
            <IoIosArrowBack />
            Back home
          </Link>
          <Stepper
            active={active}
            onStepClick={setActive}
            allowNextStepsSelect={false}
            color="#3E45EB"
            iconSize={25}
            style={{ width: "85%", marginInline: "auto", paddingBlock: "1rem" }}
            styles={{ stepLabel: { fontSize: "14px" } }}
            orientation={"vertical"}
            hiddenFrom="lg"
          >
            <Stepper.Step label="Company details">
              <CompanyDetails prevStep={prevStep} nextStep={nextStep} company={company!} 
              onCompanyChange={handleCompanyChange}/>
            </Stepper.Step>
            <Stepper.Step label="Create an account">
              <CreateAccount prevStep={prevStep} nextStep={nextStep} company={company!} 
              onCompanyChange={handleCompanyChange}/>
            </Stepper.Step>
            <Stepper.Step label="Terms of use">
              <TermsOfUse prevStep={prevStep} nextStep={nextStep} />
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
          <Stepper
            active={active}
            onStepClick={setActive}
            allowNextStepsSelect={false}
            color="#3E45EB"
            iconSize={25}
            style={{ width: "85%", marginInline: "auto", paddingBlock: "2rem" }}
            styles={{ stepLabel: { fontSize: "14px" } }}
            orientation={"horizontal"}
            visibleFrom="lg"
          >
            <Stepper.Step label="Company details">
              <CompanyDetails prevStep={prevStep} nextStep={nextStep} 
              company={company!} onCompanyChange={handleCompanyChange}/>
            </Stepper.Step>
            <Stepper.Step label="Create an account">
              <CreateAccount prevStep={prevStep} nextStep={nextStep} company={company!} onCompanyChange={handleCompanyChange} />
            </Stepper.Step>
            <Stepper.Step label="Terms of use">
              <TermsOfUse prevStep={prevStep} nextStep={nextStep} />
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
          <div className="w-[80%] mx-auto flex flex-col gap-3 pb-8">
            <span className="block text-[#2f2f2f] text-center">
              Already have an account?{" "}
              <Link
                to={"/auth/login"}
                className="text-[#3E79EB] font-bold hover:underline"
              >
                Sign in
              </Link>
            </span>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={signupImg} alt="" className="object-cover" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
