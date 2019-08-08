import React from 'react';

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
            <p>{comment.votes}</p>
          </li>
        );
      })}
    </ul>
  )

};

export default ArticleCommentCard;