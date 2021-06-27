import axios from "axios";
const api = "";

export const signUp = (name: string, mailid: string, password: string) => {
  return axios
    .post(`${api}/signup`, { mailid, password, name })
    .then((res) => res.data);
};

export const logIn = async (mailid: string, password: string) => {
  const res = await axios.post(`${api}/signin`, { mailid, password });
  return res;
};

export const sendMessage = async (question: string) => {
  return axios.post(`${api}/chatbot`, { question }).then((res) => res);
};

export const predict = (news: string) => {
  return axios.post(`${api}/predict`, { news });
};
