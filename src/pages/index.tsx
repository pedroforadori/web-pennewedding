import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import abelImg from '../../public/assets/aerea.jpeg'

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="max-sm:p-2">
          <div className="text-white text-9xl flex flex-col justify-center items-center w-full">
            <motion.p 
              className="w-2/5 flex justify-center text-justify uppercase"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
            >
              Tanne 
            </motion.p> 
            <motion.p 
              className="w-2/5 text-5xl max-sm:w-full flex justify-center uppercase"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
            >
              & 
            </motion.p> 
            <motion.p 
              className="w-2/5 flex justify-center  text-justify uppercase tracking-widest ml-5"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
            >
              Pedro 
            </motion.p> 
          </div>
        </div>
      </div>

    </div>
   
  )
}
