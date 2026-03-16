import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_BASE, // API 地址
  timeout: 5000,
})

export default api
