import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div>
      <h1 className='flex-center h-[100vh]'>
        Hello gsap scroll trigger
      </h1>
    </div>
  )
}

export default App