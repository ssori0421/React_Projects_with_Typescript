import { ISignInRes, ISignReq } from '../types/auth';
import { setAccessToken } from '../util/localstorage';
import { instance } from './axios';

const postSignUp = async (body: ISignReq) => {
  await instance.post('/auth/signup', body);
};

const postSignIn = async (body: ISignReq) => {
  const { data }: { data: ISignInRes } = await instance.post(
    '/auth/signin',
    body
  );
  setAccessToken(data.access_token);
};

export { postSignUp, postSignIn };
