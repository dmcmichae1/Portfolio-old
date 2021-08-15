import React from 'react'
import { Link } from 'react-router-dom';
import Typed from 'react-typed'


const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay flex flex-col items-center justify-center text-white px-5">
          <h1 className="text-5xl font-bold text-right mb-10 lg:text-center lg:text-7xl lg:px-56">
            I am a <span className='translate-y-10 opacity-0 transform transition duration-6000 ease-in-out text-green-500'>
              <Typed
                strings={['web developer', 'full stack MERN', 'software engineer', 'mobile developer']}
                typeSpeed={40}
                backSpeed={60}
                loop
              /> </span>
          </h1>

          <div className="ml-auto lg:ml-0">
            <Link to="/aboutme" className="mr-5 bg-green-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800">About Me</Link>

            <Link to="/projects" className="mr-5 bg-white text-green-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800 hover:text-white">Projects</Link>
          </div>

        </div>
      </section>
    </>
  )
}

export default Showcase
