var Contact = require('../models/contact');


exports.contact_list = function(req, res) {
  Contact.find({}, (err, contact) => {
    res.json(contact)
  })
};

exports.contact_detail = function(req, res) {
  //querying the database for a contact that matches the contactID parameter from the URL request
 //contact.findById(req.params.contactId, (err, contact) => {
   // res.json(contact)
    // when using middleware
      res.json(req.contact)
  //}) 
};

exports.contact_create_post =  function(req, res, next) {
 
    const { firstName, lastName, email, phoneNumber } = req.body
    
    const contact = Contact.create({
      firstName,
      lastName,
      email,
      phoneNumber,   
    })
    res.json(contact)
};


exports.contact_delete = function(req, res) {
  Contact.findById(req.params.contactId, (err, contact) => {
    // with middleware
    //  req.contact.remove(err => {
    contact.remove(err => {
        if(err){

            res.status(500).send(err)
        }
        else{
            res.status(204).send('removed')
        }
    })
  })
};


/* Right way to do an update as PUT*/
exports.contact_update = function(req, res) {
  Contact.findByIdAndUpdate(req.params.contactId,{$set:req.body},{new: true}, function(err, result){
    if(err){
        console.log('error in put');
        console.log(err);
    }
    console.log("RESULT: " + result);
    res.json(result);
  });
};