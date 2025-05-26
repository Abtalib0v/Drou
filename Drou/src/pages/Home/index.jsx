import React from 'react'
import SlickList from '../../sections/SlickList'
// import ProductCards from '../../shared/ProductCards'
import ProSlider from '../../sections/ProSlider'
import Banner from '../../sections/Banner'
import PopularProduct from '../../sections/PopularProduct'

const Home = () => {
  return (
    <div >
        <SlickList/>
    {/* <ProductCards/>  */}
    <ProSlider/>
    <Banner/>
    <PopularProduct/>
    </div>
   
    
  )
}

export default Home