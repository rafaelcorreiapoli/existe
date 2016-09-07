import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'
const ROLES = ['admin', 'editor', 'researcher', 'viewer'];
const ADMIN_EMAIL = 'admin@admin.com';
const ADMIN_PASSWORD = 'q1w2e3';
const ADMIN_ROLE = 'admin';

Meteor.startup(() => {
  // Seed admin for development
  if (process.env.NODE_ENV === 'development') {
    if (!Meteor.users.findOne({
      'emails.address': ADMIN_EMAIL,
    })) {
      const userId = Accounts.createUser({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
      });
      Roles.addUsersToRoles(userId, ADMIN_ROLE);
    }
  }

  // Seed Roles
  Meteor.roles.remove({
    name: { $nin: ROLES },
  });
  ROLES.forEach((role, index) => {
    Meteor.roles.upsert({
      name: role,
    }, {
      name: role,
      hierarchy: index,
    });
  });
})
