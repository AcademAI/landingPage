import React, { useContext } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { roadmapitems } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { LanguageContext } from "../LanguageContext";

const RoadmapCard = ({ roadmapItem }) => {
  const { language } = useContext(LanguageContext);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ffffff",
        color: "#232631",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #56ccf2" }}
      date={roadmapItem.title[language === "RU" ? 0: 1]}
      // date={`${language === "RU" ? "Кварталы" : "Quarters"}: ${roadmapItem.model}`}
      iconStyle={{ background: roadmapItem.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={roadmapItem.icon}
            alt={roadmapItem.year}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-black text-[24px] font-bold'>{language === "RU" ? "Год" : "Year"}: {roadmapItem.year.join(" - ")} </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >{language === "RU" ? "Кварталы" : "Quarters"}:&nbsp;
          {roadmapItem.quarters.join(", ")}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {roadmapItem.points.map((point, index) => (
          <li
            key={`roadmapItem-point-${index}`}
            className='text-black-100 text-[14px] pl-1 tracking-wider'
          >
            {point[language === "RU" ? 0: 1]}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Roadmap = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <motion.div variants={textVariant()}>

      <p className={styles.sectionSubText}>
          {language === "RU" ? "Наши планы" : "Our plans"}
        </p>
        <h2 className={styles.sectionHeadText}>
          {language === "RU" ? "Дорожная карта" : "Roadmap"}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#56ccf2">
          {roadmapitems.map((roadmapItem, index) => (
            <RoadmapCard 
            key={index} 
            roadmapItem={roadmapItem}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Roadmap, "roadmap")