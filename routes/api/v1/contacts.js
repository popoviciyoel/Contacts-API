// module that will define all routes associated with contacts
var express = require('express')
var contactRouter = express.Router()
var Contact = require('../../../models/contact')


var contact_controller = require('../../../controllers/contactsController');


contactRouter.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

contactRouter.use('/', (req, res, next)=>{
  console.log("I run first before I retrieve all the contacts")
  
  //Request vs Params parameters
  //If you want to identify a resource, you should use Path Variable. 
  // But if you want to sort or filter items, then you should use query parameter.
  
  for (const key in req.query) {
    console.log(key, req.query[key])
  }
  next()
})

contactRouter.use('/:contactId', (req, res, next) => {
  console.log("lets tryh this")
  Contact.findById(req.params.contactId, (err,contact) => {
    if(err)
        res.status(500).send(err)
    else {
        // append to request object new property-value pair from db
        req.contact = contact;
        next()
    }
  })
})
contactRouter.route('/')
  .get(contact_controller.contact_list)  
  .post(contact_controller.contact_create_post);


contactRouter.route('/:contactId')
  .get(contact_controller.contact_detail)
  .delete(contact_controller.contact_delete)
  
contactRouter.route('/:contactId/update')
  .put(contact_controller.contact_update)


module.exports = contactRouter