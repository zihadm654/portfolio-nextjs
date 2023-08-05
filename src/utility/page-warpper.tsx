"use client"
import {motion} from 'framer-motion'
import { cn } from './utils'


export const PageWrapper =({children,className}:{children:React.ReactNode, className?:string})=>(

  <motion.div
  initial={{opacity:0, y:20}}
  animate={{opacity:1, y:0}}
  exit={{opacity:0, y:20}}
  className={cn('min-h-screenHeightWithoutHeader', className)}
  >
    {children}
  </motion.div>

  )