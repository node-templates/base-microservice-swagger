'use strict';

/* The controller file with the name matching  x-swagger-router-controller from
   /contracts/api.yml is loaded for each operation. */

/**
 * Add two numbers together. Both values must be positive.
 *
 * @param {object}  req           - HTTP Request
 * @param {object}  res           - HTTP Response
 */
function addNumbers(req, res) {
  const x = req.swagger.params.x.value;
  const y = req.swagger.params.y.value;

  if (x <= 0) {
    throw new Error('Cannot add numbers when first number is not positive.');
  } else if (y <= 0) {
    throw new Error('Cannot add numbers when second number is not positive.');
  }

  const result = x + y;

  // Send result as JSON and end request
  res.json(result);
}

/* Functions must be exported from the class with the operationId from
   your swagger YML file */
module.exports = {
  addNumbers,
};
