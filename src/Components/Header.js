import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="flex justify-between py-1 px-5 absolute w-full text-white">
        <div className="logo">
          <h2 className="text-3xl lg:text-5xl">
            <Link to="/">Devin McMichael</Link></h2>
        </div>

        <nav>
          <ul className="flex">
            <li className='mr-5'>
              <Link to="/">Home</Link>
            </li>
            <li className='mr-5'>
              <Link to="/projects">Projects</Link>
            </li>
            <li className='mr-5'>
              <Link to="/aboutme">About Me</Link>
            </li>
            <li className='mr-5'>
              <Link to="/skills">Skills</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
