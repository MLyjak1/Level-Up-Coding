import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from "../utils/mutations";
import { QUERY_COMMENTS } from "../utils/queries";
import Auth from "../utils/auth";

const CommentForm = ({ videoId }) => {
    const [commentText, setCommentText] = useState("");
    const [characterCount, setCharacterCount] = useState(0);

    const [addComment, { error }] = useMutation(ADD_COMMENT, {
        update(cache, { data: { addComment } }) {
            try {
                const { comments } = cache.readQuery({ query: QUERY_COMMENTS });

                cache.writeQuery({
                    query: QUERY_COMMENTS,
                    data: { comments: [addComment, ...comments] },
                });
            } catch (err) {
                console.error(err);
            }
        }
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(event);

        try {

            console.log(videoId, commentText, Auth.getProfile().data.username);
            const { data } = await addComment({
                variables: {
                    videoId,
                    commentText,
                    username: Auth.getProfile().data.username,
                }
            });
            window.location.reload();
            console.log(data);
        } catch (err) {
            console.error(err);
            console.log(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "commentText" && value.length <= 280) {
            setCommentText(value);
            setCharacterCount(value.length);
        }
    };

    return (
        <div>
            <h4>Got a comment to leave?</h4>

            {/* TODO: Restyle it */}
            {Auth.loggedIn() ? (
                <>
                    <p className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''}`}>
                        Character Count: {characterCount}/280
                        {error && <span className="ml-2">{error.message}</span>}
                    </p>
                    <form
                        className="flex-row justify-center justify-space-between-md align-center"
                        onSubmit={handleFormSubmit}
                    >
                        <div className="col-12 col-lg-9">
                        <textarea
                            name="commentText"
                            placeholder="Add your comment here!"
                            value={commentText}
                            className="form-input w-100"
                            style={{ lineHeight: '1.5', resize: 'vertical' }}
                            onChange={handleChange}
                        ></textarea>
                        </div>

                        <div className="col-12 col-lg-3">
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow py-3" type="submit">
                            Submit Comment
                        </button>
                    </div>
                    </form>
                    
                </>
            ) : (
                <>
                    <p>
                        Dear friend, please <Link>log in</Link> or <Link to="/signup">sign up</Link> to make comments on this video!
                    </p>
                </>
            )}
        </div>
    );
};

export default CommentForm;