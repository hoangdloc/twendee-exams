export interface IUserApi {
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

export interface IUser {
  title: string
  first: string
  last: string
  username: string
  thumbnail: string
}
