import Spline from '@splinetool/react-spline';
import {styles} from "../styles";
import { motion } from "framer-motion";



function SplineMain() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
    <div class="spline-docker absolute top-0 left-0 w-full h-full overflow-hidden">
         <Spline className="min-w-full min-h-full absolute object-cover" scene="https://prod.spline.design/6ESXSrf9yta1Jy4K/scene.splinecode" />
    </div>
    <div className="spline-content space-y-2 z-10">
        <h1 className={`${styles.heroHeadText} text-white flex align-center`}>
            Hi, I'm <span className='text-[#e80560] pl-20'><br />Anish</span>
          </h1>
          <div className='absolute left-0 top-3/4 transform -translate-y-1/4' style={{ paddingLeft: '110px' }}
>
<p className={`${styles.heroSubText} mt-2 text-white-100 md:text-left text-shine-blaze`}>
    I develop 3D visuals, user 
    interfaces and web apps.
</p>
          </div>
          
    </div>
    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
</section>

    
  );
}


export default SplineMain;


