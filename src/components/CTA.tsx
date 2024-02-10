import { Link } from "react-router-dom";
import bg from "../assets/bro.svg";

const CTA = () => {
  return (
    <section
      className={`w-[80%] mx-auto bg-primary-color rounded-xl pl-[4%] py-[7%] relative my-20`}
    >
      <div className="md:w-1/2">
        <h3 className="text-white text-2xl lg:text-4xl mb-16">
          To win in the marketplace you must win in the workplace
        </h3>
        <Link
          to={"/"}
          className={`
            w-fit bg-white text-primary-color px-[1.25em] py-[0.75em] rounded-md
           text-sm lg:text-base font-medium`}
        >
          Request a demo
        </Link>
      </div>
      <img src={bg} alt="" className="absolute right-0 bottom-0 min-w-20 w-[50%] max-w-[30rem] -z-0" />
    </section>
  );
};

export default CTA;
