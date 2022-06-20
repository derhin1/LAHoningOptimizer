# Lost Ark Honing Optimizer

## Built With:

### Node, PostrgreSql, Express, React, MUI,

## Deployed Site: [https://honingsim.herokuapp.com/](https://honingsim.herokuapp.com/)

Site is a work in progress and I plan to add more features in the future.

EDIT: I was not aware of Heroku's row limitations for the free Hobby Dev plans and so they have disabled the ability to insert data which prevents updating the market prices. I have included instructions to run the app locally.

##### Getting Started

`npm install` to add project dependencies to your local machine.

Choose a name for your local database instance and edit `db/index.js` to assign the name to `DB_NAME`. Next, run `createdb <your-db-name-goes-here>` from your command line to spin up your database.

Seed the db:

1. `npm run db:build`
2. `npm run db:build2`

Database seeding only needs to be done once, and afterwards to build the react app and start the express server run `npm run start:dev`
