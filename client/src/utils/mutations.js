import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const ADD_COMMENT = gql`
    mutation addComment(
        $videoId: ID!
        $commentText: String!
        $username: String!
    ) {
        addComment(
            videoId: $videoId
            commentText: $commentText
            username: $username
        ) {
            _id
            videoLink
            title
            description
            videoAuthor
            authorLink
            courseLevel
            comments {
                _id
                commentText
                createdAt
            }
        }
    }
`;