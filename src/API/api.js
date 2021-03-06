import axios from "axios";

export const request = axios.create({
  baseURL: "https://nc-hughes-news.herokuapp.com/api"
});

export const getArticles = async query => {
  const { data } = await request.get("/articles", { params: query });
  return data.articles;
};

export const getArticleCard = async article_id => {
  const { data } = await request.get(`/articles/${article_id}`);
  return data.article;
};

export const getCommentsData = async article_id => {
  const { data } = await request.get(`/articles/${article_id}/comments`);
  return data.comments;
};

export const patchVoteIncrement = async (article_id, inc_votes) => {
  const { data } = await request.patch(`/articles/${article_id}`, {
    inc_votes
  });
  return data.article;
};

export const patchCommentVotes = async (comment_id, inc_votes) => {
  const { data } = await request.patch(`/comments/${comment_id}`, {
    inc_votes
  });
  return data.comment;
};

export const postComment = async ({ article_id, body, username }) => {
  const { data } = await request.post(`articles/${article_id}/comments`, {
    body,
    username
  });
  return data.comment;
};

export const deleteCommentById = async comment_id => {
  const { data } = await request.delete(`/comments/${comment_id}`);
  return data.comment;
};
