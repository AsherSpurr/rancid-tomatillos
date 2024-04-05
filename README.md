# Rancid Tomatillos | Week 14 | Paired project
**Overview:**
Rancid Tomatillos is a web application designed to view a collection of movies. This project was designed as our first React.js application to get experience using the React library as well as the React Router library.

## Deploy Link
https://asherspurr.github.io/rancid-tomatillos

### `installation`
- `fork` this repo and clone it to your local machine
- `cd` into the repo
- `npm install` dependencies
- `npm start` to be automatically redirected to the site
- 
## Technologies used
React.js | React Router | JavaScript | HTML | CSS

## Testing
We used Cypress to simulate user interactions to identify issues early. Cypress offers an end-to-end testing framework that allows us to test both happy and sad paths, ensuring our application behaves as expected under various conditions. 

To see our E2E testing:
1. After `installation`
2. `cd rancid-tomatillos`
3. `npm start`
4. `Repeat step 2 in a new terminal window`
5. `npx cypress open`
6. Select e2e
7. Select the browser of your choosing
8. `click` on one of the specs
9. Watch the tests run!

### Videos
https://github.com/edwin-chalmers/rancid-tomatillos/assets/144856487/653233c7-bff0-4c59-8e53-fc9747192732

https://github.com/edwin-chalmers/rancid-tomatillos/assets/144856487/158806c6-38ee-4c13-86a8-28e9898f1692

## Collaberators 
- [Asher Spurr's GitHub](https://github.com/AsherSpurr)
- [Edwin Chalmers's GitHub](https://github.com/edwin-chalmers)

## Up Next 
- Refine the application's user interface by implementing more conditional rendering. This strategy aims to enhance the user experience by preventing elements from abruptly appearing on the screen once the data fetch request is completed. This approach will involve evaluating the current rendering logic and identifying opportunities to introduce conditional rendering in a way that elements are introduced more seamlessly into the UI.
- Add a feature to watch the trailers associated with each movie on their respective page.
- Add an option to rate the movie and keep track of which movies have been watched.
- Sort the movies according to genres to enhance user flow.
  
## Wins
A key achievement in our project was developing an intuitive and visually appealing user experience. We focused on making the UI user-friendly and engaging. To ensure the application looked and worked well across different devices, we implemented media queries for responsive design. This approach adjusted the UI for optimal viewing on desktops, tablets, and smartphones, improving accessibility and usability for a broader audience. Our efforts in UI design and responsive adaptation highlight our commitment to creating a practical and accessible application.

## Challenges
The biggest challenge in this project was the React learning curve, especially since it was our first time using it. Understanding React's component-based architecture and unidirectional data flow differed from traditional web development, requiring a mindset shift. Additionally, navigating best practices in React, such as component design and state management, involved filtering through tutorials and varied opinions. This led to a process of trial and error as we figured out what worked best for our project. Despite these challenges, our efforts deepened our React knowledge, setting a solid foundation for future development.


