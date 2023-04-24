import { useNavigate } from 'react-router-dom';

/**
 * @description
 * - routeTo로 path값을 받아 페이지 이동
 * - pathName 현재 url path를 가져옴
 * @returns routeTo, pathName
 */
export const useRouter = () => {
  const router = useNavigate();

  return {
    routeTo: (path) => router(path),
    pathName: window.location.pathname,
  };
};
