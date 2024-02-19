import { Autocomplete } from "@mantine/core";
import { PiCaretDown } from "react-icons/pi";

type CompanyDetailsProps = {
  prevStep: () => void;
  nextStep: () => void;
};

const CompanyDetails = ({ prevStep, nextStep }: CompanyDetailsProps) => {
  return (
    <div className="flex flex-col gap-6 lg:mt-6">
      <header>
        <h1 className="font-bold text-2xl mb-2">Company details</h1>
        <p className="text-sm font-medium text-[#4f4f4f]">Welcome to View</p>
      </header>
      <form action="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Company name
            </label>
            <input
              type="text"
              className="border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                    placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input"
              placeholder="Enter your company name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Business Type
            </label>
            <input
              type="text"
              className="border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                    placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input"
              placeholder="Enter your last name"
            />
          </div>
          <div className="flex flex-col gap-1 lg:col-span-2">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Address
            </label>
            <input
              type="text"
              className="border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                    placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input"
              placeholder="Enter your address"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Country
            </label>
            <Autocomplete
              size="md"
              placeholder="Choose your country"
              data={["React", "Angular", "Vue", "Svelte"]}
              rightSectionPointerEvents="none"
              rightSection={<PiCaretDown />}
              comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, shadow: 'md' }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              State
            </label>
            <Autocomplete
              size="md"
              placeholder="Choose your state"
              data={["React", "Angular", "Vue", "Svelte"]}
              rightSectionPointerEvents="none"
              rightSection={<PiCaretDown />}
              comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, shadow: 'md' }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Number of Employees
            </label>
            <Autocomplete
              size="md"
              placeholder="--Select option--"
              data={["0-10", "10-50", "50-100", "100 and above"]}
              rightSectionPointerEvents="none"
              rightSection={<PiCaretDown />}
              
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Reg. no
            </label>
            <input
              type="number"
              className="border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                    placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input"
              placeholder="Enter your reg. no"
            />
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
            onClick={nextStep}
            className="bg-primary-color text-white py-3 px-10 rounded-lg"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyDetails;
