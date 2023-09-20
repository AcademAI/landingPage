import Tilt from "react-parallax-tilt";
import React, { useContext } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { globe } from "../assets";
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
  link,
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

          {link && (
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(link, "_blank")}
                className='menu-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  draggable='false'
                  src={globe}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          )}
        </div>

        <div className='mt-5'>
          <h3 className='text-black font-bold text-[24px]'>{name[language === "RU" ? 0 : 1]}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description[language === "RU" ? 0 : 1]}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="green-pink-gradient text-black bg-blue-100  text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
            {repos[0].name[language === "RU" ? 0 : 1]}
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

const Projects = () => {
  const { language } = useContext(LanguageContext);
  return (

    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{language === "RU" ? "Экосистема" : "Ecosystem"}</p>
        <h2 className={`${styles.sectionHeadText}`}>{language === "RU" ? "Наши проекты" : "Our projects"}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {language === "RU"
            ? "Ниже представлены карточки наших проектов. Каждый проект нуждается в заинтересованных людях, готовых помочь нам их развивать, запускать и масштабировать ."
            : "Below are the cards of our projects. Each project needs interested people to help them grow, launch, and scale."}
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

export default SectionWrapper(Projects, "projects");
