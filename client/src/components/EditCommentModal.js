import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { QUERY_USER_COMMENTS } from "../utils/queries";
import { UPDATE_COMMENT } from "../utils/mutations";

const EditCommentModal = ({ videoId, commentId, defaultCommentText }) => {
	const [showModal, setShowModal] = useState(false);

	const [commentText, setCommentText] = useState(defaultCommentText);

	const handleTextChange = (event) => {
		setCommentText(event.target.value);
	};

	const [updateComment, { error }] = useMutation(UPDATE_COMMENT, {
		onCompleted ({data}) {
            console.log(data);
        },
        
        update(cache, { data: { updateComment } }) {
			try {
				cache.writeQuery({
					query: QUERY_USER_COMMENTS,
					data: { userComments : updateComment },
				});
			} catch (e) {
				console.error(e);
			}
		},
	});

	const handleUpdateComment = async (commentId, commentText) => {
		try {

            console.log("testing update");
            console.log(videoId, commentId, commentText);
			const { data } = await updateComment({
				variables: { videoId: videoId, commentId: commentId, commentText: commentText },
			});
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<button
				className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
				onClick={() => setShowModal(true)}
			>
				Edit Comment
			</button>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-3xl font-semibold">
										Edit Comment
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto">
									<input
										type="text"
										value={commentText}
										onChange={handleTextChange}
									/>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => {
                                            handleUpdateComment(commentId, commentText);
											setShowModal(false);
										}}
									>
										Save Changes
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};

export default EditCommentModal;
