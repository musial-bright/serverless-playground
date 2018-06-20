'use strict';

const AWS = require('aws-sdk');

class Storage {

  constructor(bucket, key) {
    this.config = {
      s3: { Bucket: bucket, Key: key }
    }
  }

  load(key) {
    let s3 = new AWS.S3();
    let promise = s3.getObject(this.config.s3).promise();

    return promise.then(s3Object => {
      return JSON.parse(s3Object.Body.toString())
    })
  }

  save(data) {
    let s3 = new AWS.S3();
    let config = Object.assign({}, this.config.s3, {
       Body: JSON.stringify(data),
       ACL: 'public-read-write'
      });
    let promise = s3.putObject(config).promise();

    return promise.then(response => {
      return response
    })
  }
};

module.exports = Storage;
