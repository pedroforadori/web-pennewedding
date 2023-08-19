import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import abelImg from '../../public/assets/aerea.jpeg'
import { useState } from 'react'

export default function Home() {
  const [days, setDays] = useState<String>()

  var date1 = new Date();
  var date2 = new Date("2023-08-19T12:01:04.753Z");
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

  useState(()=>{
    //setDays(diffDays.toString() === "1" ? "Falta 1 dia" : "Faltam " +  diffDays.toString() + " dias")
  })

  return (
    <div>
      <div className="flex justify-center items-center overflow-hidden h-[90vh] max-sm:mt-32 max-sm:items-start">
        <div className="max-sm:p-2">
          <div className="text-white text-9xl flex flex-col items-center justify-center max-sm:text-5xl max-sm:text-wedding-500">
            <motion.p 
              className="w-2/5 flex justify-center text-justify uppercase"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
            >
              Tanne 
            </motion.p> 
            <motion.p 
              className="w-2/5 text-5xl max-sm:w-full flex justify-center uppercase max-sm:text-4xl"
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
            <motion.p 
              className="w-auto text-5xl max-sm:w-full flex justify-center max-sm:text-xl mt-5 font-aerotis"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
            > 
              É HOJE!!!
            </motion.p> 
          </div>
        </div>
      </div>

    </div>
   
  )
}
