
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useSwiper } from "swiper/react";

type FeatureSliderNavProps = {
    isBeginning: Boolean;
    isEnd: Boolean;
  };
  

const TestimoniesSliderNav = ({isBeginning, isEnd}: FeatureSliderNavProps) => {
    const swiper = useSwiper();
    
  return (
    <div className="flex justify-between items-center mt-4 lg:mt-0 lg:absolute lg:top-1/2 w-full z-[5] ">
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
  )
}

export default TestimoniesSliderNav