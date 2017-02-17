/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {type: 'INTEGER',
        primaryKey: true },
    first_name: {type:'STRING',
                required: true},
    last_name: {type:'STRING',
              required: true},
    birth_date: {type: 'INTEGER',
                type: 'date',
                required: true}
  }
};
