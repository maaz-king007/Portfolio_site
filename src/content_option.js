import profilePic from "./assets/images/profile.jpg";
import volatilixPic from "./assets/images/volatilix.jpg";
import grievancePic from "./assets/images/grievance.jpg";
import instagramPic from "./assets/images/instagram.jpg";
import footballPic from "./assets/images/football.jpg";
import surgisightPic from "./assets/images/surgisight.png";
const logotext = "MAAZ";
const meta = {
    title: "Maaz Alam",
    description: "I’m Maaz Alam, AI & Machine Learning undergraduate, currently based in India.",
};

const introdata = {
    title: "I’m Maaz Alam",
    animated: {
        first: "I train ML models",
        second: "I build AI web apps",
        third: "I develop computer vision systems",
    },
    description: "AI & Machine Learning undergraduate turning theoretical models into real-world applications. Passionate about computer vision, speech AI, and edge deployment.",
    your_img_url: profilePic,
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am an AI & Machine Learning undergraduate at VIT Chennai who likes turning theoretical models into things that actually work in the real world — an app, a browser extension, a dashboard someone can click on. What started as curiosity about how machines 'see' and 'understand' language has grown into a hands-on obsession with computer vision, speech AI, and the messy engineering work of getting models to run reliably outside a Jupyter notebook — on edge devices, in browsers, under real memory and latency constraints. Outside the lab, that same problem-solving instinct shows up in leading sponsorship and marketing for my college robotics club, and in building a combat robot good enough to beat teams from other institutes.",
};
const worktimeline = [{
        jobtitle: "AI-Software Engineering Intern",
        where: "Truminds Software Systems",
        date: "May 2026 - July 2026",
    },
    {
        jobtitle: "AI Engineering Intern",
        where: "Centre for Development of Telematics",
        date: "May 2025 - June 2025",
    },
    {
        jobtitle: "Marketing & Sponsorship Head",
        where: "Robotics Club, VIT Chennai",
        date: "Oct 2023 - May 2026",
    },
];

const skills = [{
        name: "Python",
        value: 95,
    },
    {
        name: "PyTorch / TensorFlow",
        value: 90,
    },
    {
        name: "Computer Vision",
        value: 90,
    },
    {
        name: "React.js / Node.js",
        value: 85,
    },
    {
        name: "C++ / Java",
        value: 80,
    },
];

const services = [{
        title: "AI & Machine Learning Development",
        description: "Building and deploying machine learning models, specializing in computer vision, instance segmentation, and speech AI using PyTorch, YOLOv8, and Whisper.",
    },
    {
        title: "Full-Stack Web Development",
        description: "Creating robust web applications, browser extensions, and interactive dashboards using React.js, Node.js, Express, and Flask.",
    },
    {
        title: "Edge AI Deployment",
        description: "Optimizing AI pipelines and models to run reliably on constrained edge hardware, integrating cloud and on-device processing.",
    },
];

const dataportfolio = [{
        img: volatilixPic,
        description: "VolatiliX - Explainable AI dashboard for stock analysis with LIME, SHAP, and surrogate models.",
        link: "https://github.com/maaz-king007/VolatiliX",
    },
    {
        img: grievancePic,
        description: "Government Grievance System - AI-powered platform for Hindi/Hinglish complaints.",
        link: "https://github.com/maaz-king007/Governement-Grievance-System",
    },
    {
        img: footballPic,
        description: "AI-Powered Football Analytics - Multi-object tracking engine using YOLOv5 and OpenCV.",
        link: "https://github.com/maaz-king007/Football-Non-Technical-Skill-Analysis",
    },
    {
        img: instagramPic,
        description: "Instagram AI Follow Request Agent - Chrome extension automating follow requests using Llama 3.3.",
        link: "https://github.com/maaz-king007/AI-powered-Instagram-Follow-Request-Analyzer-as-a-Chrome-Extension",
    },
    {
        img: surgisightPic,
        description: "SurgiSight - Real-time surgical video analysis using YOLOv8 instance segmentation.",
        link: "https://github.com/maaz-king007/SurgiSight",
    },
];

const contactConfig = {
    YOUR_EMAIL: "maazalam040@gmail.com",
    YOUR_FONE: "+91-8851085814",
    description: "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/maaz-king007",
    facebook: "",
    linkedin: "https://linkedin.com/in/maaz-alam040",
    twitter: "",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};