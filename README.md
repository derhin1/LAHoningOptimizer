# Lost Ark Honing Optimizer

## Built With:

### Node, PostrgreSql, Express, React, MUI.

## Example Site: [https://honingsim.herokuapp.com/](https://honingsim.herokuapp.com/)

Site is a work in progress and I plan to add more features in the future.

EDIT: I was not aware of Heroku's row limitations for the free Hobby Dev plans and so they have disabled the ability to insert data which prevents updating the market prices. I have included instructions to run the app locally.

## Getting Started

1. Clone the repo locally

2. run `npm install` to add project dependencies to your local machine.

3. Choose a name for your local database instance and edit `db/index.js` to assign the name to `DB_NAME`. Next, run `createdb <your-db-name-goes-here>` from your command line to spin up your database.

4. Seed the db:

`npm run db:init`

Database seeding only needs to be done once

5.  Build the react app and start the express server run `npm run start:dev`
