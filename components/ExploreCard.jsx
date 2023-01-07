'use client'

// Import the motion component from the 'framer-motion' module
import { motion } from 'framer-motion'

// Import the styles object and fadeIn constant from the '../styles' and '../utils/motion' modules, respectively
import styles from '../styles'
import { fadeIn } from '../utils/motion'

// Declare the ExploreCard component
const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  // Render a div element with the specified variants and class names
  <motion.div
    // Apply the specified fadeIn animation with the given parameters
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      // Conditionally apply a different set of flex values based on the active prop
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    // Set the onClick event handler to the handleClick prop function
    onClick={() => handleClick(id)}
  >
    {/* Render an img element with the specified src, alt, and class names */}
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {/* Conditionally render either a h3 element or a div element based on the active prop */}
    {active !== id ? (
      // {/* Render a h3 element with the specified class names */}
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {/* Render the title prop */}
        {title}
      </h3>
    ) : (
      // {/* Render a div element with the specified class names */}
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        {/* Render a div element with the specified class names */}
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism  mb-[16px]`}
        >
          {/* Render an img element with the specified src, alt, and class names */}
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        {/* Render a paragraph element with the specified class names */}
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
          Enter The Metaverse
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
)

export default ExploreCard
