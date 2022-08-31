const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, "Please use a valid email address!"],
        },
        password: {
            type: String,
            required: true,
            minlength: 4,
        },
        // Uncomment this later
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
    },
);

// Hashes the user's password
userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// Checks if the password is correct
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
};

const User = model("User", userSchema);

module.exports = User; 