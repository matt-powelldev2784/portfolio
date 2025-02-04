export const projects = [
  {
    key: 0,
    title: 'NEXTJS TAKEAWAY APP',
    text: `A food takeaway application built to explore the main features of NextJS.
          Built with NextJS, Sanity CMS, TypeScript, Postgres, Prisma and TailwindCSS.
          The site utilises NextJS features for SSR, ISR, API creation, dynamic routes, and image optimisation.
          Menu items can be added, edited and deleted using the Sanity CMS.
          User authentication implemented with Next-Auth. Payment gateway integrated using Stripe.`,
    techImages: [
      { src: './img/svg_sprites/nextjs-icon.svg', alt: 'NextJS Icon' },
      { src: './img/svg_sprites/nodejs_icon.svg', alt: 'NodeJS Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/typescript_icon.svg', alt: 'TypeScript Icon' },
    ],
    image: './img/projects/curry_club_pink.svg',
    imageAlt: 'Curry Club Logo',
    href: 'https://curry-shop.vercel.app/',
  },
  {
    key: 1,
    title: 'AWS IMAGE LIBRARY',
    text: `Front end built with: React, Typescript, Redux and Tailwind CSS. Backend built with: Node, 
    Express and MongoDB. Server is deployed in an AWS EC2 Instance. Images are hosted in an AWS S3
    Bucket. Image thumbnail generation is facilitated by an AWS Lambda function. Secure pre-signed
    URL's are provided to upload the images directly to AWS S3 which minimises the load on the
    server. CICD implemented using Github actions. `,
    techImages: [
      { src: './img/svg_sprites/aws.png', alt: 'AWS Icon' },
      { src: './img/svg_sprites/nodejs_icon.svg', alt: 'NodeJS Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/react_icon.svg', alt: 'React Icon' },
      { src: './img/svg_sprites/typescript_icon.svg', alt: 'TypeScript Icon' },
      { src: './img/svg_sprites/redux_icon.svg', alt: 'Redux Icon' },
    ],
    image: './img/projects/re_dry.svg',
    imageAlt: 'ReDry Logo',
    href: 'http://aws-image-hosting-client.s3-website.eu-west-2.amazonaws.com',
  },
  {
    key: 2,
    title: 'PLAN ME',
    text: `A smartphone app built to manage the work schedule for window cleaning professionals. Built with: React Native, 
    Typescript and Firebase. Custom diary system built for scheduling of client appointments, with a feature for handling
    recurring entries. User authentication implemented using Google as a OAuth provider using firebase.`,
    techImages: [
      { src: './img/svg_sprites/react_icon.svg', alt: 'NextJS Icon' },
      { src: './img/svg_sprites/typescript_icon.svg', alt: 'TypeScript Icon' },
    ],
    image: './img/projects/plan_me.svg',
    imageAlt: 'PlanME Logo',
    href: 'https://planme-windows.netlify.app//',
  },
  {
    key: 3,
    title: 'MAX VOLTS',
    text: `Static website and invoicing dashboard built for electrical contractor. Built With: NextJs, Typescript, Redux, Prisma, Postgres and Tailwind CSS. 
    PDF invoices generated on demand in the browser. User authentication using OAuth providers and secure email links using Next-Auth. Dashboard built for easy 
    storage and retrieval of all client, product and invoicing data.`,
    techImages: [
      { src: './img/svg_sprites/nextjs-icon.svg', alt: 'NextJS Icon' },
      { src: './img/svg_sprites/nodejs_icon.svg', alt: 'NodeJS Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/typescript_icon.svg', alt: 'TypeScript Icon' },
      { src: './img/svg_sprites/redux_icon.svg', alt: 'Redux Icon' },
    ],
    image: './img/projects/max_volts.svg',
    imageAlt: 'Max Volts Logo',
    href: 'https://max-volts-preview.vercel.app/',
  },

  {
    key: 4,
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
];
