# Project_2

## To get up and running follow below!
If you have not gotten nighmarejs on your computer please run npm install not from the atom editor as there is an issue install the electron dependency when running install from atom terminal.

After you have the latest packages you will need to find the config file in the `src/db/db_config.js` Modify the development section to reflect you local db config.

Then find the knexfile.js and modify the development section there as well to reflect your local db settings.

After all that jazz is set up you can run `knex migrate:latest --env development` this will create the tables on your local db to mess around with while developing.

Finally to launch the app run `npm run dev` and you should be rockin and rollin! 

please reach out if you have any problems!
  
  
