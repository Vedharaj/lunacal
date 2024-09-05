import React, {useState, useRef} from 'react'
import boxs from '../assests/boxs.svg'
import question from '../assests/question.svg'
import image1 from '../assests/image.png'

const Box3 = () => {

  const [image, setImage] = useState([]);
  const scrollContainerRef = useRef(null);

  const haddleGetImage = (e)=>{
    setImage([URL.createObjectURL(e.target.files[0]), ...image]);
  }
  
  const handleButtonClick = ()=>{
    document.getElementById("fileInput").click()
  }

  const UserImage = ()=>{
      return image.map((i,k)=>
      <img src={image[k]} key={i} alt="sample" className='rounded-[24px] max-w-[190px] min-h-[169px] object-cover'/>)
  }

  const handleLeftScroll = ()=>{
    if(scrollContainerRef.current){
      scrollContainerRef.current.scrollLeft -= 50
    }
  }
  
  const handleRightScroll = ()=>{
    if(scrollContainerRef.current){
      scrollContainerRef.current.scrollLeft += 50
    }
  }

  return (
    <div>
      <div className="flex flex-col justify-between items-center gap-5">
        <div className='w-3/4 h-1 rounded-lg bg-gradient-to-r from-[rgba(40, 40, 40, 0.1)] to-[rgba(248, 248, 248, 0.1)] shadow-[0px_4px_4px_rgba(0,0,0,.33)]'></div>
        <div className='w-full py-4 px-10 bg-[rgb(54,60,67)] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_rgba(0,0,0,0.4)] relative'>
          <img src={boxs} alt="icon" className="absolute top-1/2 left-2" />
          <img src={question} alt="icon" className="absolute top-4 left-2" />
          <div className="flex sm:justify-between lg:justify-between flex-wrap min-[768px]:justify-center justify-center">
            <div className="lg:px-10 lg:py-4 sm:py-4 px-6 py-2 bg-[#171717] shadow-[0px_4px_10px_2px_rgba(0,0,0,.25)] rounded-[20px]">
              <p className="font-poppions text-xm md:text-xl text-bold">Gallery</p>
            </div>
            <div className="flex gap-5 items-center sm:mt-0 lg:mt-0 mt-4">
              <button onClick={handleButtonClick} className='bg-[rgba(255,255,255,.03)] md:px-6 md:py-3 px-4 py-2 rounded-[102px] font-bold text-nowrap sm:text-sm
                shadow-[inset_0px_3.26px_3.26px_#FFFFFF26,inset_0px_0px_48.91px_#FFFFFF0D,9px_10px_7.1px_#00000066,-0.5px_-0.5px_6.9px_#FFFFFF40]'>
                + ADD IMAGE
              </button>
              <input type='file'className='hidden' accept="image/jpeg, image/png" id="fileInput" onChange={haddleGetImage} />
              <button onClick={handleLeftScroll} className='bg-gradient-to-b from-[#303439] to-[#161718] p-4 rounded-full shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]'>
              <svg width="25" height="25" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.40222 8.37645H15.5967" stroke="#6F787C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.40222 15.3765L1.40222 8.37646L8.40222 1.37646" stroke="#6F787C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>  
              <button onClick={handleRightScroll} className='bg-gradient-to-b from-[#303439] to-[#161718] p-4 rounded-full shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]'>
                <svg width="25" height="25" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5968 8.37648L1.40236 8.37648" stroke="#6F787C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.5968 1.37646L15.5968 8.37646L8.5968 15.3765" stroke="#6F787C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>  
            </div>
          </div>
          <div className="flex mt-5 gap-5 overflow-x-auto justify-center w-full" ref={scrollContainerRef}>
            {image && <UserImage />}
            <img src={image1} alt="sample" className='rounded-[24px] max-w-[190px] min-h-[169px] object-cover'/>
            <img src={image1} alt="sample" className='rounded-[24px] max-w-[190px] min-h-[169px] object-cover'/>
          </div>
        </div>
        <div className='w-3/4 h-1 rounded-lg bg-gradient-to-r from-[rgba(40, 40, 40, 0.1)] to-[rgba(248, 248, 248, 0.1)] shadow-[0px_4px_4px_rgba(0,0,0,.33)]'></div>
      </div>
    </div>
  )
}

export default Box3
