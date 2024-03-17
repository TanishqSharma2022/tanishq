"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const path = usePathname()

  return (
    <div>
      
      <nav className="flex items-center justify-between">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-200 to-blue-600 rounded-xl   group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative  bg-white ring-1 shadow-lg shadow-blue-500 ring-gray-900/5 rounded-xl leading-none flex items-top justify-start space-x-6">
              <Link href={'/'}><img className="h-[60px] p-2 " src="/memo.png" /></Link>
            </div>
          </div>
          <ul className="flex items-center font-sfregular justify-center gap-2">
            <Link className={`${path == '/about' ? "text-sky-400" : "text-zinc-700 dark:text-white"}`} href={'/about'}><li>About</li></Link>
            <Link className={`${path == '/projects' ? "text-sky-400" : "text-zinc-700 dark:text-white"}`} href={'/projects'}><li>Projects</li></Link>
            <Link className={`${path == '/blogs' ? "text-sky-400" : "text-zinc-700 dark:text-white"}`} href={'/blogs'}><li>Blogs</li></Link>
            <Link className={`${path == '/contact' ? "text-sky-400" : "text-zinc-700 dark:text-white"}`} href={'/contact'}><li>Contact</li></Link>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
