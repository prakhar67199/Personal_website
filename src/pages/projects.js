import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import project1 from '../../public/images/Projects/css1.jpeg';
import project2 from '../../public/images/Projects/css2.jpeg'
import project3 from '../../public/images/Projects/css3.jpeg'
import project4 from '../../public/images/Projects/css4.jpeg'
import project5 from '../../public/images/Projects/css5.jpeg'
import project6 from '../../public/images/Projects/css6.jpeg'
import project7 from '../../public/images/Projects/css7.jpeg'
import project8 from '../../public/images/Projects/js1.jpeg'
import project9 from '../../public/images/Projects/js2.jpeg'
import project10 from '../../public/images/Projects/js3.jpeg'
import project11 from '../../public/images/Projects/js4.jpeg'
import project12  from '../../public/images/Projects/js5.jpeg'
import project13 from '../../public/images/Projects/js6.jpeg'
import project14 from '../../public/images/Projects/js7.jpeg'
import Navbar from '@/components/Navbar';
import TransitionEffect from '@/components/TransitionEffect';



const ProjectsData = ({type, title, summary, img, link, github}) => {
    
    return(
        <div className=' mt-10'>
            <article className='flex flex-col items-start justify-center
            rounded-3xl border border-solid border-black dark:border-light bg-transparent shadow-2xl dark:shadow-slate-500'>

                <span className='w-full' target="_blank" >
                    <Image src={img} alt={title} className=' h-[250px] w-full px-4 py-3 rounded-3xl object-cover
                     hover:scale-105  hover:transition-all hover:duration-300 hover:ease-out '/>
                </span>

                <div className='px-4 py-2'>
                    <span className='text-white bg-primary/75 dark:bg-primaryDark/75 p-1 rounded-md  font-semibold'>{type}</span>
                    <span className='mb-2 font-bold text-3xl font- text-black dark:text-light '>
                        <h2 className='mb-3 mt-3' >{title}</h2>
                    </span>

                    <p>{summary}</p>

                    <div className='flex flex-row justify-around gap-5 items-center'>
                        <Link href={github} className='text-4xl ' target="_blank" > <GithubIcon/> </Link>
                        <Link href={link} target="_blank" className='bg-dark  text-white  p-3 
                        rounded-lg hover:bg-white hover:text-black
                        border-2 border-solid border-transparent hover:border-dark
                        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                        hover:dark:border-light
                        font-bold letter tracking-wider'>Visit Project</Link>
                    </div>
                </div>

            </article>
        </div>
    )
}

const projects = () => {

    const [toggle, setToggle] = useState(1);

    function updateToggle(id)
    {
        setToggle(id)
    }
  return (

    <>
        <Head>
            <title>
                Prakhar | Projects Page 
            </title>
            <meta name='description' content='any description'
             />
        </Head>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text= "Imagination Trumps Knowledge! "/>


                <ul className='mt-6 flex flex-row items-center  justify-evenly curser-pointer border border-gray-500  rounded-full list-none'>
                    <li className='inline-block w-1/4 h-full p-2 text-center hover:bg-gray-700/75 text-dark dark:text-light hover:text-white font-semibold tracking-wider hover:cursor-pointer border-r-2 border-r-gray-500/75 rounded-s-full' onClick={() => updateToggle(1)} >HTML + CSS</li>
                    <li className='inline-block w-1/4 h-full p-2 text-center hover:bg-gray-700/75 text-dark dark:text-light hover:text-white font-semibold tracking-wider hover:cursor-pointer border-r-2 border-r-gray-500/75 ' onClick={() => updateToggle(2)} >JavaScript</li>
                    <li className='inline-block w-1/4 h-full p-2 text-center hover:bg-gray-700/75 text-dark dark:text-light hover:text-white font-semibold tracking-wider hover:cursor-pointer border-r-2 border-r-gray-500/75' onClick={() => updateToggle(3)} >ReactJs</li>
                    <li className='inline-block w-1/4 h-full p-2 text-center hover:bg-gray-700/75 text-dark dark:text-light hover:text-white font-semibold tracking-wider hover:cursor-pointer rounded-e-full' onClick={() => updateToggle(4)} >Full stack</li>
                </ul>


                <div className='grid grid-cols-3 gap-5'>

                    <div className={toggle === 1 ?'block':'hidden'}>
                        <ProjectsData
                            title="Parllel-X Website"
                            img={project1}
                            link="https://gregarious-smakager-f62499.netlify.app/"
                            github="https://github.com/prakhar67199/parllel-X-wesite"
                            type="HTML + CSS"
                        />
                    </div>

                    <div className={toggle === 1 ?'block':'hidden'}>
                        <ProjectsData
                            title="Razor_pay Clone"
                            img={project2}
                            link="https://majestic-alpaca-ab7ada.netlify.app/"
                            github="https://github.com/prakhar67199/Razorpay_clone"
                            type="HTML + CSS + Tailwind CSS"
                        />
                    </div>

                    <div className={toggle === 1 ?'block':'hidden'}>
                        <ProjectsData
                            title="Discord UI Clone"
                            img={project3}
                            link="https://keen-pothos-c4f98c.netlify.app/"
                            github="https://github.com/prakhar67199/discord_clone"
                            type="HTML + CSS + Tailwind CSS"
                        />
                    </div>

                    <div className={toggle === 1 ?'block':'hidden'}>
                        <ProjectsData
                            title="MY Gallery"
                            img={project4}
                            link="https://image-gallery-project-mcylyfty7-prakhar67199.vercel.app/"
                            github="https://github.com/prakhar67199/image_gallery_project"
                            type="HTML + CSS"
                        />
                    </div>

                    <div className={toggle === 1 ?'block':'hidden'}>
                        <ProjectsData
                            title="Modern Chair"
                            img={project5}
                            link="https://modern-chair-delta.vercel.app/"
                            github="https://github.com/prakhar67199/modern-chair"
                            type="HTML + CSS"
                        />
                    </div>
                    <div className={toggle === 1 ?'block':'hidden'}>
                        <ProjectsData
                            title="Online Web UI"
                            img={project6}
                            link="https://whimsical-gecko-087830.netlify.app/"
                            github="https://github.com/prakhar67199/Usability-website_clone"
                            type="HTML + CSS"
                        />
                    </div>

                    <div className={toggle === 1 ?'block':'hidden'}>
                        <ProjectsData
                            title="E-Restaurants UI"
                            img={project7}
                            link="https://chipper-kheer-f88de1.netlify.app/"
                            github="https://github.com/prakhar67199/restrorent-website"
                            type="HTML + CSS + JS"
                        />
                    </div>
                    <div className={toggle === 2 ?'block':'hidden'}>
                        <ProjectsData
                            title="Clock"
                            img={project8}
                            link="https://clock-project-nine.vercel.app/"
                            github="https://github.com/prakhar67199/clock-project"
                            type="HTML + CSS + JS"
                        />
                    </div>
                    <div className={toggle === 2 ?'block':'hidden'}>
                        <ProjectsData
                            title="Calculator"
                            img={project9}
                            link="https://simple-calculater-fawn.vercel.app/"
                            github="https://github.com/prakhar67199/simple-calculater"
                            type="HTML + CSS + JS"
                        />
                    </div>
                    <div className={toggle === 2 ?'block':'hidden'}>
                        <ProjectsData
                            title="Portfolio"
                            img={project10}
                            link="https://funny-squirrel-9b27ce.netlify.app/"
                            github="https://github.com/prakhar67199/personal_portfolio"
                            type="HTML + CSS + JS"
                        />
                    </div>
                    <div className={toggle === 2 ?'block':'hidden'}>
                        <ProjectsData
                            title="Git Repo-Finder"
                            img={project11}
                            link="https://lively-kangaroo-ed86e5.netlify.app"
                            github="https://github.com/prakhar67199/github-repo-finder-api-js-project"
                            type="HTML + CSS + JS"
                        />
                    </div>
                    <div className={toggle === 2 ?'block':'hidden'}>
                        <ProjectsData
                            title="Weather API"
                            img={project12}
                            link="https://phenomenal-lamington-3fe91c.netlify.app"
                            github="https://github.com/prakhar67199/weather-api-ui"
                            type="HTML + CSS + JS"
                        />
                    </div>
                    <div className={toggle === 2 ?'block':'hidden'}>
                        <ProjectsData
                            title="Random Password Generator"
                            img={project13}
                            link="https://wondrous-starlight-8f21f3.netlify.app"
                            github="https://github.com/prakhar67199/random_password_generator"
                            type="HTML + CSS + JS"
                        />
                    </div>
                    <div className={toggle === 2 ?'block':'hidden'}>
                        <ProjectsData
                            title="Tic-tac-toe"
                            img={project14}
                            link="https://gleeful-puffpuff-fa754a.netlify.app"
                            github="https://github.com/prakhar67199/tic-tac-toe-game"
                            type="HTML + CSS + JS"
                        />
                    </div>

                    <div className={toggle === 3 ?'block':'hidden'}>
                        <ProjectsData
                            title="Tic-tac-toe"
                            img={project14}
                            link="https://gleeful-puffpuff-fa754a.netlify.app"
                            github="https://github.com/prakhar67199/Razorpay_clone"
                            type="HTML + CSS + JS"
                        />
                    </div>

                    <div className={toggle === 4 ?'block':'hidden'}>
                        <ProjectsData
                            title="Tic-tac-toe"
                            img={project14}
                            link="https://gleeful-puffpuff-fa754a.netlify.app"
                            github="https://github.com/prakhar67199/Razorpay_clone"
                            type="HTML + CSS + JS"
                        />
                    </div>
                    
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects;