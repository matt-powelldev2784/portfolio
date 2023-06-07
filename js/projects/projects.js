export const projects = [
  {
    key: 0,
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
    key: 1,
    title: 'NODEJS IMAGE LIBRARY',
    text: `A Node JS API Server built to enable a front end to serve an image library. Images are hosted in an AWS S3 Bucket.
          The node server is hosted in an AWS EC2 Instance. It uses an AWS Lamda function to generate image thumbnails. Secure pre-signed
          URL's are provided to upload the images directly to AWS S3 which minimises the load on the Node Server.`,
    techImages: [
      { src: './img/svg_sprites/aws.png', alt: 'AWS Icon' },
      { src: './img/svg_sprites/nodejs_icon.svg', alt: 'NodeJS Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
    ],
    image: './img/projects/aws.png',
    imageAlt: 'Headshot of Rob Becket Comedian',
    href: 'https://github.com/matt-powelldev2784/AWS_EC2_Lamda_Image_Library',
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
    image: './img/projects/junior_dev_person_title.png',
    imageAlt: 'Junior Dev Person Title Image',
    href: 'https://matt-powelldev2784.github.io/founders_and_coders_feature_game/',
  },
];
