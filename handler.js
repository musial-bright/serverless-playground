'use strict';

const Storage = require("./services/storage");
const loremIpsum = require('lorem-ipsum');

module.exports.load = (event, context, callback) => {
  let storage = new Storage(process.env.s3Bucket, 'store.json');
  storage.load().then(data => {
    const response = { statusCode: 200, body: JSON.stringify({ message: data }) };
    callback(null, response);
  }).catch(error => {
    console.error(error)
    callback(null, { statusCode: 404, body: null })
  });
};

module.exports.save = (event, context, callback) => {
  let storage = new Storage(process.env.s3Bucket, 'store.json');
  storage.save(event).then(s3response => {
    const response = { statusCode: 200, body: null };
    callback(null, response);
  }).catch(error => {
    console.error(error)
    callback(null, { statusCode: 422, body: null });
  });
};

module.exports.talk = (event, context, callback) => {
  let message = loremIpsum();
  callback(null, { statusCode: 200, body: message })
};
