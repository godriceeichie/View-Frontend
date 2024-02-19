import { useSwiper } from "swiper/react";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

type FeatureSliderNavProps = {
  isBeginning: Boolean;
  isEnd: Boolean;
};

const FeatureSliderNav = ({ isBeginning, isEnd }: FeatureSliderNavProps) => {
  const swiper = useSwiper();
  return (
    <div className="mt-10 flex justify-center gap-4">
      {isBeginning && (
        <>
          <button
            // onClick={() => swiper.slidePrev()}
            className="bg-[#EBEBF1] rounded-full p-4"
          >
            <IoArrowBack className="text-white text-lg" />
          </button>
          <button
            onClick={() => swiper.slideNext()}
            className="bg-[#E7E8FF] rounded-full p-4"
          >
            <IoArrowForward className="text-primary-color text-lg" />
          </button>
        </>
      )}

      {!isBeginning && !isEnd && (
        <>
          <button
            onClick={() => swiper.slidePrev()}
            className="bg-[#E7E8FF] rounded-full p-4"
          >
            <IoArrowBack className="text-primary-color text-lg" />
          </button>
          <button
            onClick={() => swiper.slideNext()}
            className="bg-[#E7E8FF] rounded-full p-4"
          >
            <IoArrowForward className="text-primary-color text-lg" />
          </button>
        </>
      )}

      {isEnd && (
        <>
          
          <button
            onClick={() => swiper.slidePrev()}
            className="bg-[#E7E8FF] rounded-full p-4"
          >
            <IoArrowBack className="text-primary-color text-lg" />
          </button>
          <button
            // onClick={() => swiper.slidePrev()}
            className="bg-[#EBEBF1] rounded-full p-4"
          >
            <IoArrowForward className="text-white text-lg" />
          </button>
        </>
      )}
    </div>
  );
};

export default FeatureSliderNav;
