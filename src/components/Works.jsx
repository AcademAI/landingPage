import Tilt from "react-parallax-tilt";
import React, { useContext } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { LanguageContext } from "../LanguageContext";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  repos,
  image,
  source_code_link,
}) => {

  const { language } = useContext(LanguageContext);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-primary p-5 rounded-2xl sm:w-[360px] w-full shadow-card'
      >
        <div className='relative w-full h-[230px]'>
          <img
            draggable='false'
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          {source_code_link && (
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  draggable='false'
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          )}
        </div>

        <div className='mt-5'>
          <h3 className='text-black font-bold text-[24px]'>{name[language === "RU" ? 0: 1]}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description[language === "RU" ? 0: 1]}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="green-pink-gradient text-white bg-blue-100  text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
            
            {repos[0].name[language === "RU" ? 0: 1]}
          </span>
          <span className="green-pink-gradient text-white bg-blue-100  text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
            {repos[1].name[language === "RU" ? 0: 1]}
          </span>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { language } = useContext(LanguageContext);
  return (
    
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{language === "RU" ? "Места в команде" : "Jobs"}</p>
        <h2 className={`${styles.sectionHeadText}`}>{language === "RU" ? "Проекты" : "Projects"}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {language === "RU" 
          ? "Следующие проекты демонстрируют над чем мы сейчас работаем и какой стек используется. Все перечисленные ниже проекты нуждаются в заинтересованных людях, готовых помочь нам их развивать & запускать." 
          : "The following projects showcase what we are currently working on and what stack is being used. All of the projects listed below need interested people who are ready to help us develop & deliver them."}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
