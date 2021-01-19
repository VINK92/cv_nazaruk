import foto from "../img/photo_nv.jpg"
import cv from "../img/ViktoriiaNazarukCV.pdf"

export default {
  name: "Viktoriia",
  surname: "Nazaruk",
  fotoCV: foto,
  contacts: {
    phone: "+38093 949 28 09",
    email: "nazaruk.v92@gmail.com",
    github: "https://github.com/VINK92",
    linkedIn: "https://www.linkedin.com/in/nazaruk-v",
    download: cv,
  },
  techSkills: [
    "HTML5",
    "CSS3",
    "GIT/GitHub",
    "WebPack",
    "JavaScript",
    "React.js",
    "React Native",
    "Node.js",
    "Redux",
    "Axios",
    "Bootstrap",
    "REST API",
    "DOM-model",
    "Scrum",
  ], 
  softSkills: ["Fast learning", "Hardwork", "Problem solver", "Responsible", "Teamwork"],
  languages: ["English - intermediate", "Russian - native", "Ukrainian - native"],
  profassion: "Full Stack Developer",
  description:
    "I quickly learn new technologies and improve. On the way to being work on not only in the development of sites but also applications.",
  projects: [
    {
      name: "SLIM MOM",
      link: "https://slimmom-fixers.netlify.app/",
      technologies: "React.js, Redux ",
      about: "Application for those who want to lose weight by keeping a food diary and calculating the daily calorie intake."
    },
    {
      name: "FILMOTEKA",
      link: "https://gal4enock.github.io/Project-JS-filmoteka/",
      technologies: "JavaScript",
      about: "Application for searching movies, making a personal list to watch."
    },
    {
      name: "ICEC REAM",
      link: "https://vink92.github.io/parcel-project-template/",
      technologies: "HTML5, CSS3",
      about: "Business card site for home made ice cream."
    },
  ],
  experience: [
    {
      profassion: "CFO",
      company: "Mandarinki Express",
      time: "January 2017 - September 2020",
      duties: [
        "Organization of accounting from the beginning",
        "Work on improving accounting systems, writing technical specifications",
        "Control over the compilation and implementation of financial indicators",
        "Internal and external reporting",
      ],
    },
    {
      profassion: "AUDITOR",
      company: "Wörwag Pharma LLC",
      time: "2017 – present",
      duties: ["Checking external reports and all documentations", "Internal reporting about checking"],
    },
  ],
  education: [
    {
      university: "GO IT SCHOOL",
      major: "Bootcamp Full Stack developer",
      time: "Septermber 2020 - February 2021",
    },
    {
      university: "Kiev National University of Trade and Economics",
      major: "Master's degree, Accounting end audit",
      time: "Septermber 2009 - June 2015",
    },
  ],
}
