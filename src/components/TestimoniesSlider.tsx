import { Swiper, SwiperSlide } from "swiper/react";
import TestimonySlide from "./TestimonySlide";
import { A11y, Navigation, Pagination } from "swiper/modules";
import TestimoniesSliderNav from "./TestimoniesSliderNav";
import { useState } from "react";

const TestimoniesSlider = () => {
  const [isBeginning, setIsBeginning] = useState<Boolean | null>(true);
  const [isEnd, setIsEnd] = useState<Boolean | null>(false);
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, A11y]}
        slidesPerView={1}
        className="relative"
        onActiveIndexChange={(e) => {
          if (e.isBeginning) {
            setIsBeginning(true);
            setIsEnd(false);
          } else if (e.isEnd) {
            setIsEnd(true);
            setIsBeginning(false);
          } else {
            setIsBeginning(null);
            setIsEnd(null);
          }
        }}
      >
        
        <SwiperSlide>
          <TestimonySlide />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonySlide />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonySlide />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonySlide />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonySlide />
        </SwiperSlide>
        <TestimoniesSliderNav isBeginning={isBeginning!} isEnd={isEnd!} />
      </Swiper>
    </>
  );
};

export default TestimoniesSlider;