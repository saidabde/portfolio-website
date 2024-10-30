import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Object-Oriented Compiler",
    description:
      "Implementation of a complete compiler, encompassing lexical analysis, syntactic analysis, and code generation phases. A comprehensive test suite was created and automated, incorporating unit and integration tests to ensure adherence to language specifications and reliable execution. This setup provided robust validation for each phase, ensuring the compiler’s accuracy and performance.",
    tools: ["Java", "POO", "MAVEN", "JUNIT", "ASSEMBLER", "CI/CD"],
    role: "Software Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Werewolf Game",
    description:
      "Development of a digital platform for the game Werewolf enabled remote play with hidden roles, strategic discussions, and automated night actions. The platform enhanced the user experience by introducing anonymous voting, creating a more immersive and strategic multiplayer environment. This design allowed players to engage in the game’s social deduction mechanics seamlessly, even in a remote setting.",
    tools: ["NodeJS", "Express", "React Native", "Websockets", "SQLite"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "End-to-End Distributed Systems Project",
    description:
      "Development of a platform to analyze labor market trends across French regions, using the Pôle Emploi API to support data-driven workforce planning. A custom Kubernetes cluster was designed and implemented to enhance system scalability and availability. Additionally, SRE practices were integrated, incorporating Prometheus monitoring to improve reliability and enable proactive maintenance.",
    tools: [
      "GCP",
      "Kubernetes",
      "Docker",
      "Prometheus",
      "Grafana",
      "Cassandra",
    ],
    code: "",
    role: "SRE Engineer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Secure Vote",
    description:
      "Developed an application that allows the creation of secure voting sessions. The application enables users to vote confidentially and displays the results at the end of the voting process.",
    tools: ["C++", "ReactJS", "WebSockets"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
  {
    id: 5,
    name: "Orders management application",
    description:
      "Design and implementation of a relational database system for restaurant order management using Oracle Database and JDBC. The system features normalized tables for menu items (including pricing, categories, and dietary information), customer orders (tracking status, timestamps, and special requests), inventory management (stock levels, reorder points, and supplier details), and staff scheduling (shifts, roles, and performance metrics).",
    tools: ["SQL", "Oracle Database", "Java", "JDBC", "Database Design"],
    code: "",
    demo: "",
    image: ayla,
    role: "Software Developer",
  },
  {
    id: 6,
    name: "Firemen simulator",
    description:
      "Development of a simulator was conducted to model firemen’s behavior within a dynamic environment featuring fires, water tanks, and varied terrain. Using Java and object-oriented programming, the simulator incorporated multiple design patterns and algorithms to structure and enhance functionality. Optimization efforts focused on computing and scheduling the most effective actions for firemen, ensuring efficient and safe fire extinguishing while considering water levels and the impact of terrain features on movement speed.",
    tools: [
      "Java",
      "Object Oriented Programming",
      "Design Patterns",
      "Algorithms",
    ],
    code: "https://github.com/elomarii/firefighters",
    demo: "",
    image: ayla,
    role: "Software Developer",
  },
  {
    id: 7,
    name: "GUI Library Development",
    description:
      "Development and testing of a custom GUI library from scratch using the C programming language, with successful application on the classic 2048 game to demonstrate functionality. This project fostered enhanced problem-solving and technical presentation skills through a formal presentation of results to a jury, effectively communicating complex technical aspects and project achievements.",
    tools: ["C"],
    code: "",
    demo: "",
    image: ayla,
    role: "Software Developer",
  },
  {
    id: 8,
    name: "Typing Speed Test",
    description:
      "A web application built to help users improve their typing speed and accuracy through a variety of text challenges. Developed with Next.js and styled using Tailwind CSS, this project leverages a responsive design for an engaging user experience. Deployed on AWS for scalable access, the app provides instant feedback on typing metrics, motivating users to improve their skills progressively.",
    tools: ["Next.js", "Tailwind CSS", "AWS"],
    code: "https://github.com/saidabde/typing_test",
    demo: "http://54.234.149.78/",
    image: ayla,
    role: "Full Stack Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
