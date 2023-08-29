const projectsData = [
  {
    id: 1,
    title: "Manga Verse",
    githubLink: "https://github.com/Ree-m/manga-verse",
    demoLink: "https://manga-verse-beta.vercel.app/",
    description:
      "Introducing Manga Verse, a full stack manga viewing app that prioritizes browsing manga and provides an immersive reading experience. With technologies like Next.js, Express.js, MongoDB, and Puppeteer, Manga Verse incorporates a microservice architecture. Users can enjoy seamless manga reading, user authentication, manga filtering, bookmarking, and access to detailed manga information. The app aims to continually improve by implementing server-side rendering, enhancing dynamic filtering, and delivering an optimized user experience. Immerse yourself in the captivating world of manga with Manga Verse.",
    ImageSrc: `/Assests/manga-verse/manga-verse-home-page.jpg`,
    sections: [
      {
        title: "Introduction",
        content: [
          "Introducing Manga Verse, a full stack manga viewing app that prioritizes browsing manga and provides an immersive reading experience. With technologies like Next.js, Express.js, MongoDB, and Puppeteer, Manga Verse incorporates a microservice architecture. Users can enjoy seamless manga reading, user authentication, manga filtering, bookmarking, and access to detailed manga information. The app aims to continually improve by implementing server-side rendering, enhancing dynamic filtering, and delivering an optimized user experience. Immerse yourself in the captivating world of manga with Manga Verse.",
        ],
      },
      {
        title: "Technologies Used",
        content: [
          "Next.js",
          "Express.js",
          "Node.js",
          "MongoDB",
          "Puppeteer",
          "Jikan API",
          "Render",
        ],
      },
      {
        title: "Key Features",
        content: [
          "1. Manga Reading: The app offers an immersive manga reading experience where users can seamlessly access and enjoy manga chapters. Dive into captivating storylines and stunning artwork as you effortlessly binge through your favorite manga series.",
          '2. Chapter Page: Clicking on a chapter in the manga details page displays the chapter\'s images. Users can easily navigate between chapters using "next chapter" and "previous chapter" buttons, or by selecting a specific chapter from the dropdown menu.',

          "3. User Authentication: The app incorporates NextAuth to facilitate user authentication. This allows users to create accounts, log in, and securely access personalized feautures.",

          "4. Manga Filtering: Users have the ability to filter manga based on various variables such as status (completed/ongoing), popularity, or genres.",

          "5. Bookmarking Manga: Registered users can bookmark manga they enjoy, providing a convenient way to save and access their favorite titles. This feature enhances the user experience by allowing users to easily track and revisit their preferred manga.",

          "6. Manga Details Page: This page provides comprehensive information about a specific manga, including its title, author, genres, manga cover, and a list of chapters. Registered users can also bookmark manga directly from this page.",

          "7. Manga Search: The app provides a search bar in the header, allowing users to search for specific manga. This feature enables quick and convenient discovery of desired manga.",
          "8. New Carousel: The app features a carousel highlighting the newest titles. Users can easily explore and discover trending manga titles in a visually appealing manner.",

          "These key features prioritize the manga reading aspect of the app, ensuring users can enjoy a user-friendly and personalized experience while exploring, filtering, bookmarking, and reading manga chapters effortlessly.",
        ],
        images: [
          "/Assests/manga-verse/manga-verse-chapters-list.jpg",
          "/Assests/manga-verse/manga-verse-chapter-page.jpg",
          "/Assests/manga-verse/manga-verse-login.jpg",
          "/Assests/manga-verse/manga-verse-genres.jpg",
          "/Assests/manga-verse/manga-verse-bookmark-page.jpg",
          "/Assests/manga-verse/manga-verse-manga-page.jpg",
          "/Assests/manga-verse/manga-verse-search.jpg",
          "/Assests/manga-verse/manga-verse-new-manga.jpg",
        ],
      },
      {
        title: "Implementation Details",
        content: [
          'Manga verse incorprates a microservice architecture with Kian Api and pupperteer. The first part uses Jiakn API to retrieve data. From Jikan API, data like title,author,summary,manga cover, for all manga is retrieved.Using the title retrieved from Jikan Api, the second part of the app "the scraper" runs. The scarper takes the title of the manga and using puppeteer scrapes a specific app and finds and returns a manga with a matching title. The data that is returend from the scarper is only the manga chapter list and the images of each chapter.',
        ],
      },
      {
        title: "Lessons Learned",
        content: [
          "Throughout the course of this project, my primary goal was to learn Next.js. As I dived into the development process, I gained insights and experience using Next.js' dynamic routing, server-side rendering, and API integration features. This allowed me to create a more dynamic and performant application.",

          "One important lesson I learned was the advantage of always utilizing server-side components unless client-side rendering was absolutely necessary, such as for onClick events or other interactive features. Server-side components, with their suspense boundaries, are more efficient and overall more user-friendly.Additionally, in server side components, loading state is eaiser to handle. Sadly, I realsized this towards the end of the project, so most of my components are yet to be server side components.",

          "One of the highlights of this project for me was the manga chapter page, where users can read any chapter of a specific manga. To achieve this functionality, I explored and learned Puppeteer, a tool that surprised me with its beginner-friendly nature.Using Puppeteer allowed me to efficiently scrape and display manga chapters, enriching the user experience and providing the main feature to the app.",

          "Overall, this project provided me with hands-on experience in Next.js, deepening my understanding of its features and benefits. I also gained insights into the importance of server-side components and the potential of tools like Puppeteer to enhance the functionality of web applications.",
        ],
      },
      {
        title: "Future Improvement",
        content: [
          "Based on the lessons learned from this project, there are some improvements I would like to make.",

          " 1. Convert most components to server-side components.By migrating a majority of the components to server-side rendering, I can take advantage of suspense boundaries to enhance the overall performance of the application. Additionally, server-side components provide automatic caching, which further improves performance by reducing unnecessary data fetching.",

          " 2. Enhance dynamic filtering.  Currently, the filtering functionality allows users to filter by only one variable at a time, such as genre, popularity, or status. To enhance the user experience, I plan to implement a more dynamic filtering system that enables users to apply multiple filters simultaneously.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Skinology",
    githubLink: "https://github.com/Ree-m/skinology-ecommerce-app",
    demoLink: "https://skinology.vercel.app/",
    description:
      "Skinology is a skincare e-commerce app that offers a seamless shopping experience for users. With its intuitive interface and comprehensive features, users can browse, search, save their favorite skincare products effortlessly. The app incorporates a scalable architecture, utilizing technologies such as React, Express, MongoDB, and Node.js. Skinology includes key features like admin interface for product management, user authentication, cart functionality, detailed product pages, search capabilities, and visually appealing carousels.",
    ImageSrc: `/Assests/skinology-ecommerce-app-client-onrender-com-1024x768desktop-4d90e6.jpg`,
    sections: [
      {
        title: "Introduction",
        content: [
          "Skinology is a skincare e-commerce app that offers a seamless shopping experience for users. With its intuitive interface and comprehensive features, users can browse, search, save their favorite skincare products effortlessly. The app incorporates a scalable architecture, utilizing technologies such as React, Express, MongoDB, and Node.js. Skinology includes key features like admin interface for product management, user authentication, cart functionality, detailed product pages, search capabilities, and visually appealing carousels.",
        ],
      },
      {
        title: "Technologies Used",
        content: ["Express.js", "React.js", "Node.js", "MongoDB", "Render"],
      },
      {
        title: "Implementation Details",
        content: [
          "The app follows an mvc architecture. The view is the client folder, the models and the controllers are in the api folder. The models and controllers each have a auth, cart and product files. The auth controller uses JWT,cookies and bcrypt to provide user auth. The product controller has functions for fetching products for users and for adding, editing, deleting for admins. The cart has functions for adding to cart, delteing from, updating quantity.",

          'In the implementation of the app, a Model-View-Controller (MVC) architecture was adopted to ensure a clear separation of concerns and maintain code organization. The "view" component is represented by the client folder, while the "models" and "controllers" are in the api folder. Within the api folder, you\'ll find separate models and controllers for authentication, cart management, and product handling.',

          "The authentication model and controller employ tools such as JWT (JSON Web Tokens), cookies, and bcrypt to ensure secure user authentication.",

          "The product model and controller contain functions for both users and administrators. Users can retrieve product information, while administrators enjoy additional features such as adding, editing, and deleting products.",

          "By implementing the MVC architecture and dividing the app into distinct models and controllers, the project benefits from a well-organized and scalable codebase. This structured approach ensures efficient data flow and enhances the overall maintainability of the application.",
        ],
      },
      {
        title: "Key Features",
        content: [
          "1. Admin Interface: The app incorporates two interfaces - admin and user. The admin interface enables administrators to perform essential actions such as adding, editing, and deleting products, providing full control over the product inventory.",

          "2. User Authentication: User authentication is implemented using JSON Web Tokens (JWT) and cookies. User passwords are securely encrypted using bcrypt and stored in the MongoDB database, ensuring the protection of user credentials.",

          "3. Cart Functionality: Registered users can add products to their cart, delete items, and update quantities as needed. The total price of all products int the cart is shown at the bottom of the cart page.",

          "4. Guest Cart: Non-registered users can also utilize a guest cart. This functionality is built using local storage, allowing guests to add items to their cart without requiring access to the app's database.",

          "5. Products Page: Clicking on a specific product leads to the product page, where detailed information such as the product name, brand, price, ingredient list, and usage instructions are provided. Users can also add the product to their cart directly from this page.",

          "6. Product Search: Users can easily search for products using the search bar located in the app's header. The search functionality allows users to search by brand name or product name, providing quick access to desired products.",

          "7. Main Carousel: The app's homepage features a visually appealing carousel displaying skincare posters. This carousel enhances the aesthetic appeal of the app's design.",

          '8. Best Products Carousel: The homepage also includes a carousel showcasing the best products. Right now, the carousel displays the oldest added products. However, in the future, I plan to implement a view system to highlight the most popular products. A "View All Products" button leads to a dedicated page where all the best products are displayed.',

          '9. New Products: The homepage highlights 12 of the newest products in a grid layout. Clicking on the "View All Products" button directs users to a dedicated page showcasing all recently added products.',

          "These key features offer an engaging and user-friendly experience, providing admin control, secure authentication, seamless cart functionality, detailed product pages, search capabilities, and visually appealing carousels to showcase the best and newest products.",
        ],
        images: [
          "/Assests/skinology/skinology-admin-only.jpg",
          "/Assests/skinology/skinology-auth-page.jpg",
          "/Assests/skinology/skinology-user-cart.jpg",
          "/Assests/skinology/skinology-guest-cart.jpg",
          "/Assests/skinology/skinology-product-details-page.jpg",
          "/Assests/skinology/skinology-search.jpg",
          "/Assests/skinology/skinology-main-carousel.jpg",
          "/Assests/skinology/skinology-best.jpg",
          "/Assests/skinology/skinology-new-section.jpg",
        ],
      },
      {
        title: "Lessons Learned",
        content: [
          "This project was the one with the biggest learning curve for me. I entered with only a basic understanding of CRUD operations and being an absolute beginner in React. However, by the end, I had become much more comfortable with the fundamental concepts of React and CRUD.",

          "Notably, this project marked my first experience working on a full-stack project independently from scratch. The hands-on nature of this proved to be a tremendous learning opportunity, it definitely highlighted the importance of practical application in deepening my understanding and skills.",

          "One crucial lesson that emerged was the significance of state management. While I primarily lifted the state up in this project, there was a realization of the need for more advanced state management solutions like Context or Redux. This motivated me to explore and learn how to effectively use the Context API, unlocking more efficient and scalable state management techniques.",

          "Additionally, I discovered the convenience of utilizing custom CSS properties for colors and fonts. By using custom CSS variables, I eliminated the repetition of typing hex values and font sizes repeatedly, resulting in more streamlined and maintainable styling practices.",

          "Additionally by working on this project, I gained experience and confidence in implementing CRUD (Create, Read, Update, Delete) operations and full-stack development. This hands-on experience provided me with a deep understanding of the intricate components and their proper placement within the architecture.",

          "This project has been instrumental in my growth as a developer. It expanded my knowledge of Express, React, state management, styling techniques, and overall full-stack development.",
        ],
      },
      {
        title: "Future Improvement",
        content: [
          "1. Add a Pop-up Notification: Enhance the app by displaying a pop-up notification when an item is added to the cart. This notification will provide a clear message and include options to view the cart or continue shopping, improving the user experience.",

          "2. Implement Loading States: Improve the app's interface by adding loading states for actions such as data fetching or processing. These loading states will keep users informed about ongoing processes and provide a smoother user experience.",

          "3. Introduce Category and Brand Filtering: Expand the filtering options by allowing users to filter products based on categories and brands. This enhancement will help users find specific products that match their preferences more effectively.",

          "4. User Profile: Enhance the user profile feature in the app by expanding it to include more details about the user. This includes information such as name, email and profile picture. Additionally, enable users to delete their accounts within the app.",

          "5. Pagination: Add pagination to the bets products page and new products page to increase performance.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Book Finder",
    githubLink: "https://github.com/Ree-m/book-finder",
    demoLink: "https://book-finder-tau.vercel.app/",
    description: "",
    ImageSrc: `/Assests/book-finder/book-finder-home.jpg`,
    sections: [
      {
        title: "Introduction",
        content: [
          "Introducing the book finder app! Built using React and powered by the Google Books API, this application offers a seamless and engaging experience for searching and exploring books. With its intuitive search function, users can easily find books based on various criteria such as title, author, or publishing date. Clicking on a specific book reveals comprehensive details on the book details page, including the cover image, title, summary, author, and publishing date.        ",
        ],
      },
      {
        title: "Technologies Used",
        content: ["React", "Google books API", "Css", "Vercel"],
      },
      {
        title: "Implementation Details",
        content: [
          "The app is built using React and utilizes the Google Books API to fetch book data. React provides a robust framework for building the user interface and managing component states, while the Google Books API serves as the source of book information.",
          "To implement the search function, the app sends search queries to the Google Books API and retrieves the corresponding search results. The search function is designed to allow users to search for books based on various criteria such as book title, author name, or publishing date.",
        ],
      },
      {
        title: "Key Features",
        content: [
          "1. Search Function: Users can utilize the search function to find books based on various criteria such as book title, author name, or publishing date. This feature enables users to easily discover specific books they are looking for.",

          "2. Book Details Page: Clicking on a particular book from the search results or any other section of the application leads to the book details page. On this page, users can view comprehensive information about the book, including the book cover, title, summary, author, and publishing date. This feature provides users with a comprehensive overview of the selected book.",

          "These features contribute to enhancing the user experience by enabling efficient book search and providing comprehensive details for each book within the application.",
        ],
        images: [
          "/Assests/book-finder/bookfinder-search.jpg",
          "/Assests/book-finder/book-finder-details-page.jpg",
        ],
      },
      {
        title: "Lessons Learned",
        content: [
          "This React app served as my first introduction to React. Throughout the development process, I gained valuable experience in utilizing React hooks, such as useState and useEffect, to manage state and handle side effects.",

          "Additionally, I learned an important lesson about responsive design. Initially, I approached responsiveness by starting with larger devices. However, I soon realized that this approach led to messy and convoluted CSS code due to the cascading nature of CSS. As a result, I adopted a new approach for future projects, starting with mobile devices and gradually scaling up to larger screens. This change in approach greatly improved the maintainability and cleanliness of my code.",
        ],
      },
      {
        title: "Future Improvement",
        content: [
          "Update CSS: Elevate the user experience by updating the CSS to achieve a more aesthetic and responsive design. Additionally, incorporate CSS modules to improve maintainability and organization.",
          "2. User Authentication: Enhance the app's security and user experience by implementing user authentication using technologies such as JSON Web Tokens (JWT) or passport.js. This will enable registered users to securely log in, access personalized features, and protect their account information.",

          "3. Bookmarking Feature: Provide registered users with the ability to bookmark their favorite books. This feature will allow users to save and easily access their preferred books, enhancing their overall reading experience and providing a convenient way to keep track of their reading list.",
        ],
      },
    ],
  },
];

export default projectsData;
