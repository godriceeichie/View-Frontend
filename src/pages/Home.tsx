import { Link } from "react-router-dom";
import chart1 from "../assets/chart-1.svg";
import profileImg from "../assets/profile.svg";
import tabImg from "../assets/tab-2.svg";
import chart2 from "../assets/chart-2.svg";
import dashboardImg from "../assets/dashboardImg.svg";
import hmLogo from "../assets/H&M - png 0.svg";
import googleLogo from "../assets/Google svg.svg";
import appleLogo from "../assets/Apple - png 0.svg";
import pinterestLogo from "../assets/Pinterest - png.svg";
import stripeLogo from "../assets/Stripe svg.svg";
import adobeLogo from "../assets/Adobe - png 0.svg";
import airbnbLogo from "../assets/Airbnb - png 0.svg";
import manWorkingOutImg from '../assets/Office worker exercising with dumbbells to train muscles while he uses laptop at desk. employee lifting weights and doing physical activity with fitness exercise, working on computer for business..png'

const Home = () => {
  return (
    <>
      {/* // h-[87vh] md:h-[60vh] lg:h-[80vh] */}
      <section className="bg-primary-color  text-white relative">
        <div className="h-full relative py-24">
          {/* w-24 lg:w-auto  */}
          <img
            src={chart1}
            alt=""
            className="hidden lg:inline-block absolute left-8 top-6"
          />
          <img
            src={profileImg}
            alt=""
            className="hidden lg:inline-block absolute right-0 top-6"
          />
          <div className="flex flex-col items-center justify-center h-full gap-10 px-5">
            <div className="flex flex-col items-center text-center gap-5">
              <h1 className="text-5xl md:text-6xl font-semibold px-5 w-full lg:w-3/4">
                The best performance management system
              </h1>
              <p className="md:w-1/3 text-white text-opacity-75 px-10 md:px-0">
                We assist businesses scale positive, and increase employee
                engagement, output, and retention.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to={"/auth/get-started"}
                className="bg-white text-primary-color text-sm md:text-base px-[1.25em] py-[0.75em] rounded-lg font-medium"
              >
                Get Started
              </Link>
              <Link
                to={"/"}
                className={
                  "bg-[#E7E8FF] bg-opacity-15 text-sm md:text-base px-[1.25em] py-[0.75em] rounded-lg font-medium"
                }
              >
                Request a demo
              </Link>
            </div>
          </div>
          <img
            src={tabImg}
            alt=""
            className="hidden lg:inline-block absolute bottom-10 left-8"
          />
          {/* w-24 lg:w-auto -z-1 right-2 lg:right-10 */}
          <img
            src={chart2}
            alt=""
            className="hidden lg:inline-block absolute right-10 bottom-10"
          />
        </div>
        {/* absolute top-full -translate-y-1/2 */}
        <img className="" src={dashboardImg} alt="" />
      </section>
      <section className="bg-[#F9F9F9] py-24 ">
        {/* relative overflow-x-hidden */}
        <div className="flex flex-col gap-8 overflow-x-hidden">
          <h2 className="text-center text-[#141645] font-medium text-xl">
            Tried and trusted by:
          </h2>
          <ul className="flex flex-col md:flex-row items-center gap-8 md:gap-4 track">
            <li>
              <img src={hmLogo} alt="" className="lg:w-[300px]" />
            </li>
            <li>
              <img src={googleLogo} alt="" className="lg:w-[500px]" />
            </li>
            <li>
              <img src={appleLogo} alt="" className="lg:w-[300px]" />
            </li>
            <li>
              <img src={pinterestLogo} alt="" className="lg:w-[600px]" />
            </li>
            <li>
              <img src={stripeLogo} alt="" className="lg:w-[600px]" />
            </li>
            <li>
              <img src={adobeLogo} alt="" className="lg:w-[600px]" />
            </li>
            <li>
              <img src={airbnbLogo} alt="" className="lg:w-[500px]" />
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="w-3/4 mx-auto">
          <div className="grid grid-cols-2">
            <div>
              <h3>Track personal and organizational goals</h3>
              <p>
                Our performance management system allows you to align individual
                goals with organizational goals, ensuring that everyone in your
                organization is working towards the same objectives. You can
                easily monitor progress toward goals at both the individual and
                team levels, giving you a comprehensive view of performance
                across your organization.
              </p>
            </div>
            <div></div>
          </div>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Home;
