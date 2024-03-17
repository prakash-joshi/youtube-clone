import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";
import { getVideoComments } from "../store/actions/comments.action";
import useGetVideoIdfromURL from "../customHooks/useGetVideoIdfromURL";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const commentsList = useSelector((state) => state.commentsList);
  const dispatch = useDispatch();
  const videoId = useGetVideoIdfromURL();

  const handleGetVideoComments = useCallback(() => {
    if (!commentsList[videoId]) {
      dispatch(getVideoComments(YOUTUBE_COMMENTS_API.replace("[VIDEO_ID]", videoId), videoId));
    }
  }, [commentsList, dispatch, videoId]);

  useEffect(() => {
    handleGetVideoComments();
  }, [dispatch, commentsList, handleGetVideoComments]);

  return (
    <section>
      {commentsList[videoId] && (
        <section>
          <span className="m-3 font-bold md:text-2xl text-lg">Comments</span>

          <CommentsList commentsList={commentsList[videoId]} />
        </section>
      )}
    </section>
  );
};

export default CommentsContainer;
