import React, { useState } from 'react';
import data from "../data";
import githubIcon from "../assets/githubicon.png";

const Projects = () => {
  //eslint-disable-next-line
  const [items, setItems] = useState(data);

  return (
    <>
      <section className="py-20 px-5 bg-green-800 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 
      h-screen lg:pt-32">
        {items.map((items) => {
          const { id, path, desc } = items
          return (
            <div key={id}>
              <img src={path} alt={desc} className="p-s bg-green-500 rounded" />
              <small className="block text-center text-white font-semibold text-lg">
                {desc}
              </small>
              <a className="portfolio"
            href="https://github.com/dmcmichae1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="img-thumbnail m-2 rounded"
              src={githubIcon}
              alt="GitHub Icon"
            />
          </a>
            </div>
          )
        })}
      </section>
    </>
  
  )
}

export default Projects
