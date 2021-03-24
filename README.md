# Contacts-API

A Back-end based contact-api app written in Node and Express.

This App is a simple a memory api with connection to a real database to achieve data persistence.

  * create a user on your Mongo Atlas instance that has Read and write to any database permission  
  * the user name `dbadmin`  
  *  the password `dbpassword`
  *  using mongoose, in the `app.js` file inside of the `MyContacts` directory is where I connected the database.
  * schema for a Contact model 
  * contacts router to defines all the endpoints in the `contactsRouter` module.  
  * handlers pass routes in the `contactsController` module.




A command line tool to interact with api is provided. Invoke a command line by running `npm start` . 
