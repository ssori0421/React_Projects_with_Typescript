import { useEffect } from 'react';
import { getAccessToken } from '../util/localstorage';
import { useRouter } from './useRouter';
import { routePath } from '../routes';

const useRedirect = () => {
  const { routeTo, pathName } = useRouter();
  const isSignedIn = getAccessToken();

  useEffect(() => {
    if (pathName === routePath.todo && !isSignedIn) {
      routeTo(routePath.signin);
    }
    if (pathName !== routePath.todo && !!isSignedIn) {
      routeTo(routePath.todo);
    }
  }, [isSignedIn, pathName, routeTo]);
};

export default useRedirect;
