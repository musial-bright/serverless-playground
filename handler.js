'use strict';

module.exports.info = (event, context, callback) => {
  let name = event.name;
  let message = `Hello ${name}. Welcome to Lambda.`;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: message,
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
