import React from 'react'
import { words } from '../constants/index.js'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'

const Hero = () => {
  return (
    <section id="hero" className='relative overflow-hidden'>
        <div className='absolute top-0 left-0z-10'>
    <img src="/images/bg.png" alt="background" />
      </div>

      <div className='hero-layout'>
        {/* { left side hero content} */}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
           <div className='flex flex-col gap-7'>
            <div className="hero-text">
                <h1>Shaping 
                    <span className='slide'>
                        <span className='wrapper'>
                            {words.map((word) => (
                                <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                    <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'/>
                                    <span className='text-white-50'>{word.text}</span>
                                </span>
                            ))}
                        </span>

                    </span>
                </h1>
                <h1>into Real Projects</h1>
                <h1> that Deliver Results</h1>
            </div>
            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none' >
                 Hi, I'm Thilak, a Software Engineer based in United States <br/> with a passion for code and building products.
            </p>
            <Button className='md:w-80 md:h-16 w-60 h-12' id='button' text='See My Work'> 
            </Button>
           </div>
        </header>

        {/* { right side 3D Model} */}
        <figure>    
            <div className='hero-3d-layout'>
                <HeroExperience />
            </div>
        </figure>
      </div>
    </section>
  )
}

export default Hero
