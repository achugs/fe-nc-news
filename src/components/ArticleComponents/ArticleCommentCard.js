import React from 'react';
import CommentVoting from './CommentVoting';


const ArticleCommentCard = (props) => {
  return (
    <ul>
      {props.comments.map(comment => {
        return (
          <li key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{new Date(comment.created_at).toLocaleString()}</p>
            <CommentVoting comment_id={comment.comment_id} votes={comment.votes} />
            {(props.username === comment.author ?
              <button onClick={() => props.handleDelete(comment.comment_id)}>Delete Comment</button> : '')}
          </li>
        );
      })}
    </ul>
  )

};

export default ArticleCommentCard;