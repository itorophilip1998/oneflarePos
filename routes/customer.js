'use strict';
module.exports = function(app) {
  var customer = require('../controllers/customerController');

  // customer Routes
  app.route('/customers')
    .get(customer.list_all_customers)
    .post(customer.create_a_customer);

  app.route('/customers/:customerId')
    .get(customer.read_a_customer)
    .put(customer.update_a_customer)
    .delete(customer.delete_a_customer);
};