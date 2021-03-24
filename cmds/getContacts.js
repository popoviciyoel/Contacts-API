//getContacts.js
const axios = require('axios')

const url = 'http://localhost:3000/api/v1/contacts'

module.exports = (args) => {
    console.log('Calling GET')
    let {id} = args
    if(id == null){
        axios.get(url, {}).then(resp => {
            console.log(resp.data)
        }).catch(() => {
            console.log('Couldnt get contacts')
        }
        )
    }else{
        axios.get(url + '/' + id, {}).then(resp => {
            console.log(resp.data)
        }).catch(() => {
            console.log('cant get contact')
        }
        )
    }
  }