import React, { useContext } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { members } from "../constants";
import { LanguageContext } from "../LanguageContext";

const TeamCard = ({ index, description, name, role, image, link }) => {
  const { language } = useContext(LanguageContext);

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="blue-gradient p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <div className="mt-1">
        <div className="mt-1 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-black font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>{" "}
              <a href={`https://t.me/${name[language === "RU" ? 0 : 1]}`}>
                {name[language === "RU" ? 0 : 1]}
              </a>
            </p>
            <p className="mt-1 text-secondary text-[12px]">{role}</p>
          </div>
          <div className="">
            {link ? (
              <div className="">
                <div onClick={() => window.open(link, "_blank")} className="">
                  <img
                    draggable="false"
                    src={image}
                    alt={`feedback_by-${name}`}
                    className="w-20 h-20 rounded-full object-cover cursor-pointer"
                  />
                </div>
              </div>
            ) : (
              <div className="">
                <img
                  draggable="false"
                  src={image}
                  alt={`feedback_by-${name}`}
                  className="w-20 h-20 rounded-full object-cover cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>
        <p className="text-black tracking-wider text-[18px]">
          {description[language === "RU" ? 0 : 1]}
        </p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className={`mt-12 rounded-[20px]`}>
      <div className={`rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            {language === "RU" ? "Роли участников" : "Roles of members"}
          </p>
          <h2 className={styles.sectionHeadText}>
            {language === "RU" ? "Команда" : "Team"}
          </h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {members.map((member, index) => (
          <TeamCard key={member.name} index={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Team, "team");
