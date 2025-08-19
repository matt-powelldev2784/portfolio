export const projects = [
  {
    key: 0,
    title: 'SHARED CALENDAR',
    text: `Front End: React, Tanstack Router, TypeScript, Firebase Firestore, Firebase Authentication and TailwindCSS.
    Allows users to create, manage, and share calendar events.
    Users can send invitations to others, who can accept or decline event invites.
    User authentication is implemented with Firebase Authentication and OAuth providers.
    End to end tests implemented with playwright. Unite tests implemented with Vitest and React Testing Library.`,
    techImages: [
      { src: './img/svg_sprites/react_icon.svg', alt: 'React Icon' },
      { src: './img/svg_sprites/typescript_icon.svg', alt: 'TypeScript Icon' },
      { src: './img/svg_sprites/nodejs_icon.svg', alt: 'NodeJS Icon' },
    ],
    image: './img/projects/sharedcal.svg',
    imageAlt: 'Shared Calendar Logo',
    href: ' https://main.dg9hskkvk5sh.amplifyapp.com/ ',
  },
  {
    key: 1,
    title: 'THE TOY SHOP',
    text: `App built with NextJS, TypeScript, Sanity CMS, and Shopify.
    All Pages are server-side rendered using NextJS.
    Server actions are used to handle user interactions with the app.
    Some client side components are used at the edge of the tree for user interactivity.
    All Shopify data is fetched using the Shopify Storefront API using GraphQL queries.
    Sanity CMS is used to manage the promotional content in the app.
    End to end testing is implemented with Playwright.`,
    techImages: [
      { src: './img/svg_sprites/nextjs-icon.svg', alt: 'NextJS Icon' },
      { src: './img/svg_sprites/nodejs_icon.svg', alt: 'NodeJS Icon' },
      { src: './img/svg_sprites/js_icon.svg', alt: 'JavaScript Icon' },
      { src: './img/svg_sprites/typescript_icon.svg', alt: 'TypeScript Icon' },
      { src: './img/svg_sprites/playwright_icon.svg', alt: 'TypeScript Icon' },
    ],
    image: './img/projects/toyshop.svg',
    imageAlt: 'Toy Shop Logo',
    href: 'https://toytoystore.vercel.app/',
  },
  {
    key: 2,
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
    and removed from the DOM once they have traveled across the screen. A backend built using NodeJS and Express is 
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
