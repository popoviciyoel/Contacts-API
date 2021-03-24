//help.js
const menus = {
    main: `
      To Run a RESTFUL request use the follwing:
      node ./bin/contactsclient --request [command] <options>
    
      [commands]
      GET .............. get contact from datatbase
      PUT  ............ updates a current contact from database,
      POST .............. adds a new contact to databse,
      DELETE .............. remove a current contact from database,
      help ............... show help menu for a command

      <options>
      --id .............. lets client select speicfied contact 
      --firstName ....... used to post or update a contacts first name,
      --lastName ....... used to post or update a contacts last name,
      --email ....... used to post or update a contacts email,
      --phoneNumber ....... used to post or update a contacts phone number`,

      

  }
  
  module.exports = (args) => {
    console.log("***********")
    console.log(menus.main)
  }