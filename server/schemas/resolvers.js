const { AuthenticationError } = require("apollo-server-express");
const { User, Video } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        users: async () => {
            // Add in comments model
            return User.find().populate('comments');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('comments');
        },
        videos: async (parent, { courseLevel }) => {
            return Video.find({ courseLevel: courseLevel });
        },
        video: async (parent, { videoId }) => {
            return Video.findOne({ _id: videoId });
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {

            // Creates the user
            const user = await User.create({ username, email, password});

            // Signs a JSON Web Token and logs the user in after they are created
            const token = signToken(user);

            // Return an "Auth" object of the signed token and user's info
            return { token, user };
        },

        login: async (parent, { email, password }) => {

            // Looks up user by their unique email
            const user = await User.findOne({ email });

            // If there is no user with that email address, return Authentication error message
            if (!user) {
                throw new AuthenticationError('No user is found with this email address!');
            }

            // If user is found, check if the password they provided is correct
            const correctPassword = await user.isCorrectPassword(password);

            // If the password is incorrect, return Authentication error m
            if (!correctPassword) {
                throw new AuthenticationError('Incorrect password.');
            }

            // If the provided email and password are correct, sign user into the app with a JWT
            const token = signToken(user);

            // Return an "Auth" object that consists of the signed token and user's info
            return { token, user };
        },
        addComment: async (parent, { videoId, commentText, username }) => {
            return Video.findOneAndUpdate(
                {_id: videoId },
                {
                    $addToSet: { comments: { commentText, username } },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        // removeComment: async (parent, { videoId, commentId }) => {
        //     return Video.findOneAndUpdate(
        //         { _id: videoId },
        //         {
        //             $pull: { comments: { _id: commentId } },
        //         }

        //     )
        // }
    },
};

module.exports = resolvers;