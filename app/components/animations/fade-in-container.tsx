import type { FadeInContainerProps } from '@/types/animations'
import { motion } from 'framer-motion'

export default function FadeInContainer({ children, delay = 0.2 }: FadeInContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}
