import React from 'react';
import CommentVoting from './CommentVoting';

const ArticleCommentCard = (props) => {
  console.log(props.comments)

  return (
    <ul>
      {props.comments.map(comment => {
        return (
          <li key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{comment.created_at.slice(0, 16)}</p>
            <CommentVoting comment_id={comment.comment_id} votes={comment.votes} />
          </li>
        );
      })}
    </ul>
  )

};

export default ArticleCommentCard;