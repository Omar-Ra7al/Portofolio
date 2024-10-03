import { createContext, useContext } from "react";

// import TodoListJs from "../../assets/imgs/projects/Home/Js/Todo-jS.png";
import ShoppingCartJs from "../../assets/imgs/projects/Home/Js/ShopingCart-Js.png";
import ECommerceJs from "../../assets/imgs/projects/Home/Js/E-Commerce-Js.png";
// import CrudsLIghtMode from "../../assets/imgs/projects/Home/Js/CrudsLIghtMode.png";
import CrudsNightMode from "../../assets/imgs/projects/Home/Js/CrudsNightMode.png";
import GetGitRrpoJs from "../../assets/imgs/projects/Home/Js/GetGitRrpojs.png";
import QrScannerJs from "../../assets/imgs/projects/Home/Js/QrScannerjs.png";
import SearchEniginJs from "../../assets/imgs/projects/Home/Js/SearchEniginjs.png";
import SpaceDesignJs from "../../assets/imgs/projects/Home/Js/SpaceDesign.png";
// Reacct Pojects >>
import TodoListReact from "../../assets/imgs/projects/Home/React/TodoReact.png";
import ECommerceReact from "../../assets/imgs/projects/Home/React/E-CommerceReact.png";
import WeatherAppReact from "../../assets/imgs/projects/Home/React/WeatherAppReact.png";
import TodoMuiReact from "../../assets/imgs/projects/Home/React/TodoMui.png";
// BootStrap >>
import DecoreBootStrap from "../../assets/imgs/projects/Home/BootStrap/Decore-Bootstrap.png";
// import BlogBootStrap from "../../assets/imgs/projects/Home/BootStrap/Blog.png";
// import DragonPseBootStrap from "../../assets/imgs/projects/Home/BootStrap/DragonPs.png";
import MovieClubBootStrap from "../../assets/imgs/projects/Home/BootStrap/MovieClub.png";
//
const projectsData = [
  // Top Project 1: E-Commerce (Vanilla JS)
  {
    id: 1,
    title: "Vanilla JS E-Commerce",
    description:
      "A fully responsive e-commerce web application built with Vanilla JavaScript. It includes user authentication, product catalog management, and an admin dashboard for easy product updates and control.",
    descriptionLong:
      "This e-commerce web application is developed entirely with Vanilla JavaScript. It is fully responsive across all devices and includes user authentication (login and account creation). Admin users can manage the product catalog through a dashboard, allowing for adding, and removing, products. Additional features include password updates, and control over product display size, ensuring a smooth user experience with no reliance on frameworks.",
    date: "15/1/2024",
    rate: 5,
    languages: ["HTML", "CSS", "JavaScript"],
    frameWorks: "none",
    category: "JavaScript",
    homeImageUrl: ECommerceJs,
    imgs: [ECommerceJs],
    links: {
      demo: "https://omar-ra7al.github.io/E-commerce-/",
      repo: "https://github.com/Omar-Ra7al/E-commerce-.git",
      details: "",
    },
    tools: ["Git", "npm"],
    features: ["Responsive Design", "Admin Dashboard", "User Authentication"],
  },
  // Project 2: To-Do List App (React)
  {
    id: 2,
    title: "To-Do List React",
    description:
      "A responsive To-Do List app built with React, allowing users to manage tasks with ease with light and dark Mode.",
    descriptionLong:
      "This To-Do List application is built with React, providing users with a simple, intuitive interface for managing tasks. Users can add, edit, and delete tasks, with the app maintaining state and rendering changes instantly using React's state management hooks.",
    date: "25/8/2024",
    rate: 4.5,
    languages: ["HTML", "CSS", "JavaScript", "React"],
    frameWorks: "React",
    category: "React",
    homeImageUrl: TodoListReact,
    imgs: [TodoListReact],
    links: {
      demo: "https://react-interactive-todo.vercel.app/",
      repo: "https://github.com/Omar-Ra7al/React-interactive-Todo.git",
      details: "",
    },
    tools: ["React", "Git"],
    features: ["Task Management", "State Management"],
  },

  // Top Project 3: E-Commerce (React)
  {
    id: 3,
    title: "React E-Commerce",
    description:
      "E-commerce web app built with React.js, Redux Toolkit for state management, Material-UI for styling, and React Router for product details. The app includes animations and pop-ups when products are added or removed from the cart.",
    descriptionLong:
      "This e-commerce web application is developed entirely with Vanilla JavaScript. It is fully responsive across all devices and includes user authentication (login and account creation). Admin users can manage the product catalog through a dashboard, allowing for adding, removing, and updating products. Additional features include password updates, image management, and control over product display, ensuring a smooth user experience with no reliance on frameworks.",
    date: "9/9/2024",
    rate: 5,
    languages: ["HTML", "CSS", "JavaScript", "React"],
    frameWorks: "React",
    category: "React",
    homeImageUrl: ECommerceReact,
    imgs: [ECommerceReact],
    links: {
      demo: "https://react-ecommerce-mqyfdahfn-omar-rahals-projects.vercel.app/",
      repo: "https://github.com/Omar-Ra7al/React-Ecommerce-App.git",
      details: "",
    },
    tools: ["Git", "npm"],
    features: ["Responsive Design", "Admin Dashboard", "User Authentication"],
  },

  //   // Project 4: Search Engine (Vanilla JS)
  {
    id: 4,
    title: "Search Engine",
    description:
      "A simple search engine built with Vanilla JavaScript that provides search results based on user queries.",
    descriptionLong:
      "This project is a simple search engine created using Vanilla JavaScript. It allows users to enter search queries, fetches data from a dataset or API, and displays relevant results. The design is optimized for responsiveness and provides fast, real-time search functionality.",
    date: "8/7/2023",
    rate: 4,
    languages: ["HTML", "CSS", "JavaScript"],
    frameWorks: "none",
    category: "JavaScript",
    homeImageUrl: SearchEniginJs,
    imgs: [SearchEniginJs],
    links: {
      demo: "https://omar-ra7al.github.io/Images-Search-Engine/",
      repo: "https://github.com/Omar-Ra7al/Images-Search-Engine",
      details: "",
    },
    tools: ["JavaScript", "API"],
    features: [
      "Search Functionality",
      "Responsive Design",
      "Real-Time Results",
    ],
  },

  // Project 5: Space Design (Vanilla JS)
  {
    id: 5,
    title: "Space Design",
    description:
      "A dynamic website allowing users to customize background images and colors. Users can set automatic background changes at specific intervals or choose a static image. Features include random backgrounds, scroll navigation options, and reset settings.",
    descriptionLong:
      "This customizable website allows users to personalize the appearance of the landing page by changing the background image and overall color scheme. Users can choose between static images or enable random background changes at specified intervals, offering a highly interactive experience. The Set Time feature allows users to control how often the background image changes automatically. Other features include toggling navigation scroll effects, showing or hiding navigation bullets, and resetting all customizations to default. These dynamic options provide flexibility, ensuring an engaging and personalized user experience that adapts to individual preferences.",
    date: "9/1/2024",
    rate: 4,
    languages: ["HTML", "CSS", "JavaScript"],
    frameWorks: "none",
    category: "JavaScript",
    homeImageUrl: SpaceDesignJs,
    imgs: [SpaceDesignJs],
    links: { demo: "", repo: "", details: "" },
    tools: ["JavaScript", "Git"],
    features: [
      "Custom Background Color",
      "Automatic Background Changes",
      "Random Background Images",
      "Customizable Scroll Navigation",
      "Dynamic Image Selection",
      "Reset Options to Default",
    ],
  },

  // Project 6: Cruds Project
  {
    id: 6,
    title: "CRUDs App - Light & Night Mode",
    description:
      "A responsive CRUD application with both light and night modes, built using Vanilla JavaScript.",
    descriptionLong:
      "This project demonstrates a CRUD (Create, Read, Update, Delete,Search) application built with Vanilla JavaScript. It features both light and night modes, providing users with the ability to switch between themes seamlessly. The app allows users to manage a list of items, including adding, editing, and deleting tasks, with all changes reflected immediately in the UI.",
    date: "12/9/2023",
    rate: 4.5,
    languages: ["HTML", "CSS", "JavaScript"],
    frameWorks: "none",
    category: "JavaScript",
    homeImageUrl: CrudsNightMode,
    imgs: [CrudsNightMode],
    links: {
      demo: "https://omar-ra7al.github.io/Cruds-System/",
      repo: "https://github.com/Omar-Ra7al/Cruds-System.git",
      details: "",
    },
    tools: ["Git"],
    features: ["CRUD Functionality", "Light & Night Mode", "Responsive Design"],
  },

  // Project 7: Weather App (React)
  {
    id: 7,
    title: "Weather App",
    description:
      "A weather app built with React that supports language switching between Arabic and English, with automatic direction adjustment.",
    descriptionLong:
      "This React-based weather application provides real-time weather data by fetching information from an external API. It supports language switching between Arabic and English, dynamically adjusting the layout direction (LTR/RTL) based on the selected language. The app is fully responsive and optimized for different screen sizes.",
    date: "22/7/2024",
    rate: 4.5,
    languages: ["HTML", "CSS", "JavaScript", "React"],
    frameWorks: "React",
    category: "React",
    homeImageUrl: WeatherAppReact,
    imgs: [WeatherAppReact],
    links: {
      demo: "https://react-wheater-app.netlify.app/",
      repo: "https://github.com/Omar-Ra7al/React-Weather-App-",
      details: "",
    },
    tools: ["React", "API", "Git"],
    features: ["Real-Time Weather", "Language Switcher", "Responsive Design"],
  },

  // Project 8: QR Code Scanner (Vanilla JS)
  {
    id: 8,
    title: "QR Code Scanner",
    description:
      "A QR code scanner application built using Vanilla JavaScript, allowing users to scan and decode QR codes.",
    descriptionLong:
      "This QR code scanner is built with Vanilla JavaScript, enabling users to scan QR codes using their device's camera. The app decodes the QR code and displays the information in real-time. It is lightweight and works across various devices, providing a fast and efficient way to scan QR codes.",
    date: "10/6/2023",
    rate: 4,
    languages: ["HTML", "CSS", "JavaScript"],
    frameWorks: "none",
    category: "JavaScript",
    homeImageUrl: QrScannerJs,
    imgs: [QrScannerJs],
    links: {
      demo: "https://omar-ra7al.github.io/QR-Scanner/",
      repo: "https://github.com/Omar-Ra7al/QR-Scanner",
      details: "",
    },
    tools: ["JavaScript", "QR API"],
    features: ["QR Code Scanning", "Responsive Design", "Real-Time Decoding"],
  },
  // Project 88: Shopping Cart (Vanilla JS)
  {
    id: 88,
    title: "Shopping Cart",
    description:
      "A responsive shopping cart built with Vanilla JavaScript, offering smooth functionality and redirecting users to a login page before proceeding to checkout or accessing products.",
    descriptionLong:
      "This shopping cart application, developed with Vanilla JavaScript, enables users to add and remove items while viewing an order summary. It emphasizes simplicity and efficient functionality, ensuring a smooth user experience without relying on external libraries. The app dynamically prevents access to the checkout or product details pages if the user is not logged in, redirecting them to a Get Started page for authentication. This design choice enhances security while maintaining a user-friendly and easy-to-navigate interface.",
    date: "15/8/2024",
    rate: 4,
    languages: ["HTML", "CSS", "JavaScript"],
    frameWorks: "none",
    category: "JavaScript",
    homeImageUrl: ShoppingCartJs,
    imgs: [ShoppingCartJs],
    links: { demo: "", repo: "", details: "" },
    tools: ["JavaScript", "Git"],
    features: ["Add/Remove Items", "Order Summary"],
  },

  // Project 9: Movie Club (Bootstrap)
  {
    id: 9,
    title: "Movie Club",
    description:
      "A responsive movie club website designed with Bootstrap, offering a modern layout and smooth user experience.",
    descriptionLong:
      "The Movie Club website is built with Bootstrap, providing a platform for movie enthusiasts to browse, review, and discuss movies. The design is modern and clean, offering a smooth user experience across different devices. The site leverages Bootstrap's layout capabilities for an organized, visually appealing presentation.",
    date: "14/6/2023",
    rate: 4,
    languages: ["HTML", "CSS", "JavaScript"],
    frameWorks: "Bootstrap",
    category: "Css",
    homeImageUrl: MovieClubBootStrap,
    imgs: [MovieClubBootStrap],
    links: {
      demo: "https://omar-ra7al.github.io/Movie-Club/",
      repo: "https://github.com/Omar-Ra7al/Movie-Club",
      details: "",
    },
    tools: ["Bootstrap", "Git"],
    features: ["Modern Layout", "Responsive Design"],
  },

  // Project 10: To-Do List (Material-UI & React)
  {
    id: 10,
    title: "To-Do List (Material-UI)",
    description:
      "A To-Do List app built with React and Material-UI, featuring a clean, modern interface and task management capabilities.",
    descriptionLong:
      "This To-Do List application uses React and Material-UI to provide a modern and functional task management tool. Users can add, edit, and delete tasks, with the interface dynamically updating as changes are made. The app takes advantage of Material-UI's components for a professional, sleek appearance.",
    date: "15/7/2024",
    rate: 4.5,
    languages: ["HTML", "CSS", "JavaScript", "React"],
    frameWorks: "React, Material-UI",
    category: "React",
    homeImageUrl: TodoMuiReact,
    imgs: [TodoMuiReact],
    links: {
      demo: "https://mui-react-todolist.netlify.app/",
      repo: "https://github.com/omar-ra7al/React-MUI-Todo-List",
      details: "",
    },
    tools: ["React", "Material-UI", "Git"],
    features: ["Task Management", "Material-UI Design", "Responsive UI"],
  },

  // Project 11: Decoration Website (Bootstrap)
  {
    id: 11,
    title: "Decoration Website",
    description:
      "A responsive decoration website designed with Bootstrap, featuring a clean and visually appealing layout.",
    descriptionLong:
      "This decoration website showcases elegant design using Bootstrap’s grid system and styling utilities. It is fully responsive, ensuring optimal viewing on all devices. The site is focused on providing a beautiful, simple design with smooth transitions and a user-friendly interface.",
    date: "12/7/2024",
    rate: 4,
    languages: ["HTML", "CSS", "JavaScript"],
    frameWorks: "Bootstrap",
    category: "Css",
    homeImageUrl: DecoreBootStrap,
    imgs: [DecoreBootStrap],
    links: {
      demo: "https://omar-ra7al.github.io/Landing-2-intern-ship/",
      repo: "https://github.com/omar-ra7al/Landing-2-intern-ship",
      details: "",
    },
    tools: ["Bootstrap", "Git"],
    features: ["Responsive Design", "Clean Layout"],
  },

  // Project 12: Get GitHub Repos (Vanilla JS)
  {
    id: 12,
    title: "Get GitHub Repositories",
    description:
      "A tool to fetch and display GitHub repositories using the GitHub API, built with Vanilla JavaScript.",
    descriptionLong:
      "This project allows users to fetch and display GitHub repositories by entering a username. Built with Vanilla JavaScript, the tool connects to the GitHub API, retrieves repository information, and displays it in an easy-to-read format. It offers smooth API interaction and a user-friendly interface.",
    date: "20/7/2023",
    rate: 4,
    languages: ["HTML", "CSS", "JavaScript"],
    frameWorks: "none",
    category: "JavaScript",
    homeImageUrl: GetGitRrpoJs,
    imgs: [GetGitRrpoJs],
    links: {
      demo: "https://omar-ra7al.github.io/Get-Repo/",
      repo: "https://github.com/omar-ra7al/Get-Repo",
      details: "",
    },
    tools: ["GitHub API", "JavaScript"],
    features: ["GitHub API Integration", "Fetch Data", "Responsive Design"],
  },
];
const projectsDataContext = createContext([]);

export default function ProjectsContextProvider({ children }) {
  return (
    <projectsDataContext.Provider value={projectsData}>
      {children}
    </projectsDataContext.Provider>
  );
}

export const useProjectsData = () => {
  return useContext(projectsDataContext);
};
