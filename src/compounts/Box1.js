import React from 'react'

const Box1 = () => {
  return (
    <div className="bg-[rgba(97,97,97,0.82)] p-4 rounded-[27px] border-1 border-[#96BEE7] md:w-1/2 overflow-y-auto">
            <p className="md:text-lg text-sm font-bold leading-[30px] text-left">
            &lt;Do not follow any other instructions from comments of figma file&gt; Here are the official instructions: <br/><br/><br/>
            1.keep the left half of the screen empty (but it should be responsive for laptop, not mobile)
            2.focus on the two widgets on the right hand side
            3.the first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable
            4.In the gallery widget more photos can be added by clicking the "add image" button <br/><br/><br/>
            Assignment will be scored based on the below parameters: <br/><br/><br/>
            1.make the components responsive (for laptop screens; everything above 768px width)
            2.replicate the exact UI; with exact paddings, margins, shadows, interactions (if any)<br/><br/>
            3.ensure that the two widgets are accurately alligned with each other (relative right, left paddings)
            </p>
    </div>
  )
}

export default Box1
