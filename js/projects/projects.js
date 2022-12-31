export const projects = [
  {
    key: 0,
    title: 'Hobby Page',
    text: `Hobby page made about comedian Rob Beckett. This project is built using HTML, Javascript and CSS. Flexbox and media 
    queries are utilised to provide a fully repsonsive layout. Javascript is used to sort the data amd manipluate the DOM to display the 5 most
    recent tours after today's date.`,
    technologies: ['html', 'javascript', 'css'],
    image: 'img/projects/RobBecket.png',
  },
  {
    key: 1,
    title: 'Project Gallery',
    text: `Project gallery cards made using HTML, CSS, Javascript and Flexbox.`,
    technologies: ['html', 'javascript', 'css'],
    image: 'img/projects/gallery.jpg',
  },
  {
    key: 2,
    title: 'Comment Box',
    text: `Comment box project built using HTML, Javascript and CSS. Flexbox and media queries are utilised to provide a 
    fully repsonsive layout. The form is validated using some custom form validation logic. The most recent comments
    appear at the top of list. The comments include the name of the person posting as well as the date and time`,
    technologies: ['html', 'javascript', 'css'],
    image: 'img/projects/comment_box_logo2.svg',
  },
  {
    key: 3,
    title: 'Movie Data',
    text: `Movie data project built using HTML, Javascript and CSS. The data persists in local storage. It uses the file reader api to 
    read and store a movie image which can be uploaded when adding a new movie using a form. I have defined logic to sort by number or
    text. Therefore I have provided ascending and descending sort functionality by year, title and rating. I have used a utility function 
    to help with code readability and development speed, when creating dom elements. This site uses frequently uses dom manipulation to 
    show or hide elements when navigating around`,
    technologies: ['html', 'javascript', 'css'],
    image: 'img/projects/movie_bg6.png',
  },
  {
    key: 4,
    title: 'Full Stack Player Registrtion Project',
    text: `An application built for my amateur football team to manage player registration for training and match days.
            • Frontend built with React, TypeScript, Redux Toolkit and Styled Components
            • Utilises React DND Library which provides users with drag and drop functionality
            • Backend created with NodeJS, Express, Mongo DB, Express Validator, Bcrypt and JWT
            • CI/CD delivered using Circle CI
            • Testing Implemented with React Testing Library and Jest`,
    technologies: ['html', 'javascript', 'css', 'react', 'redux', 'typescript', 'nodejs'],
    image: 'img/projects/Old-Thorntonians-CrestOnly-2014_150dpi.png',
  },
];
