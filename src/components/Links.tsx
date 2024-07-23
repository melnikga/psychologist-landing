'use client'
import Image from 'next/image'
import avatar from '../images/avatar.png'
import yt from '../images/yt.png'
import inst from '../images/inst.png'
import tg from '../images/tg.png'

export default function Links() {

	return(
		<>
			<h2 className='mt-12 text-center font-[900] text-5xl whitespace-nowrap'>
				Контакты
			</h2>
			<div className='flex mt-32 gap-12 justify-between'>
				<div className='flex'>
					<div className='flex justify-center items-center gap-24'>
						<div className='w-56 h-56 overflow-hidden mx-auto'>
							<Image className='w-full h-full rounded-full object-cover' src={avatar} alt=''/>
						</div>
						<div className='text-left text-3xl'>
							<div>
								Основатель:
							</div>
							<div>
								Артур Гимальдин
							</div>
						</div>
					</div>
				</div>
				<div className='space-y-10 text-left text-4xl'>
					<div className='flex gap-7 justify-end items-center'>
						<div>
							Telegram
						</div>
						<div>
							<Image src={tg} alt='' className='w-14 h-14'/>
						</div>
					</div>
					<div className='flex gap-7 justify-end  items-center'>
						<div>
							Instagram
						</div>
						<div>
							<Image src={inst} alt='' className='w-14 h-14'/>
						</div>
					</div>
					<div className='flex gap-7 justify-end  items-center'>
						<div>
							YouTube
						</div>
						<div>
							<Image src={yt} alt='' className='w-14 h-14'/>
						</div>
					</div>
				</div>


			</div>
		</>
	)
}