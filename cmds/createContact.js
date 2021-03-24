//createContact.js
const axios = require('axios')

const url = 'http://localhost:3000/api/v1/contacts'

module.exports = (args) => {
    console.log('Calling POST')
    let {firstName, lastName, email, phoneNumber} = args
    console.log(args)
    axios.post(url, {
        firstName,
        lastName,
        email,
        phoneNumber
    }).then(resp => {
        console.log(resp.data)
    })
  }

