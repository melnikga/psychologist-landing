import logo from '@/images/эмблема лого.svg'
import Image from 'next/image'

export default function Logo() {
  return (
    <>
      <div className="text-9xl flex justify-center items-center font-extrabold">
        <span>S</span>
        <span className="mx-2">
          <Image src={logo} className='w-32 h-32' alt=''/>

        </span>
        <span>UL</span>
      </div>
      <span className="block font-light text-2xl mt-2 tracking-[20px]">WAVE</span>
    </>

  )
}