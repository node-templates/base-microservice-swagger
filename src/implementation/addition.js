'use strict';

module.exports = {
  /**
   * Add numbers together from simple, flat path variables.
   */
  addNumbers: function addFromPath(x, y, responder) {
    if (x <= 0 || y <= 0) {
      responder.error({ message: 'Arguments must be positive integers' });
      return;
    }
    responder.success(x + y);
  },

  /**
   * Add numbers together using a complex structure input
   */
  addNumbersStructured: function addFromStructure(params, responder) {
    if (params.leftOperand <= 0 || params.rightOperand <= 0) {
      responder.error({ message: 'Arguments must be positive integers' });
      return;
    }

    responder.success(params.leftOperand + params.rightOperand);
  },

  /**
   * Add numbers together using an array of structures as input
   */
  addNumbersBulk: function addBulk(inputs, responder) {
    const results = [];
    for (const item of inputs.value) {
      if (item.leftOperand <= 0 || item.rightOperand <= 0) {
        responder.error({ message: 'Arguments must be positive integers' });
        return;
      }

      results.push(item.leftOperand + item.rightOperand);
    }
    responder.success(results);
  },
};
