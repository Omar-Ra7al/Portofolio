import { createContext, useContext } from "react";

// import TodoListJs from "../../assets/imgs/projects/Home/Js/Todo-jS.png";
import ShoppingCartJs from "../../assets/imgs/projects/Home/Js/ShopingCart-Js.png";
import ECommerceJs from "../../assets/imgs/projects/Home/Js/Ecommerce/E-Commerce-Js.png";
import ECommerceJs0 from "../../assets/imgs/projects/Home/Js/Ecommerce/E-Commerce-Js0.png";
import ECommerceJs1 from "../../assets/imgs/projects/Home/Js/Ecommerce/E-Commerce-Js1.png";
import ECommerceJs2 from "../../assets/imgs/projects/Home/Js/Ecommerce/E-Commerce-Js2.png";
import ECommerceJs3 from "../../assets/imgs/projects/Home/Js/Ecommerce/E-Commerce-Js3.png";
import ECommerceJs4 from "../../assets/imgs/projects/Home/Js/Ecommerce/E-Commerce-Js4.png";
import ECommerceJs5 from "../../assets/imgs/projects/Home/Js/mobiles.png";
import CrudsNightMode from "../../assets/imgs/projects/Home/Js/Cruds/CrudsNightMode.png";
import CrudsNightMode1 from "../../assets/imgs/projects/Home/Js/Cruds/CrudsNightMode1.png";
import CrudsNightMode2 from "../../assets/imgs/projects/Home/Js/Cruds/CrudsNightMode2.png";
import CrudsNightMode3 from "../../assets/imgs/projects/Home/Js/Cruds/CrudsNightMode3.png";
import CrudsLightMode from "../../assets/imgs/projects/Home/Js/Cruds/CrudsLIghtMode.png";

//
// import QrScannerJs from "../../assets/imgs/projects/Home/Js/QrScannerjs.png";
import SearchEniginJs from "../../assets/imgs/projects/Home/Js/SerchEngine/SearchEniginjs.png";
import SearchEniginJs1 from "../../assets/imgs/projects/Home/Js/SerchEngine/SearchEniginjs1.png";
import SearchEniginJs2 from "../../assets/imgs/projects/Home/Js/SerchEngine/SearchEniginjs2.png";
import SpaceDesignJs from "../../assets/imgs/projects/Home/Js/SpaceDesign/SpaceDesign.png";
import SpaceDesignJs1 from "../../assets/imgs/projects/Home/Js/SpaceDesign/SpaceDesign1.png";
import SpaceDesignJs2 from "../../assets/imgs/projects/Home/Js/SpaceDesign/SpaceDesign2.png";
import SpaceDesignJs3 from "../../assets/imgs/projects/Home/Js/SpaceDesign/SpaceDesign3.png";
import SpaceDesignJs4 from "../../assets/imgs/projects/Home/Js/SpaceDesign/SpaceDesign4.png";
import SpaceDesignJs5 from "../../assets/imgs/projects/Home/Js/SpaceDesign/SpaceDesign5.png";
// Reacct Pojects >>
import TodoListReact from "../../assets/imgs/projects/Home/React/Todos/TodoReact.png";
import TodoListReact1 from "../../assets/imgs/projects/Home/React/Todos/TodoReact1.png";
import TodoListReact2 from "../../assets/imgs/projects/Home/React/Todos/TodoReact2.png";
import TodoListReact3 from "../../assets/imgs/projects/Home/React/Todos/TodoReact3.png";
import TodoListReact4 from "../../assets/imgs/projects/Home/React/Todos/TodoReact4.png";
import TodoListReact5 from "../../assets/imgs/projects/Home/React/Todos/TodoReact5.png";
import TodoMuiReact from "../../assets/imgs/projects/Home/React/Todos/TodoMui.png";
// Weather >>
import WeatherApp from "../../assets/imgs/projects/Home/React/Weather/WeatherAppReact0.png";
import WeatherApp1 from "../../assets/imgs/projects/Home/React/Weather/WeatherAppReact1.png";
import WeatherApp2 from "../../assets/imgs/projects/Home/React/Weather/WeatherAppReact2.png";
import WeatherApp3 from "../../assets/imgs/projects/Home/React/Weather/WeatherAppReact3.png";
// Ecommerce >>
import ECommerceReact from "../../assets/imgs/projects/Home/React/Ecommerce/E-CommerceReact.png";
import ECommerceReact2 from "../../assets/imgs/projects/Home/React/Ecommerce/E-CommerceReact2.png";
import ECommerceReact3 from "../../assets/imgs/projects/Home/React/Ecommerce/E-CommerceReact3.png";
import ECommerceReact4 from "../../assets/imgs/projects/Home/React/Ecommerce/E-CommerceReact4.png";
// Ecommerce
import ECommerce1 from "../../assets/imgs/projects/Home/React/Ecommerce2/Ecommere1.png";
import ECommerce2 from "../../assets/imgs/projects/Home/React/Ecommerce2/Ecommere2.png";
import ECommerce3 from "../../assets/imgs/projects/Home/React/Ecommerce2/Ecommere3.png";
import ECommerce4 from "../../assets/imgs/projects/Home/React/Ecommerce2/Ecommere4.png";
import ECommerce5 from "../../assets/imgs/projects/Home/React/Ecommerce2/Ecommere5.png";
import ECommerce6 from "../../assets/imgs/projects/Home/React/Ecommerce2/Ecommere6.png";
import ECommerce7 from "../../assets/imgs/projects/Home/React/Ecommerce2/Ecommere7.png";
import ECommerce8 from "../../assets/imgs/projects/Home/React/Ecommerce2/Ecommere8.png";

// import WeatherAppReact from "../../assets/imgs/projects/Home/React/WeatherAppReact.png";
// import WeatherAppReact1 from "../../assets/imgs/projects/Home/React/WeatherAppReact1.png";
import Slider from "../../assets/imgs/projects/Home/React/Slider.png";
// BootStrap >>
import DecoreBootStrap from "../../assets/imgs/projects/Home/BootStrap/Decore-Bootstrap.png";
import DecoreBootStrap1 from "../../assets/imgs/projects/Home/BootStrap/Decore-Bootstrap1.png";
import DecoreBootStrap2 from "../../assets/imgs/projects/Home/BootStrap/Decore-Bootstrap2.png";
import DecoreBootStrap3 from "../../assets/imgs/projects/Home/BootStrap/Decore-Bootstrap3.png";
import DecoreBootStrap4 from "../../assets/imgs/projects/Home/BootStrap/Decore-Bootstrap4.png";
import MovieClubBootStrap from "../../assets/imgs/projects/Home/BootStrap/MovieClub.png";
import MovieClubBootStrap1 from "../../assets/imgs/projects/Home/BootStrap/MovieClub1.png";
import MovieClubBootStrap2 from "../../assets/imgs/projects/Home/BootStrap/MovieClub2.png";
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
    imgs: [
      ECommerceJs0,
      ECommerceJs1,
      ECommerceJs2,
      ECommerceJs3,
      ECommerceJs4,
      ECommerceJs5,
    ],
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
    imgs: [
      TodoListReact1,
      TodoListReact2,
      TodoListReact3,
      TodoListReact4,
      TodoListReact5,
    ],
    links: {
      demo: "https://react-interactive-todo.vercel.app/",
      repo: "https://github.com/Omar-Ra7al/React-interactive-Todo.git",
      details: "",
    },
    tools: ["React", "Git"],
    features: ["Task Management", "State Management"],
  },

  {
    id: 115,
    title: "E-Commerce Web Application React",
    description:
      "A fully responsive e-commerce web application built with React, Material-UI (MUI), and Redux for state management.",
    descriptionLong:
      "This is a React-based E-Commerce Web Application that allows users to browse and purchase products online. Built using React, Material-UI (MUI), and Redux for state management, the app features responsive design ensuring a seamless experience across mobile, tablet, and desktop devices. Users can browse products, add them to the cart, search/filter products, and manage user accounts. The project also supports product listing, authentication, and shopping cart functionality.",
    date: "10/18/2024",
    rate: 5,
    languages: ["HTML", "CSS", "JavaScript", "React.js", "Redux"],
    frameWorks: "Material-UI (MUI)",
    category: "React",
    homeImageUrl: ECommerce1,
    imgs: [
      ECommerce2,
      ECommerce3,
      ECommerce4,
      ECommerce5,
      ECommerce6,
      ECommerce7,
      ECommerce8,
    ],
    links: {
      demo: "https://react-ecommerce10.vercel.app/",
      repo: "https://github.com/your-username/react-ecommerce", // Replace with your GitHub repo link
      details: "",
    },
    tools: ["React.js", "Redux", "Material-UI (MUI)", "React Router"],
    features: [
      "Responsive Design",
      "Product Listing",
      "Search & Filter Functionality",
      "User Authentication",
      "Add to Cart",
      "Redux for State Management",
      "Product Details",
      "Mobile-Friendly",
    ],
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
    imgs: [SearchEniginJs1, SearchEniginJs2],
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

  // Weather App React js >>
  {
    id: 109,
    title: "Weather App",
    description:
      "A responsive Weather app built with React, offering real-time weather updates and dynamic background changes based on weather conditions.",
    descriptionLong:
      "This Weather application is built with React, providing users with real-time weather information. The app dynamically changes the background depending on the current weather condition, enhancing the user experience. It is fully responsive and easy to use across devices.",
    date: "18/10/2024",
    rate: 4.7,
    languages: ["HTML", "CSS", "JavaScript", "React"],
    frameWorks: "React",
    category: "React",
    homeImageUrl: WeatherApp,
    imgs: [WeatherApp1, WeatherApp2, WeatherApp3],
    links: {
      demo: "https://weather1-app1.vercel.app/",
      repo: "https://github.com/Omar-Ra7al/weather-app.git",
      details: "",
    },
    tools: ["React", "Git"],
    features: [
      "Real-time Weather Updates",
      "Dynamic Background Changes",
      "Responsive Design",
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
    imgs: [
      SpaceDesignJs1,
      SpaceDesignJs2,
      SpaceDesignJs3,
      SpaceDesignJs4,
      SpaceDesignJs5,
    ],
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
    imgs: [CrudsLightMode, CrudsNightMode1, CrudsNightMode2, CrudsNightMode3],
    links: {
      demo: "https://omar-ra7al.github.io/Cruds-System/",
      repo: "https://github.com/Omar-Ra7al/Cruds-System.git",
      details: "",
    },
    tools: ["Git"],
    features: ["CRUD Functionality", "Light & Night Mode", "Responsive Design"],
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
    imgs: [],
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
    imgs: [MovieClubBootStrap1, MovieClubBootStrap2],
    links: {
      demo: "https://omar-ra7al.github.io/Movie-Club/",
      repo: "https://github.com/Omar-Ra7al/Movie-Club",
      details: "",
    },
    tools: ["Bootstrap", "Git"],
    features: ["Modern Layout", "Responsive Design"],
  },
  // Top Project 3: E-Commerce (React)
  {
    id: 3,
    title: "React E-Commerce",
    description:
      "E-commerce web app built with React.js, Redux Toolkit for state management, The app allows users to add and remove products from the cart, displays pop-up notifications for actions like adding products, and prevents multiple additions of the same product.",
    descriptionLong:
      "This e-commerce web application is developed using React.js and Redux Toolkit to manage state effectively. It simulates API interactions by fetching product data from a JSON file, providing a seamless user experience. The application is fully responsive across all devices and includes features like pop-up notifications to inform users about the status of their actions, such as adding products to the cart or restrictions on adding the same product multiple times. Users can view the total number of products in the cart, enhancing the shopping experience. The app is styled with Material-UI, ensuring a modern and attractive interface, while React Router facilitates smooth navigation between product details and other sections of the app.",
    date: "9/9/2024",
    rate: 5,
    languages: ["HTML", "CSS", "JavaScript", "React"],
    frameworks: "React",
    category: "React",
    homeImageUrl: ECommerceReact,
    imgs: [ECommerceReact2, ECommerceReact3, ECommerceReact4],
    links: {
      demo: "https://react-ecommerce-mqyfdahfn-omar-rahals-projects.vercel.app/",
      repo: "https://github.com/Omar-Ra7al/React-Ecommerce-App.git",
      details: "",
    },
    tools: [
      "Git",
      "npm",
      "Redux Toolkit",
      "Material-UI",
      "React Router",
      "React Icons",
    ],
    features: [
      "Responsive Design",
      "Admin Dashboard",
      "Add/Remove Products from Cart",
      "Popup Notifications for Cart Actions",
      "Simulated API with JSON File",
      "Smooth Navigation with React Router",
      "Icons for Improved UI with React Icons",
    ],
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
    imgs: [],
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
    imgs: [
      DecoreBootStrap1,
      DecoreBootStrap2,
      DecoreBootStrap3,
      DecoreBootStrap4,
    ],
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
    id: 13, // Unique ID for the Swiper project
    title: "Reusable Swiper Component",
    description:
      "A reusable, responsive image slider for React applications with manual and automatic sliding features.",
    descriptionLong:
      "The Swiper component is designed as a highly reusable and customizable image slider for React applications. This component accepts a dynamic set of child elements (usually images), making it adaptable to different content needs across your project. It provides bullet indicators for navigation, manual next/previous arrows, and supports automatic sliding with customizable intervals.",
    date: "25/9/2023", // Date of creation
    rate: 5, // Rating out of 5
    languages: ["HTML", "CSS", "JavaScript", "React"],
    frameWorks: "None",
    category: "React", // Project category
    homeImageUrl: Slider, // Image for project homepage
    imgs: [], // Images used in the project
    links: {
      demo: "https://react-swiper-delta.vercel.app/",
      repo: "https://github.com/omar-ra7al/Swiper-Component", // Replace with correct repository link
      details: "", // If more details are available, link them here
    },
    tools: ["React", "JavaScript"],
    features: [
      "Reusable and customizable image slider",
      "Manual navigation with next/previous arrows",
      "Automatic sliding with customizable intervals",
      "Dynamic bullet indicators for slide navigation",
      "Responsive design for various screen sizes",
      "Easily integrates into different parts of your project",
    ],
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
