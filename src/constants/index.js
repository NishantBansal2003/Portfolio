import {
  broker,
  amaze,
  flipkart,
  brokerax,
  GeeksforGeeks,
  leetcode,
  codechef,
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  reactjs,
  cpp,
  tailwind,
  nodejs,
  mongodb,
  git,
  cLanguage,
  bootstrap,
  codeforces,
  threejs,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FrontEnd Web Developer",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
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
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C++",
    icon: cpp,
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
    name: "C",
    icon: cLanguage,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Brokerax",
    company_name: "Website",
    icon: brokerax,
    iconBg: "black",
    date: "March 2023 - June 2023",
    points: [
      "Created financial brokerage website that offers a seamless, secure login for users to access real-time stock information",
      "buy and sell stocks effortlessly, and engage with our team through the 'About Us' and 'Contact Us' pages",
      " It provides a holistic trading experience to help users effectively manage their investments.",
    ],
  },
  {
    title: "Codeforces",
    company_name: "Online judge",
    icon: codeforces,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - present",
    points: [
      "Highest rating - 1296(Pupil)",
      "Problem solving achievements - Solved 200+ Problems on this platform",
      "Personal Best Rank - Achieved global rank of 1958 in Codeforces Round 856 (Div. 2)",
    ],
  },
  {
    title: "Codechef",
    company_name: "Online judge",
    icon: codechef,
    iconBg: "#ffffff",
    date: "Aug 2022 - present",
    points: [
      "Highest rating - 1759(3 star)",
      "Problem solving achievements - Solved 130+ Problems on this platform",
      "Achieved global rank of 58 in Starters 61 Division 3",
      "Achieved global rank of 278 in  Starters 80 Division 2",
    ],
  },
  {
    title: "Leetcode",
    company_name: "Online judge",
    icon: leetcode,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - present",
    points: [
      "Problem solving achievements - Solved 160+ Problems on this platform",
      "Max POTD streak achieved is 52 days",
      "Highlights - Consistently solving POTD for over last 5 months",
      "Badge - April Leetcoding challenge for consistently solving questions everyday in the month of April ",
    ],
  },

  {
    title: "GeeksforGeeks",
    company_name: "Online judge",
    icon: GeeksforGeeks,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Problem solving achievements - Solved 380+ Problems on this platform",
      "Overall Coding Score - Achieved a score of 1360 after solving problems consistently",
      "Max POTD streak achieved is 45 days",
      "Highlights - Consistently solving POTD for over last 5 months",
    ],
  },
];

const projects = [
  {
    name: "Brokerax",
    description:
      "Created a financial brokerage website that offers a seamless, secure login for users to access real-time stock information, buy and sell stocks effortlessly, and engage with our team through the 'About Us' and 'Contact Us' pages also we provide a holistic trading experience to help users effectively manage their investments.",
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
      {
        name: "Bootstrap",
        color: "text-yellow-600",
      },
      {
        name: "Node JS",
        color: "orange-text-gradient",
      },
    ],
    image: broker,
    source_code_link: "https://github.com/NishantBansal2003/Brokerax",
  },
  {
    name: "Amazon Clone",
    description:
      "Created a frontend clone of Amazon using HTML and CSS. Through careful attention to detail, I have recreated the captivating user interface and design elements that make Amazon such a popular e-commerce platform. Explore the familiar elegance of Amazon's interface in my HTML and CSS-powered frontend clone.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: amaze,
    source_code_link: "https://github.com/NishantBansal2003/Amazon-clone",
  },
  {
    name: "Flipkart Clone",
    description:
      "Discover my Flipkart frontend clone, crafted with HTML and CSS. Immerse yourself in a captivating shopping experience that mirrors the renowned interface of this leading e-commerce platform. Experience the visually appealing design elements and user-friendly features.",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: flipkart,
    source_code_link: "https://github.com/NishantBansal2003",
  },
];

export { services, technologies, experiences, projects };
