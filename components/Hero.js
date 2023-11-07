'use client'
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import animationData from '../public/lottie/coder.json';
import { useRef } from 'react';
import { styles } from './styles/styles';


export const Hero = () => {
    const codeRef = useRef(null);
    return (
        <section className='relative w-full h-screen mx-auto'>
            {/* <div className='sm:px-16 px-6 absolute inset-0 top-[120px] mx-w-7xl mx-auto flex flex-row items-center justify-around gap-16'> */}
            <div className={`${styles.paddingX} absolute inset-0 mx-w-7xl mx-auto flex sm:flex-row flex-col items-center justify-center gap-16`}>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-primary'>Aron</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-accent`}>
                        I am a senior at NJIT <br className='sm:block hidden' />
                        majoring in Computer Science.
                    </p>
                </div>
                <Lottie onComplete={() => {
                    codeRef.current?.goToAndPlay(30, true);
                }} lottieRef={codeRef} animationData={animationData} loop={false}
                className='sm:h-[540px] h-[400px] object-contain'
                />
            </div>
        </section>
    )
}
