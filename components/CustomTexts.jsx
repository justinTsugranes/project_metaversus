'use client'

// Import the motion component from the 'framer-motion' module
import { motion } from 'framer-motion'

// Import textContainer and textVariant2 constants from the '../utils/motion' module
import { textContainer, textVariant2 } from '../utils/motion'

// Declare the TypingText component
export const TypingText = ({ title, textStyles }) => (
  // Render a paragraph element with the specified variants and class names
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {/* Map over the characters in the title prop and render a span element for each */}
    {Array.from(title).map((letter, index) => (
      // Render a span element with the specified variants and key
      <motion.span variants={textVariant2} key={index}>
        {/* Render a non-breaking space character if the letter is a space, otherwise render the letter */}
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
)

// Declare the TitleText component
export const TitleText = ({ title, textStyles }) => (
  // Render a h2 element with the specified variants, initial state, and class names
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {/* Render the title prop */}
    {title}
  </motion.h2>
)
