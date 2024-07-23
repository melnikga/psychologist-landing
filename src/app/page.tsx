import BackgroundEffects from '@/components/BackgroundEffects'
import GradientBlob from '@/components/GradientBlob'
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import frame1 from '../images/Frame 1 (2).png'
import frame2 from '../images/Frame 3.png'
import frame3 from '../images/Frame 4 (1).png'
import Static from '@/components/Static'
import Image from 'next/image'
import { Container } from '@/components/Container'
import About from '@/components/About'
import Services from '@/components/Services'
import CurrentPosts from '@/components/CurrentPosts'
import Reviews from '@/components/Reviews'
import Links from '@/components/Links'
export default function Home() {
  return (
    <div className="min-h-screen bg-[#271E3D] text-white">
      {/* <GradientBlob /> */}
      <Head>
        <title>Soul Wave</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <section className="container mx-auto px-4 relative overflow-hidden">
      {/* <Image
        className="absolute top-0 left-0 "
        src={frame1}
        alt=""
        unoptimized
        /> */}
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
      {/* <Image
        className="absolute top-0 left-0 "
        src={frame2}
        alt=""
        unoptimized
        /> */}
        <Container className="relative pt-20 text-center lg:pt-24">
            <Static/>
            <About/>
        </Container>
      </section>
      <section className="container mx-auto px-4 relative overflow-hidden">
      {/* <Image
        className="absolute top-0 left-0 "
        src={frame3}
        alt=""
        unoptimized
        /> */}
        <Container className="relative pb-16 pt-20 text-center lg:pt-24">
          <Services/>
        </Container>
      </section>
      <section className="mx-auto px-4 relative overflow-hidden">
        <Container className="relative pb-16 pt-20 text-center lg:pt-24">
          <CurrentPosts/>
        </Container>
      </section>
      <section className="mx-auto px-4 relative overflow-hidden">
        <Container className="relative pb-16 pt-20 text-center lg:pt-24">
          <Reviews/>
        </Container>
      </section>
      <section className="mx-auto px-4 relative overflow-hidden">
        <Container className="relative pb-16 pt-20 text-center lg:pt-24">
          <Links/>
        </Container>
      </section>

    </div>
  )
}