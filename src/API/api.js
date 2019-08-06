import axios from "axios";

export const request = axios.create({
  baseURL: "https://nc-hughes-news.herokuapp.com/api"
});

export const getArticles = async (query) => {
  const { data } = await request.get('/articles', { params: query })
  return data.articles;
}

export const getArticleCard = async (article_id) => {
  const { data } = await request.get(`/articles/${article_id}`)
  return data.article;
}