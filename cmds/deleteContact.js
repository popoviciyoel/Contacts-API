//deleteContact.js
const axios = require('axios')

const url = 'http://localhost:3000/api/v1/contacts'

module.exports = (args) => {
    console.log('Calling DELETE')
    let {id} = args
    console.log(args)
    axios.delete(url + '/' + id, {}).then(resp => {
        console.log(resp.data)
    }).catch(() => {
        console.log('Couldnt delete')
    }
    )
  }
