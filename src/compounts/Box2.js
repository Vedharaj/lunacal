import React, { useState } from 'react'
import boxs from '../assests/boxs.svg'
import question from '../assests/question.svg'

const Box2 = () => {
  const [activeTab, setActiveTab] = useState("Experiences")
  return (
    <div className='max-w-1/2 py-4 px-10 h-1/2 bg-[rgb(54,60,67)] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_rgba(0,0,0,0.4)] relative'>
      <img src={boxs} alt="icon" className="absolute top-1/2 left-2" />
      <img src={question} alt="icon" className="absolute top-4 left-2" />
      <div className="flex flex-row bg-[#171717] p-1 rounded-[23px] justify-around overflow-x-auto no-scrollbar
          shadow-[inset_0px_4.96px_12.4px_2.48px_rgba(0,0,0,0.25)] md:text-[16px] text-sm">
        <button onClick={()=>setActiveTab("About Me")} 
          className={`md:px-8 md:py-4 py-2 text-nowrap transition ease-out duration-200 hover:text-white  text-[#A3ADB2] ${activeTab==="About Me" && "active-tab"}`}>About Me</button>
        <button onClick={()=>setActiveTab("Experiences")} 
          className={`md:px-8 md:py-4 transition ease-out duration-200 hover:text-white text-[#A3ADB2] ${activeTab==="Experiences" && "active-tab"}`}>Experiences</button>
        <button onClick={()=>setActiveTab("Recommended")} 
          className={`md:px-8 md:py-4 transition ease-out duration-200 hover:text-white text-[#A3ADB2] ${activeTab==="Recommended" && "active-tab"}`}>Recommended</button>
      </div>
      <div className='overflow-y-auto h-44 mt-4'>
        <p className="text-[#969696] font-['Plus_Jakarta_Sans'] text-xl font-normal leading-[25.2px] text-left">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. <br/><br/>
          I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella.
          Both of them are just starting school, so my calender is usually blocked between 9-10 AM.
        </p>
      </div>
    </div>
  )
}

export default Box2
