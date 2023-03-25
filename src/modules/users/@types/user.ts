export interface UserApi {
  name: {
    title: string
    first: string
    last: string
  }
  login: {
    username: string
  }
  picture: {
    large: string
  }
}

export interface User {
  fullname: string
  username: string
  thumbnail: string
}
