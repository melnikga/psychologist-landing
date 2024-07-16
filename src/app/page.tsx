import BackgroundEffects from '@/components/BackgroundEffects'
import GradientBlob from '@/components/GradientBlob'
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import frame1 from '../images/Frame 1 (2).png'
import frame2 from '../images/Frame 3.svg'
import Static from '@/components/Static'
import Image from 'next/image'
import { Container } from '@/components/Container'
export default function Home() {
  return (
    <div className="min-h-screen bg-[#271E3D] text-white">
      {/* <div className='absolute top-0 left-0 z-0'>
        <Image src={frame1} className='w-[100vh] h-[100vh] ' alt=''/>
        <Image src={frame2} className='w-[100vh] h-[100vh] ' alt=''/>
      </div> */}
      
      {/* <GradientBlob /> */}
      <Head>
        <title>Soul Wave</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <section className="container mx-auto px-4 relative overflow-hidden">
      <Image
        className="absolute top-0 left-0 "
        src={frame1}
        alt=""
        unoptimized
        />
      {/* <BackgroundEffects /> */}
        <div className='relative p-20'>
        <Navbar />
        </div>
        <Container className="relative pb-16 pt-20 text-center lg:pt-32">
        
          <div className="">
            <Logo />
            <button className="mt-32 px-14 py-4 rounded-full border border-white bg-white text-black tracking-[10px]">
              ЗАПИСАТЬСЯ
            </button>
          </div>

        </Container>
      </section>
      <section className="container mx-auto px-4 relative overflow-hidden">
      <Image
        className="absolute top-0 left-0 "
        src={frame2}
        alt=""
        unoptimized
        />
        <Container className="relative pb-16 pt-20 text-center lg:pt-32">
            <Static/>
        </Container>
      </section>

    </div>
  )
}