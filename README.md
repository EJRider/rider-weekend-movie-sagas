# Movie Storage

## Description

_Duration: 4 Days_

This program holds data for several movies. When the user loads the page it displays every movie currently in the database. The user can select a movie to get some additional details on the chosen movie such as the genres and a short description of the movie. 

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- Postico (https://eggerapps.at/postico2/)
- PostgreSQL (https://www.postgresql.org/)

## Installation


1. Create a database named `saga_movies_weekend`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. The user goes to local host
2. The user selects a movie they'd like to know more about
3. The user is moved to a description page for that movie
4. If the user would like to go back to the main page they click the "Back to Movie List" button


## Built With

- Node.js
- React
- Redux
- React-Redux
- Redux-Logger
- React-Redux-Dom
- Redux-saga
- Postico
- PostgreSQL
