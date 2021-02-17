'use strict';

const GREETING = method => `Hello, ${method} Method!`;
module.exports.handler = async event => {
  console.log(`Event log:  `, event);
  const theMethod = event && event.requestContext && event.requestContext.http 
    ? event.requestContext.http.method 
    : 'TEST';
  return GREETING(theMethod);
};