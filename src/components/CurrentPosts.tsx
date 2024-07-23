'use client'

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';
import 'swiper/css';
import { useCallback, useRef } from 'react';
import SliderPic1 from '../images/slider-pic1.png'
import Image from 'next/image'

export default function CurrentPosts() {
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
		
			<h2 className='font-[900] text-left text-4xl mb-8'>
				АКТУАЛЬНЫЕ <br/>
				<span className='text-[#FDF393]'>ПОСТЫ ИЗ БЛОГА</span>
			</h2>
			<div className="p-12 rounded-3xl flex">
				<div className='w-full'>
					<Swiper
						spaceBetween={30}
						slidesPerView={1.5}
						ref={sliderRef}
					>
						<SwiperSlide>
							<div className='flex gap-8 min-w-6xl'>
								<div className='w-1/2 h-80 overflow-hidden'>
									<Image src={SliderPic1} alt='' className='h-full w-full object-cover rounded-3xl'/>
								</div>
								<div className='w-1/2 text-left text-lg'>
									<p className='mb-4'>Радоваться, что любимый человек может быть счастлив с другими людьми, порой бывает непросто.</p>
									<p>Многим тяжело смириться с мыслью, что близкий друг или возлюбленный испытывает положительные эмоции при взаимодействии с другим кругом общения. Но что если все-таки можно научиться радоваться за счастье другого человека?</p>
									<a href="#" className='text-[#FDF393] mt-4 inline-block'>Читать далее...</a>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='flex gap-8 min-w-6xl'>
								<div className='w-1/2 h-80 overflow-hidden'>
									<Image src={SliderPic1} alt='' className='h-full w-full object-cover rounded-3xl'/>
								</div>
								<div className='w-1/2 text-left text-lg'>
									<p className='mb-4'>Радоваться, что любимый человек может быть счастлив с другими людьми, порой бывает непросто.</p>
									<p>Многим тяжело смириться с мыслью, что близкий друг или возлюбленный испытывает положительные эмоции при взаимодействии с другим кругом общения. Но что если все-таки можно научиться радоваться за счастье другого человека?</p>
									<a href="#" className='text-[#FDF393] mt-4 inline-block'>Читать далее...</a>
								</div>
							</div>
						</SwiperSlide>
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