const { Schema, model } = require("mongoose");
// const commentSchema = require('./Comment');

const videoSchema = new Schema({
  _id:{
    type: Number,
    required: true,
    unique: true
  },
  videoLink: {
    type: String,
    // required: 'You need to leave a thought!',
    minlength: 1,
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
    videoAuthor: {
      type: String,
      required: true,
      trim: true,
    },
    authorLink: {
      type: String,
      required: true,
      trim: true,
    },
  courseLevel: {
    type: String,
    required: true,
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  //   get: (date) => {
  //     if (date) return date.toISOString().split("T")[0];
  //   },
  // },
  comments: [commentSchema],
  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     // userId: {
  //     //   type: String,
  //     //   required: true,
  //     // },
  //     userId: {
  //       type: Schema.Types.ObjectId,
  //       ref: "User",
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ]
});

const Video = model("Video", videoSchema);

module.exports = Video;
