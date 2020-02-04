# Birds

[Live Demo][heroku]

[heroku]: https://allbirdsclone.herokuapp.com/

Birds is an e-commerce shoe web app modelled after [Allbirds](https://www.allbirds.com/). It makes use of a Rails/PostgreSQL backend and makes use of both React.js and Redux on the frontend.

The project was designed and built within a two-week timeframe, though I plan to continue adding improvements over time.

## Technologies
## Backend
Rails was chosen due to ites out-of-the-box support for relational databases and RESTful architecture. Convenience and speed was prioritized over scalability because this project was built in a relatively short amount of time.The chosen technologies (Heroku, Rails, PostgresSQL, React, Redux) were determined to be adequate for the predicted load.

* Ruby on Rails
* PostgreSQL

## Frontend
Frontend Redux states are set up in a way such that there are separate reducers and actions for shoes, materials, users, and errors. This keeps the state normalized, easing the task of keeping things up-to-date with changes in the database.

 * React
 * Redux

## API Integration
In addition to the included packages, [AWS][AWS S3] was used for image uploading.

[AWS]: https://aws.amazon.com/

## Features
  * Secure frontend to backend user authentication using BCrypt.
  * Users can view pairs of shoes from the shoe collection.
  * Users can learn more about the materials used to produce the pair through material links.
  * Shoe catalog dynamically adapts to display the entire shoe collection in an appealing way.
  * Smooth loading and transitions through tabs and pages.
  * Implemented animations, gifs, and images for improved user experience.

### Shoe Collection

The shoe collection displays all available shoes for purchase to the site. The shoe selection is categorized explicitly through gender, material type, shoe model, and color. Many shoe combinations are possible.

## Project Design

Birds was designed with simplicity and elegance as its primary goals. Based on the two-week time frame, I decided to focus my efforts on completing a core set of features that ran smoothly and is bug-free. Keeping code manageable was prioritized over cloning every major feature of the target app, in the interest of providing a solid codebase to build upon for the future.

## Upcoming features

In the future I would like to add:
  * Branch pages/birds
  * Question, Answers, and Reviews pages/birds
  * Cart 

