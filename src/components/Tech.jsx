import React, { useContext } from "react";

import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { LanguageContext } from "../LanguageContext";

const Tech = () => {

  const { language } = useContext(LanguageContext);
  const icons = Object.values(technologies).map((technology) => technology.icon);

  return (
    <>
    <motion.div variants={textVariant()}>

      <p className={styles.sectionSubText}>
          {language === "RU" ? "Партнеры" : "Partners"}
        </p>
        <h2 className={styles.sectionHeadText}>
          {language === "RU" ? "С кем мы сотрудничаем" : "Who we cooperate with"}
        </h2>
      </motion.div>

    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <div className='w-full h-[75vh] mx-auto'>
        <BallCanvas icons={icons} />
      </div>
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");