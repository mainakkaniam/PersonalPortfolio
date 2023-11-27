import React from 'react'
import { arrow } from "../assets/icons";
import { Link } from 'react-router-dom';

const HomeInfo = ({ currentStage }) => {
  if(currentStage===1)
  return (
    <h1 className="sm:text-xl sm:leading-snug  text-white bg-black px-3 py-2 text-center rounded-lg neo-brutalism-green">
      <p>Hi! I am <span className="font-bold">Mainak Mukherjee</span></p>
      <p>I am  a software engineer from India</p>
    </h1>
    )
  if(currentStage ===2)
  return (
    <div className="info neo-brutalism-green text-center text-white px-4 pb-9 pt-2 flex flex-col">
      <h1 className="flex flex-col gap-1">
        <p>I have worked on a lot of MERN projects.</p>
        <p>I also have a little bit of ML knowledge.</p>
      </h1>
      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    )
  if(currentStage===3)
  return (
    <div className="info neo-brutalism-green text-center text-white px-4 pb-9 pt-2 flex flex-col">
    <h1>
      Curious about my projects?
    </h1>
    <Link to='projects' className='neo-brutalism-white neo-btn'>
      Visit my Portfolio!
      <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
    </Link>
      </div>
  )
    if (currentStage == 4)
    return (
      <div className="info neo-brutalism-green text-center text-white px-4 pb-9 pt-2 flex flex-col">
      <h1 className="flex flex-col gap-1">
        <p>Looking for a dev?</p>
        <p>I am just a few keystrokes away!</p>
      </h1>
      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Lets Talk!
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
        </div>
    )
}

export default HomeInfo