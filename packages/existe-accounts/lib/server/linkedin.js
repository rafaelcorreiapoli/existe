// import { Accounts } from 'meteor/accounts-base'
// import { HTTP } from 'meteor/http'
// import { check } from 'meteor/check'
//
// import LinkedinAPIClass from 'node-linkedin'
// export const LinkedinAPI = LinkedinAPIClass(
//   Meteor.settings.linkedin.clientId,
//   Meteor.settings.linkedin.secret,
//   Meteor.settings.linkedin.redirectUri
// );
//
// export const getIdentity = (accessToken) => {
//   const linkedin = LinkedinAPI.init(accessToken)
//   const meSync = Meteor.wrapAsync(linkedin.people.me, linkedin.people)
//   let identity;
//   try {
//     identity = meSync();
//     return identity;
//   } catch (err) {
//     throw err
//   }
// }
//
//
// Accounts.registerLoginHandler('linkedin', ({ provider, token, expiresIn }) => {
//   if (provider !== 'linkedin') return;
//
//   check(provider, String)
//   check(token, String)
//   let identity;
//   try {
//     identity = getIdentity(token);
//   } catch (err) {
//     throw new Meteor.Error('get-identity-error')
//   }
//
//   const fields = {
//     expiresAt: (+new Date) + (1000 * expiresIn),
//     token,
//     ...identity
//   }
//
//   const existingUser = Meteor.users.findOne({ 'services.linkedin.id': identity.id });
//   let userId
//   if (existingUser) {
//     userId = existingUser._id;
//     const prefixedData = {};
//     _.each(fields, (val, key) => {
//       prefixedData[`services.linkedin.${key}`] = val;
//     });
//     Meteor.users.update({ _id: userId }, {
//       $set: prefixedData,
//     });
//   } else {
//     userId = Meteor.users.insert({
//       services: {
//         linkedin: fields
//       },
//       profile: {
//         nome: identity.firstName,
//         sobrenome: identity.lastName
//       },
//     });
//   }
//   return { userId };
// })
//
// export const exchangeOAuth = ({ code }) => {
//   let req
//   try {
//     req = HTTP.call('POST', 'https://www.linkedin.com/oauth/v2/accessToken', {
//       params: {
//         grant_type: 'authorization_code',
//         redirect_uri: Meteor.settings.linkedin.redirectUri,
//         client_id: Meteor.settings.linkedin.clientId,
//         client_secret: Meteor.settings.linkedin.secret,
//         code
//       }
//     })
//   } catch (err) {
//     throw new Meteor.Error('code-exchange-error', err)
//   }
//
//   if (req.statusCode === 200) {
//     const content = JSON.parse(req.content)
//     const token = content.access_token;
//     const expiresIn = content.expires_in;
//     return { token, expiresIn };
//   } else {
//     throw new Meteor.Error('code-exchange-request-failed', err)
//   }
// }
