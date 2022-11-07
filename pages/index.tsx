import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { BsKeyboard } from 'react-icons/bs';
import { VscHeart } from 'react-icons/vsc';
import { HiOutlineLibrary } from 'react-icons/hi';
import Image from 'next/image';
import headshot from '../public/headshot.jpeg';
import proj1 from '../public/proj-1.png';
import proj3 from '../public/proj-3.png';
import proj4 from '../public/proj-4.png';
import { useState } from "react";

import type { ImageLoaderProps } from 'next/image';


export default function Home() {
  const[darkMode, setDarkMode] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Brandon Hernandez Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 bg-stone-100 dark:bg-zinc-800'>
        <section className="min-h-fit">
          <nav className='pt-5 flex justify-between'>
            <h1 className='text-xl font-mono'></h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} 
                className='cursor-pointer text-xl dark:text-white' 
                />
              </li>
              <li>
                <a className='bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-md ml-8' href="https://docs.google.com/document/d/1U0Jts9zh44vDCr74IKqhhV1GifnimF3264NwkVVJHws/edit" target="_blank" rel="noopener noreferrer">
                  Resume
                  </a>
                </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-amber-600 font-medium md:text-6xl'>Brandon Hernandez</h2>
            <h3 className='text-3xl py-2 md:text-3xl dark:text-white'>Full-Stack Engineer</h3>
            <p className='text-md py-3 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>Personal Trainer turned full-stack software engineer.</p>
          </div>
          <div className='relative mx-auto rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96'>
            <Image src={headshot} alt='headshot' layout="fill" objectFit='cover' />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-center text-3xl py-1 dark:text-white'>More about me</h3>
            <p className='text-md text-center py-2 leading-8 text-gray-80 dark:text-white'>
              <span className="text-amber-500">Queens, NY</span> native with love for all things <span className="text-amber-500">tech</span>, <span className="text-amber-500">fitness</span>, and everywhere in between. 
              Thanks for stopping by! Feel free to reach me through my 
              <span className="text-amber-500"><a href="https://www.linkedin.com/in/brandon-a-hernandez/" target="_blank" rel="noopener noreferrer"> Linkedin</a></span>, 
              always open to connecting and learning from others!
            </p>
          </div>
          <div className='lg:flex gap-10 justify-center'>
            <div className='justify-center text-center shadow-lg p-10 rounded-xl my-10'>
              <BsKeyboard className="mx-auto justify-center align-center text-slate-500 dark:text-amber-200" size={100} />
              <div className="dark:text-white">
              <h3 className='text-2xl py-1'>Languages</h3>
              <p>Javascript</p>
              <p>Python</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Markdown</p>
              </div>
            </div>
            <div className='justify-center text-center shadow-lg p-10 rounded-xl my-10'>
              <HiOutlineLibrary className="mx-auto justify-center align-center text-slate-500 dark:text-amber-200" size={100} />
              <div className="dark:text-white">
              <h3 className='text-2xl py-1'>Libraries and Frameworks</h3>
              <p>Node</p>
              <p>Express</p>
              <p>React</p>
              <p>Django</p>
              <p>Tailwind CSS</p>
              <p>PostgreSQL</p>
              <p>MongoDB</p>
              <p>Materialize CSS</p>
              </div>
            </div>
            <div className='justify-center text-center shadow-lg p-10 rounded-xl my-10'>
              <VscHeart className="mx-auto justify-center align-center text-slate-500 dark:text-amber-200" size={100} />
              <div className="dark:text-white">
              <h3 className='text-2xl py-1'>Interests</h3>
              <p>Up-to-date tech and coding practices </p>
              <p>Front-end web development</p>
              <p>Health and fitness</p>
              <p>Marketing</p>
              <p>Gaming</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
          <h3 className='text-center text-3xl py-1 dark:text-white'>Projects</h3>
            <p className='text-md text-center py-2 leading-8 text-gray-80 dark:text-white'>
            Have a look at my deployed projects below! 
            <span className="text-amber-500"> Click </span>
            on their images to be taken to their deployed sites. Github source code locations are listed beneath each one.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/4 flex-1'>
              <a href="https://project-1-superheroes.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image src={proj1} alt="project" className='rounded-lg object-cover' width={100} height={100} layout="responsive"/>
              </a>
              <h2 className="text-amber-500 text-4xl py-1 text-center">Comic Characters</h2>
                <div className='text-5xl flex justify-center text-gray-600 dark:text-slate-300'>
                  <a href="https://github.com/brandonhernandez304/Project-1-Comic-Characters" target="_blank" rel="noopener noreferrer">< FaGithubSquare /></a>
                </div>
            </div>   
            <div className='basis-1/4 flex-1'>
              <a href="https://vibe-voyage.netlify.app/" target="_blank" rel="noopener noreferrer">
              <Image src={proj3} alt="project" className='rounded-lg object-cover' width={100} height={100} layout="responsive"/>
              </a>
              <h2 className="text-amber-500 text-4xl py-1 text-center">Vibe Voyage</h2>
                <div className='text-5xl flex justify-center text-gray-600 dark:text-slate-300'>
                  <a href="https://github.com/brandonhernandez304/VibeVoyage-frontend" target="_blank" rel="noopener noreferrer">< FaGithubSquare /></a>
                </div>      
            </div>
            <div className='basis-1/4 flex-1'>
              <a href="https://neopets-ga-proj4.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <Image src={proj4} alt="project" className='rounded-lg object-cover' width={100} height={100} layout="responsive"/>
              </a>
              <h2 className="text-amber-500 text-4xl py-1 text-center">Neopets Mockup</h2>
                <div className='text-5xl flex justify-center text-gray-600 dark:text-slate-300'>
                  <a href="https://github.com/brandonhernandez304/neopets_mockup" target="_blank" rel="noopener noreferrer">< FaGithubSquare /></a>
                </div>
            </div>
          </div>
        </section>
        <section>
        <div className="justify-center text-center dark:text-white">
            <h3 className='text-3xl py-1'>Contact Me!</h3>
            <h4>Email:</h4>
            <p>brandonahernandez304@gmail.com</p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-slate-300'>
          <a href="https://www.linkedin.com/in/brandon-a-hernandez/" target="_blank" rel="noopener noreferrer">< AiFillLinkedin /></a>
          <a href="https://github.com/brandonhernandez304" target="_blank" rel="noopener noreferrer">< AiFillGithub /></a>
          </div>
          </div>
        </section>
      </main>
    </div>
  )
}
