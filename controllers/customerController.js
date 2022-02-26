'use strict';

var mongoose = require('mongoose'),
  Customer = mongoose.model('Customers');

exports.list_all_customers = function(req, res) {
  Customer.find({}, function(err, Customer) {
    if (err)
      res.send(err);
    res.json(Customer);
  });
};

exports.create_a_customer = function(req, res) {
  var new_customer = new Customer(req.body);
  new_customer.save(function(err, Customer) {
    if (err)
      res.send(err);
    res.json(Customer);
  });
};


exports.read_a_customer = function(req, res) {
  Customer.findById(req.params.customerId, function(err, Customer) {
    if (err)
      res.send(err);
    res.json(Customer);
  });
};


exports.update_a_customer = function(req, res) {
  Customer.findOneAndUpdate({_id: req.params.customerId}, req.body, {new: true}, function(err, Customer) {
    if (err)
      res.send(err);
    res.json(Customer);
  });
};


exports.delete_a_customer = function(req, res) {
  Customer.remove({
    _id: req.params.customerId
  }, function(err, Customer) {
    if (err)
      res.send(err);
    res.json({ message: 'Customer successfully deleted' });
  });
};
