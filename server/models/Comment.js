const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    commentText: {
        type: String,
        required: "Cannot leave an empty comment!",
        minlength: 1,
        maxlength: 280,
        trim: true,
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
        }
    },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;