import React, { useCallback, useState } from 'react'
import BannerTitle from './BannerTitle';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../header/Header';
import { useQuery } from 'react-query';
import Loader from '../authentication/Loader';
const fetchData = async () => {
  const response = await fetch(`http://localhost:8081/banners`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};
const customArrowStyles = {
  position: 'absolute',
  top: '50%',
  zIndex: 2,
  fontSize: '2rem',
  color: 'white',
  background: '#fff',
  cursor: 'pointer',
  color:"black"
};
const renderCustomPrevArrow = (clickHandler) => (
  <div style={{ ...customArrowStyles, left: 0 }} onClick={clickHandler}>
    {<IoIosArrowBack />}
  </div>
);

const renderCustomNextArrow = (clickHandler) => (
  <div style={{ ...customArrowStyles, right: 0 }} onClick={clickHandler}>
    {<IoIosArrowForward />}
  </div>
);
const Banner = () => {
  const { data, error, isLoading } = useQuery('myBanner', fetchData);
  console.log(data)
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleCarouselChange = useCallback((index) => {
    setCurrentIndex(index)
  }, [currentIndex]);
  return (
    <div>
      {
          isLoading?
          <div className='flex items-center justify-center h-full'>
            <Loader size={35}/>
          </div>:
          <div className="" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)), url(${data[currentIndex]?.backgroundUrl})`,backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
          <div className=''>
            <Header/>
          </div>
          <div >
            
               <div className='flex items-center flex-row justify-evenly flex-1 py-10'>
                <div>
            <BannerTitle/>
          </div>
          <div className='relative'>
          <Carousel
          width={300}
          showThumbs={false}
          renderArrowPrev={renderCustomPrevArrow}
          renderArrowNext={renderCustomNextArrow}
          onChange={handleCarouselChange}
          showIndicators={false}
          >
         {data?.map((image, index) => (
            <div  key={index}>
              <img src={image?.imgUrl}   className='rounded-xl' alt={`Slide ${index}`} />
            </div>
          ))}
          </Carousel>
          <div className='p-2 cursor-pointer absolute bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-r text-white left-[30%] -bottom-3 bg-black rounded-3xl px-3'>Watch Now</div>
          </div>
               </div>
            
          
          </div>
          
          
        </div>}
    </div>
         
    
  )
}

export default Banner