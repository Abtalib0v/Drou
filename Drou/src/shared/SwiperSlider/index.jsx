import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ProductCards from "../ProductCards";
import { useQuery } from "@tanstack/react-query";

export default function SwiperSlider() {
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch("http://localhost:3000/product").then((res) => res.json()),
  });
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      autoHeight={true}
      loop= {true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {" "}
      
        {data?.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCards
              image={product.image}
              hovimage={product.hovimage}
              text={product.text}
              price={product.price}
              disprice={product.disprice}
            />
          </SwiperSlide>
        ))}
      
    </Swiper>
  );
}
