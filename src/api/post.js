import axios from './request'

export const getPosts = params => {
  return axios.get('/articles', { params })
}

export const getPost = params => {
  return axios.get(`/articles/${params.id}`, { params })
}
