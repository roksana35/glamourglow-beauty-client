import { motion } from "framer-motion"
import { BsTelephone } from "react-icons/bs";

const Slider = () => {
    return (
      // <div className=" min-h-screen bg-base-200">
      <div className="hero-content  flex-col lg:m-5 lg:p-6 lg:flex-row">
        <div className="flex-1 ">
        <motion.img
        initial={{x:-100,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{delay:0.2,
          x:{type:"spring",stiffness:60},
        opacity:{duration:1},
        ease:"easeIn",
        duration:1,
      }}
         src="https://i.ibb.co/2szgnNM/70423.jpg" className=" md:w-[90%] lg:ml-5 rounded-md flex-1 shadow-2xl" />

        </div>
        
        <div className="flex-1">
          <motion.h1
         
          initial={{x:+100,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{delay:0.2,
            x:{type:"spring",stiffness:60},
          opacity:{duration:1},
          ease:"easeIn",
          duration:1,
        }}
           className="text-3xl lg:text-5xl flex-1 font-bold text-gradient bg-gradient-to-r from-pink-600 to-fuchsia-900 text-transparent bg-clip-text ">GlamourGlow Beauty</motion.h1>
          <motion.p
          initial={{x:+100,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{delay:0.2,
            x:{type:"spring",stiffness:60},
          opacity:{duration:1},
          ease:"easeIn",
          duration:1,
        }}

           className="py-6">Grooming is more than just an outward presentation; it's a holistic practice embodying  self-respect, attention to detail, and personal refinement. It's the art of  nurturing oneself, both physically and mentally, to radiate confidence and poise. </motion.p>
          <motion.button
          initial={{x:+100,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{delay:0.2,
            x:{type:"spring",stiffness:60},
          opacity:{duration:1},
          ease:"easeIn",
          duration:1,
        }}
           className="btn btn-primary mb-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-2 px-4">Request to callback</motion.button>
          <p className="font-bold flex gap-2"><BsTelephone  className=" text-2xl text-fuchsia-700"/>(+998)97858628</p>
          <motion.p
          initial={{x:+100,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{delay:0.2,
            x:{type:"spring",stiffness:60},
          opacity:{duration:1},
          ease:"easeIn",
          duration:1,
        }} 
          className="lg:ml-5">call for enqiry</motion.p>
          
        </div>
      </div>
    // </div>
            
            
  

    );
};

export default Slider;