'use client'
import elena from '../images/elena.png'
import maria from '../images/maria.png'
import pavel from '../images/pavel.png'
import Image from 'next/image'
import stars from '../images/стар 2.png'

export default function Reviews() {
	const reviewers = [
		{
			image: elena,
			name: "Елена",
			text: "Три года в стиле «гештальт»— для меня это как жизнь до и после и кто уже не может быть прежним, чему я безумно рада! И я не только знаю чего Я Хочу, я теперь МОГУ! Если хотите оставаться и признавать болоте, не то что вы выбираете гештальт! Ну а кому в болоте хорошо..."
		},
		{
			image: pavel,
			name: "Павел",
			text: "Участие в данном проекте дало мне возможность взглянуть на себя новым, не сразу понятным мне взглядом, но очень интересным. И продолжаю участвовать в мастер классах, в программе интенсива, в окружающем людьми, к этому миру только начал присоединяться уже невозможно"
		},
		{
			image: maria,
			name: "Мария",
			text: "Тренеры, подача материала, практика - все на высоком уровне. Такой формат обучения, совершенствования своих знаний, на мой взгляд, гораздо лучше, чем академические скучные лекции. А еще, это комьюнити, где есть единомышленники. Люди, с которыми говоришь на одном языке - это очень ценно!"
		}
	];

	return(
		<>
			<h2 className='mt-12 text-center font-[900] text-5xl whitespace-nowrap'>
				ОТЗЫВЫ
			</h2>
			<div className='flex mt-32 justify-center gap-12'>
				{reviewers.map(reviewer => (
				<div key={reviewer.name} className='flex flex-col gap-5'>
					<div className='w-56 h-56 overflow-hidden mx-auto'>
						<Image className='w-full h-full rounded-full object-cover' src={reviewer.image} alt=''/>
					</div>
					<div>
						{reviewer.name}
					</div>
					<div className='mx-auto'>
						<Image className='mx-auto' src={stars} alt=''/>
					</div>
					<div>
						{reviewer.text}
					</div>
				</div>
				))}

			</div>
		</>
	)
}