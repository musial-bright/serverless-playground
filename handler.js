'use strict';

const Storage = require("./services/storage");

module.exports.load = (event, context, callback) => {
  let storage = new Storage(process.env.s3Bucket, 'store.json');
  storage.load().then(data => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: data,
        input: event,
      }),
    };

    callback(null, response);
  });
};

module.exports.save = (event, context, callback) => {
  let storage = new Storage(process.env.s3Bucket, 'store.json');
  storage.save(event).then(s3response => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "saved",
        input: event,
      }),
    };

    callback(null, response);
  })
};
