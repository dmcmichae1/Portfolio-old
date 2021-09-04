import apilogo from '../assets2/apilogo.png';
import coding from '../assets2/coding.jpg';
import database from '../assets2/databaseicon.png';
import html from '../assets2/html.png';
import js from '../assets2/js.png';


const MySkills = [
  {
    skills1: [
      {
        Lenguage: "JavaScript",
        img: js,
        alt: "javascript",
        text: "React Js, Angular, jQuery, ES6"
      },
      {
        Lenguage: "CSS/HTML",
        img: html,
        alt: "html css",
        text: "HTML5, CSS3, Bootstrap"
      },
      {
        Lenguage: "DataBases",
        img: database, 
        alt: "database",
        text: "MongoDB, mySql"
      }
    ],
  },
  {
    skills2: [
      {
        Lenguage: "API",
        img: apilogo,
        alt: "API",
        text: "Axios, Ajax, Web Api's"
      },
      {
        Lenguage: "Other Libraries",
        img: coding,
        alt: "Other Libraries",
        text: "Node Js, Express, Git and more"
      },
    ],
  }
];

export default MySkills;