import { gql } from "@apollo/client";

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            comments {
                _id
                commentText
                username
                createdAt
            }
        }
    }
`;

export const QUERY_COMMENTS = gql`
    query getComments {
        comments {
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
                username
                createdAt
            }
        }
    }
`;

export const QUERY_VIDEOS = gql`
    query getVideos($courseLevel: String!) {
        videos(courseLevel: $courseLevel) {
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
                username
                createdAt
            }
        }
    }
`;


export const QUERY_SINGLE_VIDEO = gql`
    query getSingleVideo ($videoId: ID!) {
        video(videoId: $videoId) {
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
                username
                createdAt
            }
        }
    }
`;


export const QUERY_USER_COMMENTS = gql`
    query getUserComments ($username: String!) {
        userComments(username: $username) {
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
                username
                createdAt
            }
        }
    }
`;