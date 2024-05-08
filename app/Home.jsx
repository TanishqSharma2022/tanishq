"use client" 
import React from 'react'
import { AtSign, Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


const imageLoader = ({ src, width, quality }) => {
  return 'https://images.unsplash.com/photo-1649179582970-83da0f31eb53?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  // <div className=" object-cover shadow-lg object-center animate-pulse  rounded-lg   bg-gray-400 row-span-2" ></div>
}


const Home = () => {
  const [loaded, setLoaded] = React.useState(false)

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div>
      <div className="flex items-center mt-6 justify-center flex-col">
          <div className="mt-12 flex items-center justify-center">
            <h1 className="font-sans font-bold text-4xl md:text-6xl bg-gradient-to-br  from-cyan-200 to-blue-600 bg-clip-text text-transparent ">
              Hi, I&apos;m Tanishq
            </h1>
            <picture>
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/270c_1f3fb/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/270c_1f3fb/512.gif"
                alt="✌"
                width="48"
                height="48"
              />
            </picture>
          </div>
          <p className="mt-4 font-sfmedium text-sm md:text-xl">
            I&apos;m a full-stack developer and a tech enthusiast.
          </p>
        </div>
        <div className="mt-6 md:mt-12 ">
          <div className="w-full flex flex-col-reverse md:flex-row  justify-between gap-12">
            <div className="w-full font-sfregular">
              <p className='text-md '>
              Skilled in a fair share of Web Technologies, sipping tea with a side of silence. My interests span across various domains, from Computer Science and Mathematics to Philosophy. Spot me on campus, lost in my own world with earphones firmly plugged in.🎧 Currently, I&apos;m delving into the realms of Data Science and ML-related technologies.
              </p>
              <div className="mt-6 grid grid-cols-2 justify-between">
                <a href='/cv.pdf'>
              <div className="relative w-fit hover:drop-shadow-lg transition-all cursor-pointer drop-shadow-[rgba(0,_0,_0,_0.2)_0px_20px_40px_-7px]">
                <div className="absolute -inset-[0.2px] rounded-xl  blur-[5px]  opacity-[0.5] "></div>
                <div className="relative flex px-4 py-2 items-center justify-center rounded-xl text-black hover:bg-gradient-to-r hover:from-sky-300 hover:to-blue-400 hover:text-white transition-all border-[1px] bg-white dark:bg-zinc-700 dark:text-white">
                  My Resùme
                </div>
              </div>
              </a>
              <div className='flex gap-3 items-center '>
              <Link target="_blank" href={'https://www.instagram.com/itsmetanishq____/'}><Instagram className='hover:scale-110 text-gray-500 hover:text-black' /></Link>
              <Link target="_blank" href={'https://www.github.com/TanishqSharma2022'}><Github className='hover:scale-110 text-gray-500 hover:text-black' /></Link>
              <Link target="_blank" href={'mailto:tanishq22@iiserb.ac.in'}><AtSign className='hover:scale-110 text-gray-500 hover:text-black' /></Link>
              <Link target="_blank" href={'https://www.linkedin.com/in/tanishq-sharma-iiser'}><Linkedin className='hover:scale-110 text-gray-500 hover:text-black' /></Link>
              </div>  
              <div>

              </div>
              </div>
            </div>
            
            <div className="grid grid-flow-col grid-rows-2 mx-auto w-full gap-4 max-w-[400px]">
              <Image  width={200} height={200} alt="image" src='/mine/3.jpeg' className=" object-cover shadow-lg object-center h-full  rounded-lg  aspect-square row-span-2" />
              <Image  width={200} height={200} alt="image" src='/mine/14.jpeg' className="object-cover shadow-lg  object-center h-32  aspect-square rounded-lg " />
              <Image  width={200} height={200} alt="image" src='/mine/5.jpeg' className=" object-cover shadow-lg object-center h-32  aspect-square rounded-lg " />
            </div>
            {/* {!loaded && 
              <div className="grid grid-flow-col grid-rows-2 mx-auto w-full gap-4 max-w-[400px]">
              <div className=" object-cover shadow-lg object-center animate-pulse  rounded-lg   bg-gray-400 row-span-2" ></div>
              <div className=" object-cover shadow-lg object-center animate-pulse  aspect-square bg-gray-400 rounded-lg " ></div>
              <div className="object-cover shadow-lg  object-center animate-pulse  aspect-square bg-gray-400 rounded-lg " ></div>
            </div>
            } */}
          </div>
        </div>

    </div>
  )
}

export default Home

