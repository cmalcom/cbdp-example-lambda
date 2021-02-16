'use strict';

const GREETING = method => `Hello, ${method} Method!`;
module.exports.handler = async event => {
  console.log(`Event log:  `, event);

  return GREETING(event.httpMethod);
};