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
  nexttalk,
  cisco,
  angular,
  express,
  typescript,
  Java,
  docker,
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
  // {
  //   name: "Angular",
  //   icon: angular,
  // },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "Java",
  //   icon: Java,
  // },
  {
    name: "Docker",
    icon: docker,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "C",
  //   icon: cLanguage,
  // },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Cisco SWE Intern",
    company_name: "Cisco Systems Pvt. Ltd.",
    icon: cisco,
    iconBg: "white",
    date: "May 2024 - present",
    points: [
      "Software Engineering Intern at Cisco, Distributed Systems Department.",
      "Working on SONiC(Software for open networking in Cloud), a network operating system, to make network switches vendor-independent",
      "Implementing SONiC on the NCS 1K platform",
    ],
  },
  {
    title: "NextTalk",
    company_name: "Real Time Chat Application",
    icon: nexttalk,
    iconBg: "white",
    date: "May 2023 - July 2023",
    points: [
      "Implemented secure login/signup with password encryption for data privacy, leveraging WebSockets, Node.js, Express.js, and MongoDB.",
      "Developed a captivating real-time chat app with a responsive design, seamless messaging. ",
      "User-friendly features it includes are real-time conversations, effortless file sharing, and dynamic green dots for online user status.",
    ],
  },
  {
    title: "Brokerax",
    company_name: "A Financial Brokerage Website",
    icon: brokerax,
    iconBg: "black",
    date: "March 2023 - July 2023",
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
      "Highest rating - 1688(Expert)",
      "Problem solving achievements - Solved many Problems on this platform",
      "Personal Best Rank - Achieved global rank of 331 in Codeforces Round 918 (Div. 4)",
    ],
  },
  {
    title: "Codechef",
    company_name: "Online judge",
    icon: codechef,
    iconBg: "#ffffff",
    date: "Aug 2022 - present",
    points: [
      "Highest rating - 2009(5 star)",
      "Problem solving achievements - Solved 200+ Problems on this platform",
      "Achieved global rank of 47 in Starters 126 Division 2",
      "Achieved global rank of 71 in Starters 123 Division 2 ",
    ],
  },
  {
    title: "Leetcode",
    company_name: "Online judge",
    icon: leetcode,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - present",
    points: [
      "Contest Rating - 1993(Knight)",
      "Problem solving achievements - Solved 450+ Problems on this platform",
      "Highlights - Consistently solving POTD for over last 7 months",
      "Badge - April, June, July, August, 50 Days and 100 Days Leetcoding challenge for consistently solving questions everyday in the month of April, June, July, August ",
    ],
  },

  {
    title: "GeeksforGeeks",
    company_name: "Online judge",
    icon: GeeksforGeeks,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Problem solving achievements - Solved 450+ Problems on this platform",
      "Overall Coding Score - Achieved a score of 1571 after solving problems consistently",
      "Max POTD streak achieved is 68 days",
      "Highlights - Consistently solving POTD for over last 7 months",
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
    source_code_link: "https://github.com/NishantBansal2003/BROKERAX-completed",
  },
  {
    name: "Amazon",
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
    name: "NextTalk",
    description:
      "Created real-time chat application which provides a captivating and user-friendly experience with its responsive design. Users can engage in dynamic conversations, effortlessly share files, and stay connected with online users through dynamic green dots. The application offers seamless messaging, a streamlined file sharing feature, and real-time updates, ensuring effective communication and collaboration.",
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
        name: "Express",
        color: "text-yellow-600",
      },
      {
        name: "Node JS",
        color: "orange-text-gradient",
      },
    ],
    image: flipkart,
    source_code_link:
      "https://github.com/NishantBansal2003/NextTalk-Message-App",
  },
];

export { services, technologies, experiences, projects };
