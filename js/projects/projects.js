export const projects = [
  {
    key: 0,
    title: 'SHOWCASE WEBSITE',
    text: `Showcase website project built using HTML, Javascript and CSS. Flexbox, grid and media queries are utilised to 
    provide a fully repsonsive layout. A light and dark theme can be toggled using the menu. SVG sprites are used so the 
    icons also change color when the light or dark theme is toggled. I have used a carousel to display the projects. I
    have created touch detection logic so the carousel can be swiped on touch devices. `,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
    ],
    image: './img/projects/movie_bg6.png',
    imageAlt: 'Moive light and clap board',
  },
  {
    key: 1,
    title: 'MOVIE DATA',
    text: `Movie data project built using HTML, Javascript and CSS. The data persists in local storage. It uses the file reader api to 
    read and store a movie image which can be uploaded when adding a new movie using a form. I have defined logic to sort by number or
    text. Therefore I have provided ascending and descending sort functionality by year, title and rating. I have used a utility function 
    to help with code readability and development speed, when creating dom elements. This site uses frequently uses dom manipulation to 
    show or hide elements when navigating around.`,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
    ],
    image: './img/projects/movie_bg6.png',
    imageAlt: 'Moive light and clap board',
  },
  {
    key: 2,
    title: 'HOBBY PAGE',
    text: `Hobby page made about comedian Rob Beckett. This project is built using HTML, Javascript and CSS. Flexbox and media 
    queries are utilised to provide a fully repsonsive layout. Javascript is used to sort the data amd manipluate the DOM to display the 5 most
    recent tours after today's date.`,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
    ],
    image: 'img/projects/rob_beckett.jpg',
    imageAlt: 'Headshot of Rob Becket Comedian',
  },
  {
    key: 3,
    title: 'PROJECT GALLERY',
    text: `Project gallery cards made using HTML, CSS, Javascript and Flexbox.`,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
    ],
    image: 'img/projects/gallery.jpg',
    imageAlt: 'Three people sitting on bench in a gallery',
  },
  {
    key: 4,
    title: 'COMMENT BOX',
    text: `Comment box project built using HTML, Javascript and CSS. Flexbox and media queries are utilised to provide a 
    fully repsonsive layout. The form is validated using some custom form validation logic. The most recent comments
    appear at the top of list. The comments include the name of the person posting as well as the date and time.`,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
    ],
    image: './img/projects/comment_box_logo2.svg',
    imageAlt: 'Comment Box Logo',
  },
  {
    key: 5,
    title: 'PLAYER REGISTRATION APP',
    text: ` An application built for my amateur football team to manage player registration for training and match
            days. Frontend built with React, TypeScript, Redux Toolkit and Styled Components. It utilises React
            DND Library which provides users with drag and drop functionality. The backend is created with NodeJS,
            Express, Mongo DB, Express Validator, Bcrypt and JWT. CI/CD is delivered using Circle CI. Testing
            implemented with React Testing Library and Jest.`,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
      { src: './img/svg_sprites/nodejs_icon.svg', alt: 'NodeJS Icon' },
      { src: './img/svg_sprites/react_icon.svg', alt: 'React Icon' },
      { src: './img/svg_sprites/typescript_icon.svg', alt: 'TypeScript Icon' },
      { src: './img/svg_sprites/redux_icon.svg', alt: 'Redux Icon' },
    ],
    image: './img/projects/ot_crest.png',
    imageAlt: 'Old Throntonains FC Crest',
  },
];
