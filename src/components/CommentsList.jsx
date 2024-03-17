const Comment = (props) => {
  console.log(props);
  const { authorDisplayName, textOriginal, authorProfileImageUrl } = props?.data;

  return (
    <div className="flex p-2">
      <img className="w-14 h-14 rounded-full" alt="user" src={authorProfileImageUrl} />
      <section className="align-middle ml-3">
        <section className="font-bold py-1">{authorDisplayName}</section>
        <section className="font-light text-sm">{textOriginal}</section>
      </section>
    </div>
  );
};

const CommentsList = (props) => {
  const { commentsList, isReply } = props;

  const handleCommentData = (comment) => {
    return isReply ? comment?.snippet : comment.snippet?.topLevelComment?.snippet;
  };

  return (
    commentsList &&
    commentsList.length > 0 &&
    commentsList.map((comment) => {
      return (
        <div key={comment.etag}>
          <Comment data={handleCommentData(comment)} />
          {comment?.replies?.comments && comment?.replies?.comments?.length > 0 && (
            <section className="pl-16">
              <CommentsList commentsList={comment?.replies?.comments} isReply={true} />
            </section>
          )}
        </div>
      );
    })
  );
};

export default CommentsList;
