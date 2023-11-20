import Spline from "@splinetool/react-spline";
import { styles } from "../styles";
import { motion } from "framer-motion";

function SplineMain() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
      <div class="spline-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <Spline
          className="min-w-full min-h-full absolute object-cover"
          scene="https://prod.spline.design/uQTJU-zWEyzEtNzX/scene.splinecode"
        />
      </div>
      <div className="spline-content space-y-2 z-10">
        <div
          className="absolute left-0 top-3/4 transform -translate-y-1/4"
          style={{ paddingLeft: "110px" }}
        >
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 text-shine-blaze`}
            style={{
              "@media (max-width: 768px)": {
                fontSize: "1rem", // Adjust the font size as needed
              },
            }}
          >
            I develop 3D visuals, user interfaces and web apps.
          </p>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          {/* <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
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
          </div> */}
        </a>
      </div>
    </section>
  );
}

export default SplineMain;
