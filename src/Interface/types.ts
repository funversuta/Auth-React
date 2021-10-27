export type Form = {
    email: "string",
  username: "string",
  firstName: "string",
  lastName: "string",
  birthday: "2021-10-14T06:48:00.385Z",
  password: "string"
}
export default interface IUser {
  id?: any | null,
  username?: string | null,
  email?: string,
  password?: string,
  roles?: Array<string>
}