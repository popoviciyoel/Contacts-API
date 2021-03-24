//updateContact.js
const axios = require('axios')

const url = 'http://localhost:3000/api/v1/contacts'

module.exports = (args) => {
    console.log('Calling DELETE')
    let {id, firstName, lastName, email, phoneNumber} = args
    console.log(args)
    axios.put(url + '/' + id + '/update', {
        firstName,
        lastName,
        email,
        phoneNumber
    }).then(resp => {
        console.log(resp.data)
    }).catch(() => {
        console.log('Couldnt Update')
    }
    )
  }
