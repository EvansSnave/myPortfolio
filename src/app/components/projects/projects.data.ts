import { Projects } from "./projects";

export const PROJECTS: Projects[] = [
  {
    id: 0,
    shortcut: '../../../assets/images/projects/books/12.png',
    title: 'Books: Capstone project frontend',
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
  }
];
