export const projects = [
  {
    key: 0,
    title: 'HOBBY PAGE',
    text: `Hobby page made about comedian Rob Beckett. This project is built using HTML, JavaScript, and CSS. 
    Flexbox and media queries are utilised to provide a fully responsive layout. JavaScript is used to sort
    the data and manipulate the DOM to display the 5 most recent tours after today's date.`,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
    ],
    image: './img/projects/rob_beckett.jpg',
    imageAlt: 'Headshot of Rob Becket Comedian',
    href: 'https://matt-powelldev2784.github.io/founders_and_coders_hobby_page/',
  },
  {
    key: 1,
    title: 'COMMENT BOX',
    text: `Comment box project built using HTML, JavaScript, and CSS. Flexbox and media queries are utilised 
    to provide a fully responsive layout. The form is validated using some custom form validation logic. The
    most recent comments appear at the top of list. The comments include the name of the person posting as
    well as the date and time.`,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
    ],
    image: './img/projects/comment_box_logo2.svg',
    imageAlt: 'Comment Box Logo',
    href: 'https://matt-powelldev2784.github.io/founders_and_coders_comment_box/',
  },
  {
    key: 2,
    title: 'PROJECT GALLERY',
    text: `Project gallery cards made using HTML, CSS, Javascript and Flexbox.`,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
    ],
    image: 'img/projects/gallery.jpg',
    imageAlt: 'Three people sitting on bench in a gallery',
    href: 'https://matt-powelldev2784.github.io/founders_and_coders_project_gallery/',
  },
  {
    key: 3,
    title: 'MOVIE DATA',
    text: `Movie data project built using HTML, JavaScript, and CSS. The data persists in local storage. It uses the 
    file reader API to read and store a movie image which can be uploaded when adding a new movie using a form. I
    have defined logic to sort by number or text. Therefore, I have provided ascending and descending sort
    functionality by year, title, and rating. I have used a utility function to help with code readability and
    development speed, when creating DOM elements. This site frequently uses DOM manipulation to show or
    hide elements when browsing.`,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
    ],
    image: './img/projects/movie_bg6.png',
    imageAlt: 'Moive light and clap board',
    href: 'https://matt-powelldev2784.github.io/founders_and_coders_moive_data/',
  },
  {
    key: 4,
    title: 'SHOWCASE WEBSITE',
    text: `Showcase website project built using HTML, JavaScript, and CSS. Flexbox, grid and media queries are utilised 
    to provide a fully responsive layout. A light and dark theme can be toggled using the menu. SVG's sprites are used
    to allow the icons to change colour when the light or dark theme is toggled. I have used a carousel to display the
    projects. I have created touch detection logic, so the carousel can be swiped on touch devices, and used an
    intersection observer to toggle the display of a swipe icon to alert touch users of the swipe functionality.`,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
    ],
    image: './img/projects/showcase.png',
    imageAlt: 'Matthew Powell showcase title image',
    href: 'https://matt-powelldev2784.github.io/founders_and_coders_website/',
  },

  {
    key: 5,
    title: 'FEATURE GAME',
    text: `'Junior Dev Person' is an 8-bit style game built with an endlessly scrolling background effect. The game is 
    loosely based on the google dinosaur game and this YouTube tutorial: youtube.com/watch?v=47eXVRJKdkU&t=1280s. It 
    uses the requestAnimationFrame method to constantly update the DOM after each repaint. Game tokens are generated randomly
    and removed from the DOM once they have travelled across the screen. A backend built using NodeJS and Express is 
    used to store the high scores. Touch detection logic is used to enable play on touch devices.`,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
      { src: './img/svg_sprites/nodejs_icon.svg', alt: 'NodeJS Icon' },
    ],
    image: './img/projects/junior_dev_person_title.png',
    imageAlt: 'Junior Dev Person Title Image',
    href: 'https://matt-powelldev2784.github.io/founders_and_coders_feature_game/',
  },
  {
    key: 6,
    title: 'PLAYER REGISTRATION',
    text: `An application built for my amateur football team to manage player registration for training and match
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
    href: 'https://otsregister.netlify.app/',
  },
];
