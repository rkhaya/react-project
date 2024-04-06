import {CONTACT} from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 0.5}}
        
        className="my-10 text-center text-4xl">Get in Touch! </motion.h2>
        <div className="text-center tracking-tighter">
        <a href="mailto:raven@ravenkhaya.com" className="border-b text-3xl hover:bg-black">Email Me</a>
        </div>
        </div>
  )
}

export default Contact