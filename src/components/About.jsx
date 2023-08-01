import React, { useContext } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { LanguageContext } from "../LanguageContext";

const ServiceCard = ({ index, title, icon }) => {
  const { language } = useContext(LanguageContext);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            sacle: 1,
            speed: 450,
          }}
          className="bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-secondary text-[20px] font-bold text-center">
            {title[language === "RU" ? 0: 1]}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {language === "RU" ? "Введение" : "Introduction"}
        </p>
        <h2 className={styles.sectionHeadText}>
          {language === "RU" ? "О команде" : "Overview"}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {language === "RU"
          ? "Мы — команда разработчиков, специализирующихся на LLM, разработке бэкэнд сервисов и приложений React. Имея большой опыт работы с Python и JavaScript, мы преуспеваем в создании надежных и масштабируемых решений с использованием различных фреймворков и библиотек. В свободное время мы упаковываем наши знания в курсы."
          : "We are a team of skilled software developers specializing in LLMs, backend services development, and React applications. With extensive experience in Python and JavaScript, we excel in creating robust and scalable solutions using different frameworks and libraries. In our spare time we pack our knowledge into courses."}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");


