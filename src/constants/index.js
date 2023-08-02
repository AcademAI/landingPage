import {
    mobile,
    backend,
    creator,
    web,

    sber,
    progress,
    ugtu,
    amiks,
    bi,

    neurengine,
    qr,
    academya,
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
      name: "Sberbank",
      icon: sber,
    },
    {
      name: "Progress",
      icon: progress,
    },
    {
      name: "Ugtu",
      icon: ugtu,
    },
    {
      name: "Amiks",
      icon: amiks,
    },
    {
      name: "BI",
      icon: bi,
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
      name: ["Нейродвижок", "Neurengine"],
      description: 
      ["Telegram бот на основе ChatGPT. Позволяет генерировать изображения, отвечает на голосовые сообщения, подключена платежная система. Сейчас пробуем внедрять Function Calling от OpenAI через плагины и тестируем AutoGPT версию.",
       "Telegram bot based on ChatGPT. Allows you to generate images, responds to voice messages, a payment system is connected. Currently we're trying to implement OpenAI Function Calling via plugins and testing the AutoGPT version."],
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
        {
          name: "telegram",
          color: "orange-text-gradient",
        },
      ],
      repos: [
        {
          name: ["Приватный Репо","Private Repo"],
        },
        {
          name: ["Очень Активный", "Heavily Active"],
        },
      ],
      image: "https://i.ibb.co/J2rc4GF/Screenshot-4.png",
    },
    {
      name: ["API сервисов", "Services API"],
      description: 
      ["Связующее звено всех сервисов в нашей экосистеме. Один из ключевых компонентов системы позволяющий Нейродвижку обращаться к любому сервису с API.",
       "The connecting link of all services in our ecosystem. One of the key components of the system allows the Neuroengine to access any service with an API."],
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "fastapi",
          color: "green-text-gradient",
        },
      ],
      repos: [
        {
          name: ["Приватный Репо","Private Repo"],
        },
        {
          name: ["Активный", "Active"],
        },
      ],
      image: "https://i.ibb.co/zGcL6R3/API.png",
    },
    {
      name: ["АкадемИИя", "AcademYA"],
      description:
      ["Образовательный маркетплейс нацеленный на пользовательский опыт и интеграцию с Нейродвижком. Сейчас пишем конструктор курсов и API к базе данных.", 
      "Educational marketplace focused on user experience and integration with Neurengine. Now we are writing a course builder and an API for the database."],
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "orange-text-gradient",
        },
      ],
      repos: [
        {
          name: ["Публичный Репо","Public Repo"],
        },
        {
          name: ["Менее Активный", "Less Active"],
        },
      ],
      image: "https://i.ibb.co/NtVM1rp/logo-init.png",
      source_code_link: "https://github.com/AcademAI/ALLM",
    },
    

    //....другие projects схожей структуры
  ];
  
  export { services, technologies, products, testimonials, projects };