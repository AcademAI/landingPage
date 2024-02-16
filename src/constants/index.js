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
  q1,
  q2,
  q3,
  tech,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: ["О нас", "About"],
  },
  {
    id: "projects",
    title: ["Проекты", "Projects"],
  },
  {
    id: "roadmap",
    title: ["Дорожная карта", "Roadmap"],
  },
  {
    id: "contact",
    title: ["Связаться", "Contact"],
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
    title: ["Курсы", "Courses"],
    icon: creator,
  },
];

const partners = [
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
  {
    name: "Technopark",
    icon: tech,
  },
];

const roadmapitems = [
  {
    title: ["Краткосрочные цели", "Short-term goals"],
    year: ["2023"],
    icon: q1,
    iconBg: "#fff",
    quarters: ["Q3", "Q4"],
    points: [
      [
        "Пройти 10 спринтов в акселераторе. Научиться дизайну мышления и заполнить дневник проекта. Создать презентацию Elevator Pitch.",
        "Pass 10 accelerator sprints. Learn to design thinking and fill out the project diary. Create an Elevator Pitch presentation.",
      ],
      [
        "Выложить на доске MIRO всю информацию по экосистеме, бизнесмодели, рынку и т.д.",
        "Publish on MIRO all the information about the ecosystem, business models, market and so on.",
      ],
      [
        "Разработать с нуля сервис QRecord для 'Прогресс'. Получить первого партнера и продажу.",
        "Develop a QRecord service for 'Progress'. Get first partner and a sale.",
      ],
      [
        "Запустить лендинг, бота в Telegram, образовательную платформу.",
        "Launch a landing page, Telegram bot, educational platform.",
      ],
      [
        "Подать заявку на программу молодых исследователей 'Умник'.",
        "Submit a request to 'Umnik' researcher program.",
      ],
      [
        "Пройти СберСтудент акселлератор. Получить pre-seed инвестиции.",
        "Pass the SberStudent accelerator. Get pre-seed investment.",
      ],
    ],
  },
  {
    title: ["Среднесрочные цели", "Medium-term goals"],
    year: ["2024"],
    icon: q2,
    iconBg: "#fff",
    quarters: ["Q1", "Q2", "Q3"],
    points: [
      [
        "Получение средств на реализацию заявки по программе 'Умник'.",
        "Getting funds for the implementation of the request for the 'Umnik' program.",
      ],
      [
        "Закупка оборудования для хостинга локальной языковой модели.",
        "Purchase of equipment for hosting the our own large language model.",
      ],
      [
        "Доработка Telegram бота. Развитие образовательной платформы.",
        "Improving Telegram bot. Development of educational platform.",
      ],
      [
        "Продвижение и PR. Формирование стратегии и бюджета на продвижение.",
        "Promotion and PR. Forming a strategy and budget for promotion.",
      ],
    ],
  },
  {
    title: ["Долгосрочные цели", "Long-term goals"],
    year: ["2024", "2025"],
    icon: q3,
    iconBg: "#fff",
    quarters: ["Q4", "Q1", "Q2", "Q3"],
    points: [
      ["Регистрация ООО.", "Registration of a company."],
      [
        "Участие в других программах фонда содействия инновациям (Студенческий стартап, Старт).",
        "Participation in other programs of the fund supporting innovation (Student's Startup, Start).",
      ],
      ["Развитие новых проектов.", "Development of new projects."],
      ["Раунд Seed инвестиций.", "Seed investment round."],
      ["Новые партнерства и контакты.", "New partnerships and contacts."],
      [
        "Разработать стратегию и провести выход на IPO.",
        "Develop a strategy and conduct an IPO.",
      ],
    ],
  },
];

const members = [
  {
    description: [
      "Придумал эту историю. Бэк/фронт, девопс, инфосек и немного аутизма.",
      "Came up with this story. Back/front, devops, infosec and a bit of autism.",
    ],
    name: ["soitends", "soitends"],
    role: "swiss knife",
    image: "https://i.ibb.co/BcTN9J7/sunboy.jpg",
  },
  {
    description: [
      "ML. Шахматы. Математика. Физика. Филантроп. Не может сдать на права.",
      "ML. Chess. Math. Physics. Filantrop. Can't pass the driving exam.",
    ],
    name: ["alt_tanger", "alt_tanger"],
    role: "ML engineer",
    image: "https://i.ibb.co/Km8hkVC/vkdog.png",
  },
  {
    description: [
      "Предводитель в мире животных. Бэкэнд.",
      "Head of the animal world. Backend.",
    ],
    name: ["pesos603", "pesos603"],
    role: "swiss knife 2.0",
    image: "https://i.ibb.co/3YCYbvg/dove.png",
  },
  {
    description: [
      "Слышали про Anonymous? Он основал.",
      "Heard about Anonymous? He founded.",
    ],
    name: ["N4m3L3ss_kiddie", "N4m3L3ss_kiddie"],
    role: "Infosec",
    image: "https://i.ibb.co/GP1v5sh/robot.jpg",
  },
];

const projects = [
  {
    name: ["YouKnow", "YouKnow"],
    description: [
      "Образовательная платформа нацеленная на пользовательский опыт и интеграцию с Нейродвижком. Главная фишка - автоматическая генерация курсов.",
      "Educational platform focused on user experience and integration with Neurengine. Main feature - automated course generation.",
    ],
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
      {
        name: "youtube",
        color: "pink-text-gradient",
      },
      {
        name: "unsplash",
        color: "pink-text-gradient",
      },
    ],
    repos: [
      {
        name: ["Бизнес-модель: Freemium", "Freemium Business Model"],
      },
    ],
    image: "https://i.ibb.co/99qKPjj/youknow.jpg",
    link: "https://youknow.academai.ru",
  },
  {
    name: ["Нейродвижок", "Neurengine"],
    description: [
      "Позволяет генерировать изображения, отвечает на голосовые сообщения, подключена платежная система. Умеет извлекать данные из других наших сервисов.",
      "Allows you to generate images, responds to voice messages, a payment system is connected. Able to extract data from our other services.",
    ],
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
      {
        name: "telegram",
        color: "pink-text-gradient",
      },
    ],
    repos: [
      {
        name: ["Бизнес-модель: Freemium", "Freemium Business Model"],
      },
    ],
    image: "https://i.ibb.co/89fQ2KC/neurengine.png",
    //link: "https://t.me/NeurengineBot",
  },
  {
    name: ["QRecord", "QRecord"],
    description: [
      "Приложение для хранения и управления контейнерами и товарами. Разработано под iOS и Android. Имеется API.",
      "App for storing and managing containers and products. Developed for iOS and Android. Has an API.",
    ],
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    repos: [
      {
        name: ["Бизнес-модель: Транзакционная", "Transactional Business Model"],
      },
    ],
    image: "https://i.ibb.co/s5BwdQ0/qrcodes.png",
    link: "https://github.com/AcademAI/qr_inventarization",
  },

  //....другие projects схожей структуры
];

export { services, partners, roadmapitems, members, projects };
