const { Schema, Types } = require("mongoose");

const commentSchema = new Schema(
    {
        // commentId: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId(),
        // },
        commentText: {
            type: String,
            required: "Cannot leave an empty comment!",
            minlength: 1,
            maxlength: 280,
            trim: true,
        },
        // Need to double check...
        username: {
            type: String,
            required: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                if (date) return date.toISOString().split("T")[0];
            }
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

// const Comment = model("Comment", commentSchema);

module.exports = commentSchema;