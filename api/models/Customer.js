/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: 'INTEGER',
    first_name: 'STRING',
    lastName: 'STRING',
    birth_date: 'DATE',

    required: true
  }
};

