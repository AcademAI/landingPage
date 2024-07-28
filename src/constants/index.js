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
    id: "partner",
    title: ["Партнеры", "Partners"],
  },
  {
    id: "contact",
    title: ["Связаться", "Contact"],
  },
];

const services = [
  {
    title: ["Full Stack сервисы", "Full Stack services"],
    icon: web,
  },
  {
    title: ["Human-like LLM агенты", "Human-like LLM agents"],
    icon: mobile,
  },
  {
    title: ["Исследование безопасности ИИ", "AI security research"],
    icon: creator,
  },
  {
    title: ["DevOps", "DevOps"],
    icon: backend,
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
      "FullStack разработчик. DevOps. Исследователь безопасности ИИ.",
      "FullStack Developer. DevOps. AI security researcher.",
    ],
    name: ["artias13", "artias13"],
    role: "Full Stack",
    image: "https://i.ibb.co/JRFQs65/headshot-circle.png",
    link: "https://artias13.github.io",
  },
  {
    description: [
      "Python разработчик. Машинное обучение. Исследователь ИИ.",
      "Python developer. Machine learning. AI researcher.",
    ],
    name: ["alt_tanger", "alt_tanger"],
    role: "ML engineer",
    image: "https://i.ibb.co/Km8hkVC/vkdog.png",
  },
  {
    description: [
      "Python backend разработчик. Алгоритмы и структуры данных. Исследователь ИИ.",
      "Python backend. Algorithms and data structures. AI researcher.",
    ],
    name: ["pesos603", "pesos603"],
    role: "Back end",
    image: "https://i.ibb.co/3YCYbvg/dove.png",
  },
  {
    description: [
      "Энтузиаст информационной безопасности. CTF игрок.",
      "CyberSecurity enthusiast. CTF player.",
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
    link: "https://t.me/NeurengineBot",
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
