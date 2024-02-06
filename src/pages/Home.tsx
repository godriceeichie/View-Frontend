import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-primary-color h-[87vh] text-white">
      <div className="h-full">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center text-center gap-5">
            <h1 className="text-6xl w-3/4">The best performance management system</h1>
            <p className="w-1/3">
              We assist businesses scale positive, and increase employee
              engagement, output, and retention.
            </p>
          </div>
          <div>
            <Link to={"/auth/get-started"} >Get Started</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
