import React, { useContext } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { products } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { LanguageContext } from "../LanguageContext";

const ProductCard = ({ product }) => {
  const { language } = useContext(LanguageContext);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ffffff",
        color: "#232631",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #56ccf2" }}
      date={`${language === "RU" ? "Бизнес-модель" : "Business model"}: ${product.model[language === "RU" ? 0: 1]}`}
      iconStyle={{ background: product.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={product.icon}
            alt={product.status}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-black text-[24px] font-bold'>{product.title[language === "RU" ? 0: 1]}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >{language === "RU" ? "Статус" : "Status"}:&nbsp;
          {product.status[language === "RU" ? 0: 1]}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {product.points.map((point, index) => (
          <li
            key={`product-point-${index}`}
            className='text-black-100 text-[14px] pl-1 tracking-wider'
          >
            {point[language === "RU" ? 0: 1]}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Products = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <motion.div variants={textVariant()}>

      <p className={styles.sectionSubText}>
          {language === "RU" ? "Экосистема" : "Ecosystem"}
        </p>
        <h2 className={styles.sectionHeadText}>
          {language === "RU" ? "Наши продукты" : "Our products"}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#56ccf2">
          {products.map((product, index) => (
            <ProductCard 
            key={index} 
            product={product}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Products, "product")