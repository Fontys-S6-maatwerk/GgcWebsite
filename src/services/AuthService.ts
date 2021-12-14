import axios from 'axios'

const url = 'http://localhost:5009/api/auth/'
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
}

class AuthService {
  login (email: string, password: string) {
    return axios
      .post(url + 'signin', {
        email,
        password
      },
      {
        headers
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logout () {
    localStorage.removeItem('user')
  }

  register (firstname: string, lastname: string, email: string, password: string) {
    return axios.post(url, {
      firstname,
      lastname,
      email,
      password
    })
  }
}

export default new AuthService()
