import axios from "axios";

const base = process.env.REACT_APP_BASE_URL;
export const LOGIN_URL = `${base}/auth/sign_in`;
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = `${base}/forgot_password`;

export const ME_URL = `${base}/me`;

export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password });
  // return (
  //   fetch("http://143.110.161.251:9000/api/admin/login",
  //   {
  //     method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email: email, password: password })
  //   }).then(res => console.log("i don post oo"))
  // )
}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
