'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CustomerSchema = new Schema({
  name: {
    type: String,
    required: 'Name of customer is required !'
  },
  company: {
    type: String,
    required: 'Kindly enter the name of the company'
  },
  opening_balance: {
    type: String,
    required: 'Kindly enter the opening balance'
  },
  phone: {
    type: String,
    required: 'Kindly enter the phone number'
  },
  email: {
    type: String,
    required: 'Kindly enter the email address'
  },
  due_limit: {
    type: String,

  },
  customer_group: {
    type: String,
  },
  address: {
    type: String,
    required: 'Kindly enter the address'
  },
  country: {
    type: String,
    required: 'Kindly enter the country'

  },
  state: {
    type: String,

  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['active', 'disabled']
    }],
    default: ['active']
  }
});

module.exports = mongoose.model('Customers', CustomerSchema);