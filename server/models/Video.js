const { Schema, model } = require("mongoose");
import commentSchema from './Comment';

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
  comments: [commentSchema],
});

const Video = model("Video", videoSchema);

module.exports = Video;
