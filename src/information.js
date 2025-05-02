// Experience Data
export const experienceData = [
  {
    company: 'Nebula Logix',
    location: 'Texas, United States (Remote)',
    jobTitle: 'AWS Cloud Administrator, Back-End Engineer',
    date: 'March 2024 - Present',
    motion: 'left',
    contributions: [
      'Developed a cloud-native B2B SaaS web app that helps diverse businesses access opportunities with larger corporations.',
      'Reduced AWS cloud bill by 50% using CloudFormation templates to automate cloud infrastructure.',
      'Built backend Lambda functions for serverless logic.',
      'Wrote automated scripts for EC2-based task scheduling.',
    ],
  },
  {
    company: 'CvToCareer',
    location: 'Sydney, Australia (Remote)',
    jobTitle: 'Full-Stack Python & Next.js Developer (Tech Lead)',
    date: 'May 2023 - March 2024',
    motion: 'right',
    contributions: [
      'Built and maintained containerized Selenium bots for job application automation.',
      'Performed log analysis for optimization and debugging.',
      'Refactored systems to double processing speed and efficiency.',
      'Built full-stack internal tools using Next.js & Flask.',
      'Integrated AI models to auto-answer job screening questions.',
    ],
  },
  {
    company: 'Utosia',
    location: 'Lagos, Nigeria (Remote)',
    jobTitle: 'Backend Developer',
    date: 'March 2023 - March 2024',
    motion: 'left',
    contributions: [
      'Developed Express.js backend for a renewable energy e-commerce platform.',
      'Implemented energy calculation APIs for solar systems and EV products.',
    ],
  },
  {
    company: 'Freelance',
    location: 'Nigeria',
    jobTitle: 'Full-Stack Development & Browser Automation',
    date: 'February 2021 - July 2023',
    motion: 'right',
    contributions: [
      'Built various web apps for CMS, crypto data, and e-commerce clients.',
      'Automated workflows using Puppeteer, saving hours of manual labor.',
      'Stored automation results in MongoDB & SQL for analytics and review.',
    ],
  },
];

// icon imports
import awsIcon from './assets/icons8-aws-48.png';
import htmlIcon from './assets/icons8-html5-48.png';
import cssIcon from './assets/icons8-css3-48.png';
import jsIcon from './assets/icons8-javascript-48.png';
import tsIcon from './assets/icons8-typescript-48.png';
import nodeIcon from './assets/icons8-nodejs-48.png';
import expressIcon from './assets/icons8-express-js-48.png';
import pythonIcon from './assets/icons8-python-48.png';
import phpIcon from './assets/icons8-php-48.png';
import laravelIcon from './assets/icons8-laravel-48.png';
import flaskIcon from './assets/icons8-flask-48.png';
import reactIcon from './assets/icons8-react-48.png';
import nextIcon from './assets/icons8-nextjs-48.png';
import mongoIcon from './assets/icons8-mongo-db-48.png';
import golangIcon from './assets/icons8-go-logo-64.png';
import sqlIcon from './assets/icons8-sql-48.png';
import linuxIcon from './assets/icons8-linux-48.png';
import dockerIcon from './assets/icons8-docker-48.png';
import seleniumIcon from './assets/icons8-selenium-48.png';
import puppeteerIcon from './assets/puppeteer-logo-png_seeklogo-354674.png';
import gitIcon from './assets/icons8-git-48.png';
import githubIcon from './assets/icons8-github-48.png';
import redisIcon from './assets/icons8-redis-48.png';

export const skillIcons = [
  { icon: awsIcon, label: 'AWS', animation: 'from-top' },
  { icon: htmlIcon, label: 'HTML5', animation: 'from-top' },
  { icon: cssIcon, label: 'CSS3', animation: 'from-top' },
  { icon: jsIcon, label: 'Javascript', animation: 'from-top' },
  { icon: tsIcon, label: 'Typescript', animation: 'from-top' },
  { icon: nodeIcon, label: 'Node js', animation: 'from-top' },
  { icon: expressIcon, label: 'Express js', animation: 'from-top' },
  { icon: pythonIcon, label: 'Python', animation: 'from-top' },
  { icon: phpIcon, label: 'PHP', animation: 'from-left' },
  { icon: laravelIcon, label: 'Laravel', animation: 'from-left' },
  { icon: flaskIcon, label: 'Flask', animation: 'from-left' },
  { icon: reactIcon, label: 'React', animation: 'from-left' },
  { icon: nextIcon, label: 'Next js', animation: 'from-right' },
  { icon: mongoIcon, label: 'Mongodb', animation: 'from-right' },
  { icon: golangIcon, label: 'Golang', animation: 'from-right' },
  { icon: sqlIcon, label: 'SQL', animation: 'from-right' },
  { icon: linuxIcon, label: 'Linux', animation: 'from-bottom' },
  { icon: dockerIcon, label: 'Docker', animation: 'from-bottom' },
  { icon: seleniumIcon, label: 'Selenium', animation: 'from-bottom' },
  { icon: puppeteerIcon, label: 'Puppeteer', animation: 'from-bottom' },
  { icon: gitIcon, label: 'Git', animation: 'from-bottom' },
  { icon: githubIcon, label: 'Github', animation: 'from-bottom' },
  { icon: redisIcon, label: 'Redis', animation: 'from-bottom' },
];

// Certifications
import img from './assets/IMG-20250425-WA0014.jpg';

export const certifations = [
  {
    certificateImg: img,
    certifateName: 'AWS Solutions Architect Associates (SAA-C03)',
    certifateDate: '2023-2024',
  },
];

// Project data
import Image1 from './assets/Screenshot 2025-04-15 142414.jpg';
import Image2 from './assets/IMG-20250417-WA0014.jpg';
import Image3 from './assets/Screenshot 2025-04-15 165857.jpg';
export const projectData = [
  {
    name: 'BZ One',
    image: Image1,
    description:
      'BZ One is an all-in-one business management platform designed to help small businesses, enterprises, and project managers streamline operations and seize new opportunities.',
    contributions: [
      'I worked on the back-end to create VPCs, endpoints, cronjobs, etc to help users register and position their businesses for contracts from bigger companies.',
      'I refactored the app’s cloud infrastructure by replacing services with more suitable ones and optimizing instance types.',
      'This brought down costs from $290/month for 2 environments to $200 for 3 environments over 50% savings per environment.',
    ],
    link: 'https://bz-one.com/',
  },
  {
    name: 'CVToCareer',
    image: Image2,
    description:
      'CvToCareer mission is to empower job seekers with expert career services, transforming job searches into seamless, rewarding journeys and equipping them to thrive in todays market',
    contributions: [
      'I coded new features and refactored systems for aselenium python bot.',
      'I lead a team of developers to build the companywebsite that users used to connect and viewtheresults of the bot run on their information.',
      'I refactored the bots code for better concurrency, transitioned the bot from google spreadsheet based to SQL database and implemented caching systems like Redis. This improvement lead to the bots handling 100% more users per day than before due each instance of the bot doing more than one thing at a time.',
    ],
    link: 'https://cvtocareer.com/',
  },
  {
    name: 'utosia',
    image: Image3,
    description:
      'This project is a customer-focused e-commerce application dedicated to promoting and selling renewable energy products such as residential solar systems and electric vehicle (EV) solutions.',
    contributions: [
      'I worked on the the back-end of the app to set up all endpoints for e-commerce and power audit calculations.',
    ],
    link: 'https://www.utosia.com/',
  },
];

// Blog Data

export const blogData = [
  {
    title: 'My First Blog',
    date: '2025-04-15',
    author: 'Olaoluwa',
    image: '/assets/blog1.jpg',
    content:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptas reprehenderit a doloribus consequuntur eveniet, fugit, porro vero, ex quod ipsa? Recusandae iusto maxime laudantium nam, doloribus accusantium animi tempore?',
  },
  {
    title: 'Working with Cloud',
    date: '2025-04-10',
    author: 'Olaoluwa',
    content:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptas reprehenderit a doloribus consequuntur eveniet, fugit, porro vero, ex quod ipsa? Recusandae iusto maxime laudantium nam, doloribus accusantium animi tempore?',
  },
];
