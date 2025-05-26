import { useQuery } from '@tanstack/react-query'
function Example() {
  const { isPending, error,  } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:3000/').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      
    </div>
    // <Swiper
    //   spaceBetween={50}
    //   slidesPerView={5}
    //   autoHeight={true}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper) => console.log(swiper)}
    // > 
    // {data.map((product) => (
    //   <div className="px-[30px]">
    //     <SwiperSlide  key={product.id}>
    //     <ProductCards 
    //     image={product.image}
    //     hovImage={product.hovImage}
    //         text={product.text}
    //         price={product.price}
    //         disPrice={product.disPrice} />
    //   </SwiperSlide>

    // </div>
    // ))}
    
      
    // </Swiper>  
  )
}
export default Example;