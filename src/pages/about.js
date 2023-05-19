import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useRef, useEffect} from 'react'
import personal from '../../public/images/profile/personal-photograph.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';



const AnimatedNumbers = ({value})  => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once:true});


    useEffect(() => {
      if(isInView)
      {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue])


    useEffect(() => {
      springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value)
        {
            ref.current.textContent = latest.toFixed(0); 
        }
      })
    
    }, [springValue , value])
    


    

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>
                Prakhar | About Page 
            </title>
            <meta name='description' content='any description'
             />
        </Head>
        <TransitionEffect/>
        <main className='flex w-full flex-col items-center justify-center dark:text-light '>

           <Layout className='pt-16'>
           
           {/* main heading */}
           <AnimatedText text="Passion Fuels Purpose!" className='mb-16'/>


           {/* biography */}
           <div className='grid w-full grid-cols-8 gap-16'>

           {/* left part */}
            <div className='col-span-3 flex flex-col items-start justify-start '>
                <h2 className='mb-4  test-lg font-bold uppercase text-dark/75 dark:text-light/75 '>BIOGRAPHY</h2>
                <p className='font-medium '>
                Hi, I'm Prakhar Chandra Gupta, a Full Stack  web developer in MERN Stack 
                and UI/UX designer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. With 06 months of experience in the field. I 
                am always looking for new and innovative ways to bring my clients' 
                visions to life.
                </p>

                <p className=' my-4 font-medium '>
                   I believe that design & development is about more than just making things look pretty – 
                   it's about solving problems and creating intuitive, enjoyable experiences for users.
                </p>

                <p className='font-medium '>
                 Whether I'm working on a website, mobile app, or other digital product, I bring my commitment 
                 to design excellence and user-centered thinking to every project I work on. I look forward to 
                 the opportunity to bring my skills and passion to your next project.
                </p>
            </div>


            {/* center image */}
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>

            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                <Image src={personal} alt='main-picture' className='w-full h-auto rounded-2xl' loading={"lazy"}/>
            </div>
            
            {/* right data */}
            <div className='col-span-2 flex flex-col items-end justify-between' >

                <div className='flex flex-col items-end justify-center '>
                    <span className='inline-block text-7xl font-bold '>
                        <AnimatedNumbers value={6} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light '>Month Experience</h2>
                </div>

                <div className='flex flex-col items-end justify-center '>
                    <span  className='inline-block text-7xl font-bold '>
                    <AnimatedNumbers value={20}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>Completed Projects</h2>
                </div>

                <div className='flex flex-col items-end justify-center '>
                    <span  className='inline-block text-7xl font-bold '>
                    {/* <AnimatedNumbers value={10}/>+ */}
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light'>Companies Worked</h2>
                </div>
            </div>

           </div>

           {/* skills section */}
           <Skills/>
           <Services/>
           <Education/>
           </Layout>
            
        </main>
    </>
  )
}

export default about; 