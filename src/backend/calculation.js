const mongoose = require('mongoose');

const CalculationSchema = new mongoose.Schema({

  pressure: {

    type: Number,

    required: true,

  },

  volume: {

    type: Number,

    required: true,

  },

  internalRadius: {

    type: Number,

    required: true,

  },

  length: {

    type: Number,

    required: true,

  },

  shellThickness: {

    type: Number,

    required: true,

  },

  hoopStress: {

    type: Number,

    required: true,

  },

  longitudinalStress: {

    type: Number,

    required: true,

  },

  designPressure: {

    type: Number,

    required: true,

  },

  sphericalRadius: {

    type: Number,

    required: true,

  },

  neckRadius: {

    type: Number,

    required: true,

  },

  headHeight: {

    type: Number,

    required: true,

  },

  headThickness: {

    type: Number,

    required: true,

  },

  allowableStress: {

    type: Number,

    required: true,

  },

  diameter: {

    type: Number,

    required: true,

  },

  createdAt: {

    type: Date,

    default: Date.now,

  },

});

module.exports = mongoose.model('Calculation', CalculationSchema); 