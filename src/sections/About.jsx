import React from 'react'
//import Card from '../components/Cart'
import { Globe } from '../components/Globe'

import ButtonEmail from '../components/ButtonEmail'
import { Framerwork } from '../components/Framerwork'

const About = () => {
    return (
        <section className='c-space section-space'>
            <div className='max-w-[1500px] mx-auto'>
                <h2 className='text-heading'>About Me</h2>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
                    <div className='grid-default-color grid-1'>
                        <img src="/assets/coding-pov.png" className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]' alt="" />
                        <div className='relative z-10'>
                            <p className='headtext'>Hi, I'm Marcio Vinicius</p>
                            <p className='subtext'>  I'm a full stack developer with 3 years of experience building both backend and
                                frontend. I care about clean code, great user experience, and delivering products
                                that are fast, reliable, and built to last.</p>
                        </div>

                    </div>
                    {
                    }
                    <div className='grid-black-color grid-2'>

                        <div className='flex items-center justify-center w-full h-full'>
                            <p className='flex items-center text-5xl text-gray-500'>CODE IS CRAFT</p>
                            {/*<Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="Vini" />*/}
                        </div>

                    </div>
                    <div className='grid-default-color grid-3'>
                        <div className='z-10 w-[50%]'>
                            <p className='headtext'>Time zone</p>
                            <p className='subtext'>I live in Brazil, specifically in the Northeast. Oxi</p>
                        </div>

                        <figure className='absolute left-[30%] top-[10%]'>
                            <Globe />
                        </figure>

                    </div>

                    <div className='grid-special-color grid-4'>
                        <div className='flex flex-col items-center justify-center gap-4 size-full'>
                            <p className='text-center headtext'>
                                Have a project idea? Get in touch!
                            </p>
                            <ButtonEmail />
                        </div>
                    </div>
                    <div className='grid-default-color grid-5'>
                        <div className='z-10 w-[50%]'>
                            <p className='headtext'>My Stack</p>
                            <p className='subtext'>I program in a bit of everything, but I create secure, high-quality programs.</p>
                        </div>
                        <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
                            <Framerwork />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About