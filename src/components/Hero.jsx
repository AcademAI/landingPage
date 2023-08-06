//import "./intro.css"
import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#56ccf2]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-black lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] lg:leading-[98px] mt-2 text-black`}>
            {language === "RU" 
            ? "Привет, мы " 
            : "Hey, it's "}
            <span className="text-[#56ccf2]">
            {language === "RU" 
            ? "АкадемИИя" 
            : "AcademYA"}
            </span>
          </h1>
          <p className={`${styles.heroSubText} font-medium lg:text-[30px] sm:text-[26px] xs:_ext-[20px] text-[16px] lg:leading-[40px] mt-2 text-black`}>
            {language === "RU"
              ? "Мы разрабатываем курсы "
              : "We're developing courses "}
            <br className="sm:block hidden" />
            {language === "RU" 
              ? "и приложения" 
              : "and software"}
          </p>
        </div>
      </div>
      
      <ComputersCanvas/>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
    
  );
};

export default Hero;
