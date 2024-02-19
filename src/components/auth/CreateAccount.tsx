type CreateAccountProps = {
  prevStep: () => void;
  nextStep: () => void;
};

const CreateAccount = ({ prevStep, nextStep }: CreateAccountProps) => {
  return (
    <div className="flex flex-col gap-6 lg:mt-6">
      <header>
        <h1 className="font-bold text-2xl mb-2">Create an account</h1>
        <p className="text-sm font-medium text-[#4f4f4f]">Welcome to View</p>
      </header>
      <form action="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              First name
            </label>
            <input
              type="text"
              className="border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                focus:border-[#0912ff] focus:shadow-active-input mb-4"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Last name
            </label>
            <input
              type="text"
              className="border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                focus:border-[#0912ff] focus:shadow-active-input mb-4"
              placeholder="Enter your last name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Work email
            </label>
            <input
              type="text"
              className="border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                focus:border-[#0912ff] focus:shadow-active-input mb-4"
              placeholder="Enter your work email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm text-[#3e3e3e]">
              Password
            </label>
            <input
              type="password"
              className="border-[0.5px] border-[#cbcbcb] rounded-lg py-2 px-3 
                placeholder:text-[#9e9e9e] focus:outline-none focus:border-[0.5px] 
                focus:border-[#0912ff] focus:shadow-active-input mb-4"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-12">
          <button onClick={prevStep} className="bg-[#E7E8FF] text-primary-color py-3 px-10 rounded-lg">
            Back
          </button>
          <button onClick={nextStep} className="bg-primary-color text-white py-3 px-10 rounded-lg">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
