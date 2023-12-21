import React, { useState } from 'react';
import UpcomingDetails from './UpcomingDetails';
import { useQuery } from 'react-query';
import Loader from '../authentication/Loader';
import { useNavigate } from 'react-router-dom';
const fetchData = async () => {
  const response = await fetch('http://localhost:8081/movie/all-upcoming-movies');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const images = [
  { url: 'https://image.tmdb.org/t/p/original//dB6Krk806zeqd0YNp2ngQ9zXteH.jpg', caption: 'Beautiful scenery', backgroundImage: "https://image.tmdb.org/t/p/original//1X7vow16X7CnCoexXh4H4F2yDJv.jpg" },
  { url: 'https://image.tmdb.org/t/p/original//exNtEY8QUuQh9e23wSQjkPxKIU3.jpg', caption: 'City skyline', backgroundImage: "https://image.tmdb.org/t/p/original//fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg" },
  { url: 'https://image.tmdb.org/t/p/original//xCGGKmAXqVZIHYNT1e1FEUlvu1R.jpg', caption: 'Nature landscape', backgroundImage: "https://image.tmdb.org/t/p/original//4Y5OWAb4kNRcTM3SHu2JuNivoR3.jpg" },
  { url: 'https://image.tmdb.org/t/p/original//xCGGKmAXqVZIHYNT1e1FEUlvu1R.jpg', caption: 'Nature landscape', backgroundImage: "https://image.tmdb.org/t/p/original//4Y5OWAb4kNRcTM3SHu2JuNivoR3.jpg" },
  { url: 'https://image.tmdb.org/t/p/original//xCGGKmAXqVZIHYNT1e1FEUlvu1R.jpg', caption: 'Nature landscape', backgroundImage: "https://image.tmdb.org/t/p/original//4Y5OWAb4kNRcTM3SHu2JuNivoR3.jpg" },
  { url: 'https://image.tmdb.org/t/p/original//xCGGKmAXqVZIHYNT1e1FEUlvu1R.jpg', caption: 'Nature landscape', backgroundImage: "https://image.tmdb.org/t/p/original//4Y5OWAb4kNRcTM3SHu2JuNivoR3.jpg" },
  { url: 'https://image.tmdb.org/t/p/original//xCGGKmAXqVZIHYNT1e1FEUlvu1R.jpg', caption: 'Nature landscape', backgroundImage: "https://image.tmdb.org/t/p/original//4Y5OWAb4kNRcTM3SHu2JuNivoR3.jpg" },
  { url: 'https://image.tmdb.org/t/p/original//xCGGKmAXqVZIHYNT1e1FEUlvu1R.jpg', caption: 'Nature landscape', backgroundImage: "https://image.tmdb.org/t/p/original//4Y5OWAb4kNRcTM3SHu2JuNivoR3.jpg" },
  { url: 'https://image.tmdb.org/t/p/original//xCGGKmAXqVZIHYNT1e1FEUlvu1R.jpg', caption: 'Nature landscape', backgroundImage: "https://image.tmdb.org/t/p/original//4Y5OWAb4kNRcTM3SHu2JuNivoR3.jpg" },

];

const UpcomingList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate=useNavigate()
  const { data, error, isLoading } = useQuery('myData', fetchData);
  const handleImageClick = (index,id) => {
    navigate(`/movieDetails/${id}`)
    setActiveIndex(index);

  };

  return (
    <div className=' py-10 px-3 grid grid-flow-col overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden'>
      {
        isLoading?
        <div className='flex items-center justify-center h-full'>
       <Loader size={35}/>
        </div>:(
        <div className='flex items-center flex-row'>
          {data?.upcomingMovies?.map((item, index) => (
        <div
         
          className={`w-[240px] cursor-pointer  mx-3 my-2 `}
          key={index}
          onClick={() => handleImageClick(index,item._id)}
        >
          <UpcomingDetails item={item} index={index} activeIndex={activeIndex}/>
        </div>
      ))}
        </div>
        )
      }
      
    </div>
  );
};

export default UpcomingList;
