const { Schema, model } = require("mongoose");

const videoSchema = new Schema({
  videoLink: {
    type: String,
    // required: 'You need to leave a thought!',
    minlength: 1,
  },
  //   videoAuthor: {
  //     type: String,
  //     required: true,
  //     trim: true,
  //   },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date) => {
      if (date) return date.toISOString().split("T")[0];
    },
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => {
          if (date) return date.toISOString().split("T")[0];
        },
      },
    },
  ],
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
