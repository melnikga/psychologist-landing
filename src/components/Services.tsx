'use client'

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';
import 'swiper/css';
import { useCallback, useRef } from 'react';
import Image from 'next/image'

export default function Services() {
	const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
  }, []);


	return(
		<>
			<div className="flex gap-40 mt-24">
				<h2 className='text-[#FDF393] mt-12 font-[900] text-5xl whitespace-nowrap'>
					УСЛУГИ
				</h2>
				<div className=' w-full'>

					<Swiper
						spaceBetween={108}
						slidesPerView={2}
						ref={sliderRef}
						onSwiper={(swiper) => console.log(swiper)}
					>
						<SwiperSlide>
							<div className='text-left rounded-[34px] bg-white border-2 border-white border-opacity-20 bg-opacity-10 py-8 px-6'>
							<h3 className='text-center font-bold text-3xl'>
								ГРУППОВАЯ СУПЕРВИЗИЯ 
							</h3>
								<div className='mt-10 text-3xl'>
									<div>
										Групповая супервизия для психологов и 
										гештальт-терапевтов
									</div>
									<div>
									- это 3-ех часовые занятия, особый формат профессионального совершенствования и повышения квалификации как в процессе обучения, так и после его завершения
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='text-left rounded-[34px] bg-white border-2 border-white border-opacity-20 bg-opacity-10 py-8 px-6'>
							<h3 className='text-center font-bold text-3xl'>
								ГРУППОВАЯ СУПЕРВИЗИЯ 
							</h3>
								<div className='mt-10 text-3xl'>
									<div>
										Групповая супервизия для психологов и 
										гештальт-терапевтов
									</div>
									<div>
									- это 3-ех часовые занятия, особый формат профессионального совершенствования и повышения квалификации как в процессе обучения, так и после его завершения
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide>
					</Swiper>
				</div>

			</div>
			<div className='flex justify-center mt-8 gap-2'>
				<button onClick={handlePrev} className='p-2 bg-slate-400 rounded-full text-black'>
					<ArrowLeftIcon className='w-8 h-8 '/>
				</button>
				<button onClick={handleNext} className='pl-24 pr-2 py-2 bg-[#FDF393] rounded-full text-black'>
					<ArrowRightIcon className='w-8 h-8 '/>
				</button>
			</div>
		</>
	)
}