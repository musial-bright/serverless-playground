'use strict';

const AWS = require('aws-sdk');

class Storage {

  constructor(bucket, key) {
    this.config = {
      s3: { Bucket: bucket, Key: key }
    }
  }

  load(key) {
    var s3 = new AWS.S3();
    let promise = s3.getObject(this.config.s3).promise();

    return promise.then(s3Object => {
      return JSON.parse(s3Object.Body.toString())
    })
  }

  save(data) {

  }
};

module.exports = Storage;
