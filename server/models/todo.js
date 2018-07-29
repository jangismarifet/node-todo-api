var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false  //default value for completedAt if no entry
  },
  completedAt: {
    type: Number,
    default: null //default value for completedAt if no entry
  }
});

module.exports = {Todo};
