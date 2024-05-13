import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:m-5 md:p-5 ">
      <motion.div
      initial={{x:-100,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{delay:0.4,
        x:{type:"spring",stiffness:60},
      opacity:{duration:1},
      ease:"easeIn",
      duration:1,
    }}
       className="w-full lg:w-1/2 flex-col md:flex-row gap-4 ">
        <h2 className="text-xl md:text-3xl font-lato font-extrabold text-[#5d297a]">
          Who We Are
        </h2>
        <p className=" text-base leading-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore totam
          assumenda aperiam, commodi atque explicabo placeat quaerat nam
          accusantium in aliquid ducimus dolor nihil temporibus vero? Assumenda
          necessitatibus nemo magni. Hic facilis in dolorum impedit!
        </p>
        <div>
          <button className="btn btn-secondary">Read More</button>
        </div>
      </motion.div>
      <motion.div
      initial={{x:100,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{delay:0.4,
        x:{type:"spring",stiffness:60},
      opacity:{duration:1},
      ease:"easeIn",
      duration:1,
    }}
       className="relative  w-full lg:w-1/2 flex-col md:flex-row gap-4 justify-center items-center">
        <div className="flex gap-3 mx-auto">
        <div className="md:absolute left-0 rounded-md top-10 p-1 md:p-2 border-2 shadow-md border-red-600">
          <p className="text-2xl font-extrabold font-lato bg-gradient-to-r from-orange-800 to-purple-800 text-transparent bg-clip-text ">5+</p>
          <p className="text-2xl font-extrabold font-lato bg-gradient-to-r from-orange-800 to-purple-800 text-transparent bg-clip-text ">year of <br />experience</p>
        </div>
        {/* two */}
        <div className="md:absolute top-0 left-44 p-3 rounded-md border-2 border-red-600">
          <p className="text-2xl font-extrabold font-lato bg-gradient-to-r from-orange-800 to-purple-800 text-transparent bg-clip-text ">75+</p>
          <p className="text-2xl font-extrabold font-lato bg-gradient-to-r from-orange-800 to-purple-800 text-transparent bg-clip-text ">Successful <br />Project</p>
        </div>

        </div>
        {/* one */}
        
        {/* three */}
        <div className="sm:mx-auto">
        <div className="md:absolute top-36 left-44 w-[150px] rounded-md border-2 p-2 border-red-600">
          <p className="text-2xl font-extrabold font-lato bg-gradient-to-r from-orange-800 to-purple-800 text-transparent bg-clip-text ">200+</p>
          <p className="text-2xl font-extrabold font-lato bg-gradient-to-r from-orange-800 to-purple-800 text-transparent bg-clip-text ">Happy <br /> Client</p>
        </div>

        </div>
        
      </motion.div>
    </div>
  );
};

export default About;

