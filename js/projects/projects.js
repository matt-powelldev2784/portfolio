export const projects = [
  {
    key: 0,
    title: 'AWS IMAGE LIBRARY',
    text: `Front end built with: React, Typescript, Redux and Tailwind CSS. Backend built with: Node, 
    Express and MongoDB. Server is deployed in an AWS EC2 Instance. Images are hosted in an AWS S3 Bucket.
    CICD implemented using Github actions.  Image thumbnail generation is facilitated by an AWS Lambda function.
    Secure pre-signed URL's are provided to upload the images directly to AWS S3 which minimises the load on the server.`,
    techImages: [
      { src: './img/svg_sprites/aws.png', alt: 'AWS Icon' },
      { src: './img/svg_sprites/nodejs_icon.svg', alt: 'NodeJS Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/react_icon.svg', alt: 'React Icon' },
      { src: './img/svg_sprites/typescript_icon.svg', alt: 'TypeScript Icon' },
      { src: './img/svg_sprites/redux_icon.svg', alt: 'Redux Icon' },
    ],
    image: './img/projects/re_dry.svg',
    imageAlt: 'AWS Logo',
    href: 'http://aws-image-hosting-client.s3-website.eu-west-2.amazonaws.com',
  },
  {
    key: 1,
    title: 'NEXTJS TAKEAWAY APP',
    text: `A food takeaway application built to explore the main features of NextJs.
Built with NextJs, TypeScript, Redux, Postgres, Prisma, TailwindCSS, Formik and Yup.
Utilised NextJs features for SSR, SSG, API creation, dynamic routes, and image optimisation.
User authentication implemented with OAuth providers and secure email links using Next-Auth.
Payment gateway integrated using Stripe.`,
    techImages: [
      { src: './img/svg_sprites/nextjs-icon.svg', alt: 'NextJS Icon' },
      { src: './img/svg_sprites/nodejs_icon.svg', alt: 'NodeJS Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/typescript_icon.svg', alt: 'TypeScript Icon' },
      { src: './img/svg_sprites/redux_icon.svg', alt: 'Redux Icon' },
    ],
    image: './img/projects/curry_club_pink.svg',
    imageAlt: 'Curry Club Logo',
    href: 'https://github.com/matt-powelldev2784/nextjs-food-take-away-app',
  },

  {
    key: 2,
    title: 'PLAYER REGISTRATION',
    text: `An application built for my amateur football team to manage player registration for training and match
            days. Frontend built with React, TypeScript, Redux Toolkit and Styled Components. It utilises React
            DND Library which provides users with drag and drop functionality. The backend is created with NodeJS,
            Express, Mongo DB, Express Validator, Bcrypt and JWT. CI/CD is delivered using Circle CI. Testing
            implemented with React Testing Library and Jest.`,
    techImages: [
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/nodejs_icon.svg', alt: 'NodeJS Icon' },
      { src: './img/svg_sprites/react_icon.svg', alt: 'React Icon' },
      { src: './img/svg_sprites/typescript_icon.svg', alt: 'TypeScript Icon' },
      { src: './img/svg_sprites/redux_icon.svg', alt: 'Redux Icon' },
    ],
    image: './img/projects/ot_crest.png',
    imageAlt: 'Old Throntonains FC Crest',
    href: 'https://otsregister.netlify.app/',
  },
  {
    key: 3,
    title: 'PLATFORM GAME',
    text: `'Junior Dev Person' is an 8-bit style game built with an endlessly scrolling background effect. It 
    uses the requestAnimationFrame method to constantly update the DOM after each repaint. Game tokens are generated randomly
    and removed from the DOM once they have travelled across the screen. A backend built using NodeJS and Express is 
    used to store the high scores. Touch detection logic is used to enable play on touch devices.`,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
      { src: './img/svg_sprites/nodejs_icon.svg', alt: 'NodeJS Icon' },
    ],
    image: './img/projects/junior.png',
    imageAlt: 'Junior Dev Person Title Image',
    href: 'https://matt-powelldev2784.github.io/founders_and_coders_feature_game/',
  },
  {
    key: 4,
    title: 'RECIPE WEBSITE',
    text: `Recipe Finder Website designed to help users search and discover a wide variety of recipes. It 
    provides a user-friendly interface to browse through an extensive collection of recipes, search for
    specific dishes or ingredients. It utilises async functions to peform API calls and handle loading and
    error states.`,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
    ],
    image: './img/projects/ilikeat.svg',
    imageAlt: 'Image of dummy',
    href: 'https://cazanelena.github.io/recipe-website/',
  },
  {
    key: 5,
    title: 'AGENCY WEBSITE',
    text: `A website made for a fictonal agency from the future. Backend created with NodeJS, Express and Nodemailer 
     which sends email repsonse when form is submitted.`,
    techImages: [
      { src: './img/svg_sprites/html_icon.svg', alt: 'HTML Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/css_icon.svg', alt: 'CSS Icon' },
      { src: './img/svg_sprites/nodejs_icon.svg', alt: 'NodeJS Icon' },
    ],
    image: './img/projects/robot.png',
    imageAlt: 'Image of dummy',
    href: 'https://generategeorgina.github.io/fac-agency/',
  },
];
