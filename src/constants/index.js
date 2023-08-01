import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,

    neurengine,
    qr,
    academya,

    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";


  
  export const navLinks = [
    {
      id: "about",
      title: ["О нас", "About"]
    },
    {
      id: "product",
      title: ["Продукты", "Products"]
    },
    {
      id: "contact",
      title: ["Связаться", "Contact"]
    },
  ];
  
  const services = [
    {
      title: ["Софт с LLM", "LLM apps"],
      icon: web,
    },
    {
      title: ["Бэкэнд сервисы", "Backend services"],
      icon: backend,
    },
    {
      title: ["Веб приложения", "Web apps"],
      icon: mobile,
    },
    {
      title: ["IT Курсы", "IT Courses"],
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const products = [
    {
      title: ["Нейродвижок", "Neurengine"],
      status: ["MVP v0.1.0","MVP v0.1.0"],
      icon: neurengine,
      iconBg: "#000000",
      model: ["Freemium","Freemium"],
      points: [
        ["Работает на основе ChatGPT.","Runs on ChatGPT."],
        ["Помнит контекст, генерирует изображения и отвечает на голосовые сообщения.","Remembers context, generates images and responds to voice messages."],
        ["Поддерживает API вызовы к другим сервисам через вызов функций.", "Supports API calls to other services via function calling."],
        ["Поддерживает AutoGPT режим.", "Supports AutoGPT mode."],
        ["Имеет удобный интерфейс в виде Telegram бота.", "Has a convenient interface in the form of Telegram bot."],
      ],
    },
    {
      title: ["Учет товаров по QR кодам", "Goods record by QR codes"],
      status: ["MVP v0.1.0","MVP v0.1.0"],
      icon: qr,
      iconBg: "#000000",
      model: ["Транзакционная","Transaction"],
      points: [
        ["Генерирует новые QR-коды для маркировки товаров и контейнеров.", "Generates new QR codes for goods and containers labeling."],
        ["Хранит содержимое контейнеров и описание изделий в базе данных.","Stores the contents of containers and product descriptions in the database."],
        ["Определяет содержимое контейнера на основании распознанной маркировки.", "Determines the contents of the container based on the recognized markings."],
        ["Определяет принадлежность изделия конкретному контейнеру по его характеристикам.", "Determines whether the product belongs to a specific container according to its characteristics."],
        ["Имеет удобный интерфейс в виде мобильного приложения под iOS и Android.", "Has a convenient interface in the form of a mobile application for iOS and Android."],
        ["Есть API. Работает с Нейродвижком.", "Has API. Works with Neurengine."],
      ],
    },
    {
      title: ["АкадемИИя", "AcademYA"],
      status: ["Прототип", "Prototype"],
      icon: academya,
      iconBg: "#fff",
      model: ["EdTech Маркетплейс","EdTech Marketplace"],
      points: [
        ["Позволяет создавать и размещать свои курсы.","Allows to create and place your own courses."],
        ["Позволяет самостоятельно управлять ценой курсов.","Allows to controle the price of the courses."],
        ["Оставляет права на контент за вами.", "Reserves the rights to the content for you."],
        ["Есть API. Позволяет учиться вместе с Нейродвижком.", "Has API. Allows to study with Neurengine."],
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, products, testimonials, projects };