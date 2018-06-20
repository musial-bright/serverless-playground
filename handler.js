'use strict';

const AWS = require('aws-sdk');

class Storage {

  constructor() {
    this.config = {
      s3: { Bucket: "adams-serverless-files", Key: "store.json"}
    }
  }

  load(callback) {
    var s3 = new AWS.S3();
    s3.getObject(this.config.s3, (err, data) => {
      if (err) {
        console.err(err);
      } else {
        callback(data.Body.toString());
      }
    });
  }

  save(data) {

  }
}


module.exports.load = (event, context, callback) => {
  let storage = new Storage();
  storage.load((data) => {
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
  let storage = new Storage();
  storage.save(event.data);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "saved",
      input: event,
    }),
  };

  callback(null, response);
};
