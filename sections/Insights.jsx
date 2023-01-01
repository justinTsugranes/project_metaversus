'use client'

import { motion } from 'framer-motion'

import styles from '../styles'
import { insights } from '../constants'
import { InsightCard, TitleText, TypingText } from '../components'
import { staggerContainer } from '../utils/motion'

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText
        title="Insights about the metaverse"
        textStyles="text-center"
      />
    </motion.div>
  </section>
)

export default Insights
