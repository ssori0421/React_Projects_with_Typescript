const setAccessToken = (token) => {
  localStorage.setItem('access_token', JSON.stringify(token));
};

const getAccessToken = () => {
  const token = localStorage.getItem('access_token');
  if (token) {
    return token;
  } else {
    return null;
  }
};

export { setAccessToken, getAccessToken };
