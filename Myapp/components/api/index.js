import axios from "axios";
import { LoginUrl, SignupUrl, UserListUrl, CreateUserUrl } from "../constants/api_url";
export const login = (packet) =>
  axios
    .post(LoginUrl, packet)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const signup = (packet) =>
  axios
    .post(SignupUrl, packet)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const userList = () =>
  axios
    .get(UserListUrl)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const createUser = (packet) =>
  axios
    .post(CreateUserUrl, packet)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
