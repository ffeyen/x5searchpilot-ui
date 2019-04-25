import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3030',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getLectures() {
    return apiClient.get('/lectures')
  },
  getLecture(id) {
    return apiClient.get('/lectures/' + id)
  },
  postBundle(lectureId, resultId, bundle) {
    return apiClient.post('/survey/' + lectureId + "/" + resultId, bundle)
  }
} 