import { Link } from "react-router-dom";

import { IoIosArrowRoundForward } from "react-icons/io";

type FeatureSlideProps = {
  iconColor: string;
  img: string;
  feature: string;
};

// #ECFDE8
const FeatureSlide = ({ iconColor, img, feature }: FeatureSlideProps) => {
  return (
    <div className="bg-white w-fit p-5 rounded-xl min-w-60 max-w-96">
      <div className="mb-11">
        <span className={`inline-block ${iconColor} rounded-full p-3`}>
          <img src={img} alt="" width={25} />
        </span>
        <p className="mt-3 font-medium text-xl">
          {/* Ensure alignment of individual goals with overall company objectives */}
          {feature}
        </p>
      </div>
      <Link to={"#"} className="flex  items-center gap-2 font-medium">
        Learn more <IoIosArrowRoundForward className="text-2xl" />
      </Link>
    </div>
  );
};

export default FeatureSlide;
