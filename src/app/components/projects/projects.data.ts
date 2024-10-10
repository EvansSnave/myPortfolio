import { Projects } from "./projects";

export const PROJECTS: Projects[] = [
  {
    shortcut: '../../../assets/images/projects/budget/0.png',
    title: 'MyBudget',
    images: [
      '../../../assets/images/projects/budget/1.png', 
      '../../../assets/images/projects/budget/2.png', 
    ],
    description: `
      In this application built with React users can log in and log out using a Rails back end. There 
      are form validations to ensure data integrity in the PostgreSQL database. Here you can create a new 
      category for transactions selecting an icon and a name. Once the category is created you can click 
      in and there you can see all its transactions and the total amount of money spent. You can easily add 
      new transaction by clicking the 'Add transaction' button. You can specify the transaction information
      and it will be inmediately added to the total budget. 
    `,
    repositoryLink: 'https://github.com/EvansSnave/Budget_App',
    instructions: `
      To see this project:<br>
      1) In a command line go to your desire folder location<br>
      2) Type the command: git clone https://github.com/EvansSnave/Budget_App.git<br>
      3) Go to the folder in the command line and run npm install<br>
      4) Run npm start<br>
    `,
    activeLink: ''
  },
  {
    shortcut: '../../../assets/images/projects/pollution/2.png',
    title: 'Pollution metrics',
    images: [
      '../../../assets/images/projects/pollution/0.png', 
      '../../../assets/images/projects/pollution/1.png', 
    ],
    description: `
      This is a frontend website where users can see pollution information for several countries in europe. 
      Users will see a list of countries with some minor details such as the name od the country, its geographical 
      location and the abbreviation for its name. Above the countries list there is a search bar which can be used to filter 
      the list by country name. When a user click on any country they will be redirected to the details page. There all 
      relevant pollution data can be found. This project was built using React.
    `,
    repositoryLink: 'https://github.com/EvansSnave/react-air-pollution?tab=readme-ov-file',
    instructions: `
      To see this project:<br>
      1) In a command line go to your desire folder location<br>
      2) Type the command: git clone https://github.com/EvansSnave/react-air-pollution.git<br>
      3) Go to the folder in the command line and run npm install<br>
      4) Run npm start<br>
    `,
    activeLink: 'https://evanssnave.github.io/react-air-pollution/'
  },
  {
    shortcut: '../../../assets/images/projects/spaceTraveler/6.png',
    title: 'Space traveler',
    images: [
      '../../../assets/images/projects/spaceTraveler/0.png', 
      '../../../assets/images/projects/spaceTraveler/1.png', 
      '../../../assets/images/projects/spaceTraveler/2.png', 
      '../../../assets/images/projects/spaceTraveler/3.png', 
      '../../../assets/images/projects/spaceTraveler/4.png', 
      '../../../assets/images/projects/spaceTraveler/5.png', 
    ],
    description: `
    This is a project where users can see information about space ships and rockets. They can reserve 
    ships and join in missions just by clicking a button. It has a friendly user interface built with 
    Bootstrap. This project was made with React in a team of three people where we could learn a lot 
    about collaboration. I learned how to effectively use pull requests and commits to keep track of what 
    was happening and how we were progressing with the project. We sticked to the provided desing 
    thoroughly.
    `,
    repositoryLink: 'https://github.com/gdvl777/space_traveler',
    instructions: `
      To see this project:<br>
      1) In a command line go to your desire folder location<br>
      2) Type the command: git clone https://github.com/gdvl777/space_traveler.git<br>
      3) Go to the folder in the command line and run npm install<br>
      4) Run npm start<br>
    `,
    activeLink: ''
  },
  {
    shortcut: '../../../assets/images/projects/books/12.png',
    title: 'Boooks!',
    images: [
      '../../../assets/images/projects/books/0.png', 
      '../../../assets/images/projects/books/1.png', 
      '../../../assets/images/projects/books/2.png', 
      '../../../assets/images/projects/books/3.png', 
      '../../../assets/images/projects/books/4.png', 
      '../../../assets/images/projects/books/5.png', 
      '../../../assets/images/projects/books/6.png', 
      '../../../assets/images/projects/books/7.png', 
      '../../../assets/images/projects/books/8.png', 
      '../../../assets/images/projects/books/9.png', 
      '../../../assets/images/projects/books/10.png', 
      '../../../assets/images/projects/books/11.png', 
    ],
    description: `
      This is the frontend from my capstone project at Microverse. I worked with four developers from
      other countries remotely. This is a full-stack website where users can create an account and login/logout 
      easily. Implements responsive design and React best practices. Users can add and delete books seamlessly and 
      these changes will be displayed for all users. It counts with token authentication for account security and 
      a friendly design. I particularly helped creating the style for both desktop and mobile devices. I also 
      designed by myself the authentication/authorization system and the form validations. As for the backend 
      I created the API endpoints and model structure and also implemented the authentication there. I managed 
      image uploading.
      After we finished the project we had to present it to a lead industry developer and explain what we did<br><br>
      This project taught me a lot about collaboration and respect. I developed leadership skills and learned how to 
      work under pressure in a team. I learned from my team mates and also taught them technical skills. Overall, it was a 
      project where I was able to put to use all I have learned.
    `,
    repositoryLink: 'https://github.com/kiboma2021/capstone-project-front-end',
    instructions: `
      To see this project:<br>
      1) In a command line go to your desire folder location<br>
      2) Type the command: git clone https://github.com/kiboma2021/capstone-project-front-end<br>
      3) Go to the folder in the command line and run npm install<br>
      4) Run npm start<br>
      5) In a different folder run git clone https://github.com/kiboma2021/capstone-project-back-end.git<br>
      6) Delete rails.secrets and credentials.yml.enc and run rails credentials:edit<br>
      7) In database.yml update credentials with your postgreSQL account<br>
      8) Run rails db:create and rails db:migrate<br>
      9) Finally run rails s
    `,
    activeLink: ''
  },
  {
    shortcut: '../../../assets/images/projects/leagueGenius/0.png',
    title: '',
    images: [],
    description: ``,
    repositoryLink: '',
    instructions: '',
    activeLink: ''
  }
];
