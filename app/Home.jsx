import React from 'react'
import { AtSign, Github, Instagram } from 'lucide-react'
const Home = () => {
  return (
    <div>
      <div className="flex items-center mt-6 justify-center flex-col">
          <div className="mt-12 flex items-center justify-center">
            <h1 className="font-sans font-bold text-6xl bg-gradient-to-br  from-cyan-200 to-blue-600 bg-clip-text text-transparent ">
              Hi, I'm Tanishq
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
          <p className="mt-4 font-sfmedium text-xl">
            I'm a full-stack developer and a tech enthusiast.
          </p>
        </div>
        <div className="mt-12 ">
          <div className="w-full flex flex-col-reverse md:flex-row  justify-between gap-12">
            <div className="w-full font-sfregular">
              <p>
              Skilled in a fair share of Web Technologies, sipping tea with a side of silence. My interests span across various domains, from Computer Science and Mathematics to Philosophy. Spot me on campus, lost in my own world with earphones firmly plugged in.🎧 Currently, I'm delving into the realms of Data Science and ML-related technologies.
              </p>
              <div className="flex mt-6 items-center justify-between">
                <a href='/cv.pdf'>
              <div className="relative w-fit hover:drop-shadow-lg transition-all cursor-pointer">
                <div className="absolute -inset-[0.2px] rounded-xl bg-gradient-to-tr from-blue-700 to-blue-400 blur-[5px]  opacity-[0.6] "></div>
                <div className="relative flex px-4 py-2 items-center justify-center rounded-xl text-black hover:bg-gradient-to-r hover:from-sky-300 hover:to-blue-400 hover:text-white transition-all border border-blue-300 bg-white dark:bg-zinc-700 dark:text-white">
                  My Resùme
                </div>
              </div>
              </a>
              <div className='flex items-end gap-2'>
              <Instagram />
              <Github />
              <AtSign />
              </div>  
              <div>

              </div>
              </div>
            </div>
            <div className="grid grid-flow-col grid-rows-2 mx-auto w-full gap-4">
              <img src='/mine/3.jpeg' className=" object-cover shadow-lg object-center h-full  rounded-lg  aspect-square row-span-2" />
              <img src='/mine/5.jpeg' className=" object-cover shadow-lg object-center h-32  aspect-square rounded-lg " />
              <img src='/mine/14.jpeg' className="object-cover shadow-lg  object-center h-32  aspect-square rounded-lg " />
            </div>
          </div>
        </div>

    </div>
  )
}

export default Home
