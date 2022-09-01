const { gql } = require('apollo-server-express');

// add this at line 12 later after comment model has been made
// comments: [Comment]!

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		password: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Video {
		_id: ID
		videoLink: String
		title: String
		description: String
		videoAuthor: String
		authorLink: String
		courseLevel: String
		comments: [Comment]!
	  }

	type Comment {
		_id: ID
		commentText: String
		username: String
		createdAt: String
	}

	type Query {
		users: [User]
		user(username: String!): User
		videos(courseLevel: String!): [Video]
		video(videoId: ID!): Video
		userComments(username: String!): [Video]
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		addComment(
			videoId: ID!
			commentText: String!
			username: String!
		): Video
		removeComment(
			videoId: ID!
			commentId: ID!
		): Video
	}
`;

module.exports = typeDefs;
