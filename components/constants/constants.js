

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "IEX Group, Inc.",
    icon: '/icons/iex.svg',
    iconBg: "#212322",
    date: "June 2023 - August 2023",
    points: [
      "Developed an open-source stock screener utilizing IEX Cloud’s API for the company’s blog site to showcase API capabilities to 1000+ monthly visitors using next.js/javascript",
      "Deployed a robust script using python to synchronize internal databases, successfully addressing complexities like cross-platform database providers and schema synchronization, resulting in a 60% increase in workflow efficiency",
      "Led the initiative to introduce end-to-end automation testing for the “Apperate” product using python playwright, resulting in a 90% reduction in manual testing effort",
      "Leveraged knowledge in backend development, continuous integration/deployment, Git/GitHub, SQL/NoSQL DB, Postman",
    ],
  },
  {
    title: "Software Developer Co-Op",
    company_name: "TherapyNotes, LLC",
    icon: '/icons/therapynotes.webp',
    iconBg: "#383E56",
    date: "May 2022 - May 2023",
    points: [
      "Colaborated with the Integrations team towards the development of new ePrescribe features utilizing the DoseSpot API",
      "Increased the debuggability of the code by writing reusable unit tests with 100% code coverage",
      "Actively collaborated with the team in an Agile environment, utilizing OOP concepts and SOLID design principles to implement new features, bug fixes, and feature updates, reducing the backlog count by 20%",
      "Leveraged Knowledge in Full Stack Web development, C#, Typescript, ASP.NET, Entity Framework, Git/GitHub, SQL and debugged using Visual Studio, Chrome Developer Tools, Postman"
    ],
  },
];


export const projects = [
  {
    name: "Movie Review App",
    description:
      "A movie reviews webapp that empowers users to seamlessly search and explore movie details while offering the opportunity to post their reviews. Employed a robust, loosely coupled architecture, featuring Spring Boot for the backend API layer and React for the dynamic frontend client.",
    tags: [
      {
        name: "Spring Boot",
        color: "badge-success",
      },
      {
        name: "React",
        color: "badge-info",
      },
      {
        name: "MongoDB",
        color: "badge-error",
      },
    ],
    image: '/img/moviereview.png',
    source_code_link: "https://github.com/",
  },
  {
    name: "Nexo Chatbot",
    description:
      "Created a chatbot for the company ADP as part of my Capstone program at NJIT. Developed the nexo chatbot where users can interact with their database in a human like manner using an AI chatbot. Developed the interactive API that uses OpenAI API and prompt engineering to generate sql queries which runs in the database layer to generate responses to user input. ",
    tags: [
      {
        name: "django",
        color: "badge-success",
      },
      {
        name: "djangorestframework",
        color: "orange-text-gradient",
      },
      {
        name: "react",
        color: "badge-info",
      },
      {
        name: "planetscaledb",
        color: "badge-error",
      },
    ],
    image: '/img/nexochatbot.png',
    source_code_link: "https://github.com/",
  },
  {
    name: "MyWebClass",
    description:
      "A marketing website using Angular containing blogs and a sales funnel implementation for a brand archetype. Implemented unit testing to the project using playwright and lighthouse. Configured continuous integration and continuous deployment to the project using GitHub Actions. Added search engine optimizations and integrated google analytics to the website.",
    tags: [
      {
        name: "Angular",
        color: "badge-info",
      },
      {
        name: "Unit Testing",
        color: "badge-success",
      },
      {
        name: "CI/CD",
        color: "badge-error",
      },
    ],
    image: '/img/mywebclass.png',
    source_code_link: "https://github.com/",
  },
  {
    name: "EveryPenny",
    description:
      "A budgeting web app that allows users to track their expenses and income, and provides a visual representation of their spending habits. Created the backend API using DjangoRestFramework that allows users to create accounts, add/delete transactions, and view their transaction history using CRUD.",
    tags: [
      {
        name: "django",
        color: "badge-success",
      },

      {
        name: "postgresql",
        color: "badge-secondary",
      },
      {
        name: "react",
        color: "badge-info",
      },
      {
        name: "bootstrap",
        color: "badge-default",
      },
    ],
    image: '/img/everypenny.png',
    source_code_link: "https://github.com/aron-s/EveryPenny",
  },
  

];