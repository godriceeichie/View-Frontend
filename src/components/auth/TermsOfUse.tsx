import { Link } from "react-router-dom";
import { NavButtonProps } from "../../types";
import { Checkbox } from "@mantine/core";
import OTPModal from "./OTPModal";

const TermsOfUse = ({ prevStep }: NavButtonProps) => {
  return (
    <div className="flex flex-col gap-6 lg:mt-6">
      <header>
        <h1 className="font-bold text-2xl mb-2">Terms of use</h1>
        <p className="text-sm font-medium text-[#4f4f4f]">Welcome to View</p>
      </header>
      <article>
        Please read these{" "}
        <Link to={"#"} className="text-[#097BE5] font-medium">
          Terms
        </Link>{" "}
        carefully before using the Product. By using the Product, you agree to
        be bound by these{" "}
        <Link to={"#"} className="text-[#097BE5] font-medium">
          Terms
        </Link>{" "}
        and our{" "}
        <Link to={"#"} className="text-[#097BE5] font-medium">
          Privacy Policy
        </Link>
        , which is incorporated into these Terms by reference. If you do not
        agree to these Terms, you may not use the Product.
      </article>
      <Checkbox label="I agree to these terms" className="mt-10" styles={{label: {fontSize: "16px"}}}/>

      <div className="flex justify-center gap-2 mt-12">
        <button
          onClick={prevStep}
          className="bg-[#E7E8FF] text-primary-color py-3 px-10 rounded-lg"
        >
          Back
        </button>
        <OTPModal />
      </div>
    </div>
  );
};

export default TermsOfUse;
