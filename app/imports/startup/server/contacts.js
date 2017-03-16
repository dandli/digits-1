/**
 *
 * Created by danli on 3/16/2017.
 */

import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Panda',
    last: 'Express',
    address: '2560 McCarthy Mall, Honolulu, HI, 96822',
    telephone: '(808)956-7229',
    email: 'email@pandaexpress.com',
  },
  {
    first: 'L',
    last: 'L',
    address: '2500 Campus Road, Honolulu, HI, 96822',
    telephone: '(808)956-8111',
    email: 'email@landl.com',
  },
  {
    first: 'Stir',
    last: 'Fresh',
    address: '2465 Campus Road, Honolulu, HI, 96822',
    telephone: '(808)956-3663',
    email: 'email@stirfresh.org',
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
