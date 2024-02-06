import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-primary-color h-[87vh] md:h-[75vh] text-white">
      <div className="h-full">
        <div className="flex flex-col items-center justify-center h-full gap-10 ">
          <div className="flex flex-col items-center text-center gap-5">
            <h1 className="text-5xl md:text-6xl px-5 w-full md:w-3/4">The best performance management system</h1>
            <p className="md:w-1/3 text-white text-opacity-75 px-10 md:px-0">
              We assist businesses scale positive, and increase employee
              engagement, output, and retention.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link to={"/auth/get-started"} className="bg-white text-primary-color text-sm md:text-base px-[1.25em] py-[0.75em] rounded-lg">Get Started</Link>
            <Link to={"/"} className={"bg-[#E7E8FF] bg-opacity-15 text-sm md:text-base px-[1.25em] py-[0.75em] rounded-lg"}>Request a demo</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
