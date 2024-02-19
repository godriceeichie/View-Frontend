import FeatureSlide from "./FeatureSlide";
import cupImg from "../../assets/cup.svg";
import documentImg from "../../assets/documenttext1.svg";
import chartImg from "../../assets/chart1.svg";
import verifyImg from "../../assets/verify.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import 'swiper/css'
import FeatureSliderNav from "./FeatureSliderNav";
import { useState } from "react";

const FeaturesSlider = () => {
  const [isBeginning,setIsBeginning] = useState<Boolean | null>(true)
  const [isEnd, setIsEnd] = useState<Boolean | null>(false)
  // const [disableFading, setDisableFading] = useState<'isBeginning' | 'isEnd' | null>('isBeginning')
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        className="px-[10%]"
        allowSlideNext={true}
        breakpoints={{
          200:{
            slidesPerView: 1
          },
          760: {
            slidesPerView: 2
          },
          1140:{
            slidesPerView: 3
          }
        }}
        onActiveIndexChange={(e) => {
          if(e.isBeginning){
            setIsBeginning(true)
            setIsEnd(false)
          }else if(e.isEnd){
            setIsEnd(true)
            setIsBeginning(false)
          }else{
            setIsBeginning(null)
            setIsEnd(null)
          }
        }}
        // onReachBeginning={() => setIsBeginning(true)}
        // onReachEnd={() => setIsEnd(true)}
      >
        <SwiperSlide>
          <FeatureSlide
            iconColor="bg-[#ECFDE8]"
            img={cupImg}
            feature="Ensure alignment of individual goals with overall company objectives"
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureSlide
            iconColor="bg-[#FDF7E8]"
            img={documentImg}
            feature="Monitor and record of employee progress towards goals"
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureSlide
            iconColor="bg-[#FDE8E8]"
            img={chartImg}
            feature="Visualize performance data to identify areas for improvement"
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureSlide
            iconColor="bg-[#FCE8FD]"
            img={verifyImg}
            feature="Conducting regular performance evaluations and providing feedback"
          />
        </SwiperSlide>
        <FeatureSliderNav isBeginning={isBeginning!} isEnd={isEnd!}/>
      </Swiper>
    </>
  );
};

export default FeaturesSlider;
