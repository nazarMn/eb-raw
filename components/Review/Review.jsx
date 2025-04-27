import React, { useRef, useState, useEffect } from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Image from 'next/image';

export default function Review() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('http://localhost:5000/api/reviews');
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    }

    fetchReviews();
  }, []);

  return (
    <div className='w-full h-[627px] flex flex-col justify-center items-center bg-white px-4 sm:px-8 py-8'>
      <header className="w-full flex flex-col justify-center items-center gap-6 mb-8 text-center">
        <h2 className='text-black font-semibold text-2xl sm:text-3xl'>
          What Say Our Regular Customer
        </h2>

        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="hidden sm:block sm:w-1/4"></div>

          <div className="w-full sm:w-2/4 text-center">
            <p className='text-black text-sm sm:text-base'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
              <br className="hidden sm:block" /> 
              alteration in some form, by injected humour
            </p>
          </div>

          <div className="flex gap-4 justify-center sm:w-1/4 mt-4 sm:mt-0">
            <div ref={prevRef} className="relative w-10 h-10 flex items-center justify-center bg-white border border-[#023047] cursor-pointer overflow-hidden group ">
              <FontAwesomeIcon icon={faChevronLeft} size="sm" color="#023047" className="relative z-10 transition-all duration-300 group-hover:text-white"/>
              <span className="absolute inset-0 bg-[#023047] scale-0 group-hover:scale-150 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-full"></span>
            </div>

            <div ref={nextRef} className="relative w-10 h-10 flex items-center justify-center bg-white border border-[#023047] cursor-pointer overflow-hidden group ">
              <FontAwesomeIcon icon={faChevronRight} size="sm" color="#023047" className="relative z-10 transition-all duration-300 group-hover:text-white"/>
              <span className="absolute inset-0 bg-[#023047] scale-0 group-hover:scale-150 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-full"></span>
            </div>
          </div>
        </div>
      </header>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView='auto'
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="w-full"
        id='BoxReview'
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id} id='review' className="flex justify-center py-8">
            <div className="w-[270px] min-h-[220px] flex flex-col justify-center items-center border border-gray-300 gap-3 p-4 shadow-md">
              
              <div className='w-full flex justify-center items-center'>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    value={review.rating}
                    precision={0.5}
                    readOnly
                    sx={{
                      color: '#023047',
                      fontSize: '18px',
                      '& .MuiRating-iconEmpty': {
                        color: '#cfd8dc',
                      },
                    }}
                  />
                </Stack>
              </div>

              <div className='w-full flex justify-center items-center text-center'>
                <h2 className="text-black text-sm leading-6">
                  {review.comment}
                </h2>
              </div>

              <div className='w-full flex justify-center items-center mt-4'>
                <div className="flex items-center gap-4">
                  <Image
                    src={review.imageUrl}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-[40px] h-[40px]"
                  />
                  <h3 className="text-black text-sm">{review.name}</h3>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
