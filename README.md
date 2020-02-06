# Birds

[Live Demo][heroku]

[heroku]: https://allbirdsclone.herokuapp.com/

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/35883332/73964650-76614780-48c7-11ea-9884-aad4805e97c3.gif)

Birds is an e-commerce shoe web app modelled after [Allbirds](https://www.allbirds.com/). It makes use of a Rails/PostgreSQL backend and makes use of both React.js and Redux on the frontend.

The project was designed and built within a two-week timeframe, though I plan to continue adding improvements over time.

## Technologies
## Backend
Rails was chosen due to its out-of-the-box support for relational databases and RESTful architecture. Convenience and speed was prioritized over scalability because this project was built in a relatively short amount of time.The chosen technologies (Heroku, Rails, PostgresSQL, React, Redux) were determined to be adequate for the predicted load.

* Ruby on Rails
* PostgreSQL

## Frontend
Frontend Redux states are set up in a way such that there are separate reducers and actions for shoes, materials, users, and errors. This keeps the state normalized, easing the task of keeping things up-to-date with changes in the database.

 * React
 * Redux

## API Integration
In addition to the included packages, [AWS S3](https://aws.amazon.com/) was used for image uploading.

## Features
* User Authentication (Login / Sign Up)
Login and Sign Up forms are rendered on same page with secure frontend to backend user authentication using BCrypt. Users can login or sign up to add selected shoes to his/her shopping cart and checkout.

![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/35883332/73965065-4c5c5500-48c8-11ea-8b4a-b82f1d028788.gif)


* Users can view all possible pairs of shoes from the shoe collection.
Shoe catalog dynamically adapts to display the entire shoe collection in an appealing way. The shoe selection is categorized explicitly through gender, and further through material type, shoe style, and shoe color. Many shoe combinations are possible.
![ezgif com-video-to-gif (3)](https://user-images.githubusercontent.com/35883332/73966028-15873e80-48ca-11ea-9ee3-d606e210a717.gif)
  * Users can learn more about the materials used to produce the pair through material links.

* Users can add created cart items to shopping cart and checkout.
Implemented CRUD feature with open and close cart modal and checkout system, which are accessible from every page. Only logged in users are able to create cart items on click of shoe size from the shoe index page, update the quantities of each cart item in the cart, remove each cart item, and checkout cart. I managed React state to render shopping cart when user clicks on the cart button, located in the navigation bar, when user clicks on a shoe size from the shoe index page. I integrated DOM manipulation and implemented animations and images for improved user experience.

* Users can learn more about the materials used to make the shoe by navigating through material links on click of material in the navigation bar.

* Smooth loading and transitions through tabs and pages.

## Upcoming Features
In the future I would like to add:
  * Navigate to additional information for each shoe item.
  * Filter shoe index items per specific shoe detail (color, material, and style).

## Project Design

Birds was designed with simplicity and elegance as its primary goals. Based on the two-week time frame, I decided to focus my efforts on completing a core set of features that ran smoothly and is bug-free. Keeping code manageable was prioritized over cloning every major feature of the target app, in the interest of providing a solid codebase to build upon for the future.



