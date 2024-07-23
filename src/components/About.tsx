'use client'

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';
import 'swiper/css';
import { useCallback, useRef } from 'react';
import Image from 'next/image'

export default function About() {
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
					О НАС
				</h2>
				<div className=' w-[50%]'>
					<h3 className='text-left font-bold text-3xl'>
						Добро пожаловать в сообщество Soul Wave!  
					</h3>
					<Swiper
						spaceBetween={1}
						slidesPerView={1}
						ref={sliderRef}
						onSwiper={(swiper) => console.log(swiper)}
					>
						<SwiperSlide>
							<div className='text-left'>
								<div className='mt-10 text-3xl'>
									<div>
									Наша цель - помочь вам найти внутреннюю гармонию и стабильность с помощью других людей в суете современного мира. Мы верим, что каждый человек способен обрести свой Soul Wave - свой уникальный путь к счастью и благополучию благодаря другим людям
									</div>
									<div>
									Присоединяйтесь к нам, чтобы вместе открывать новые горизонты в себе и вокруг себя!
									</div>
								</div>
							</div>

						</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide>
					</Swiper>
				</div>
				<div className='flex self-end gap-2'>
					<button onClick={handlePrev} className='p-2 bg-slate-400 rounded-full text-black'>
						<ArrowLeftIcon className='w-8 h-8 '/>
					</button>
					<button onClick={handleNext} className='pl-24 pr-2 py-2 bg-[#FDF393] rounded-full text-black'>
						<ArrowRightIcon className='w-8 h-8 '/>
					</button>
				</div>
			</div>
		</>
	)
}