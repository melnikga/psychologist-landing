import lyambda from '../images/СПЕРМАТОЗОИДЫ.svg'
import Image from 'next/image'

export default function BackgroundEffects() {
  return (
<div className='absolute top-72'>
  <Image src={lyambda} className='w-full' alt="" />
</div>
  )
}