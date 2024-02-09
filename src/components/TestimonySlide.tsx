import { FaTwitter } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const TestimonySlide = () => {
  return (
    <div className="lg:w-1/2 mx-auto p-8 lg:p-10 rounded-xl border border-[#D5D5D5]">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FaCircleUser className="text-[#71C6A2] text-6xl" />
          <div>
            <h3 className="text-lg font-medium">Sarah M.</h3>
            <h5 className="text-sm text-[#8A8A8A]">
              CEO of a cosmetic company
            </h5>
            <p className="text-sm text-[#8A8A8A]">@seary_ehm</p>
          </div>
        </div>
        <FaTwitter className="text-[#55ACEE] text-2xl" />
      </header>
      <p className="mt-9 text-[#4e4e4e] font-medium">
        I've been working with PackMate for several years now, and I have to say
        that I am thoroughly impressed with their quality of work. They provide
        the perfect packaging for my products, and the customer service is
        exceptional. I highly recommend this company to anyone looking for the
        best packaging solutions
      </p>
    </div>
  );
};

export default TestimonySlide;
