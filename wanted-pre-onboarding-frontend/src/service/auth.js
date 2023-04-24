import { setAccessToken } from '../util/localstorage';
import { instance } from './axios';

const postSignUp = async (body) => {
  await instance.post('/auth/signup', body);
};

const postSignIn = async (body) => {
  const { data } = await instance.post('/auth/signin', body);
  setAccessToken(data.access_token);
};

export { postSignUp, postSignIn };
