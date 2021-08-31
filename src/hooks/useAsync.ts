import { useEffect, useState } from 'react';

type StatusType = 'idle' | 'pending' | 'success' | 'error';

const useAsync = <T>(asyncFunction: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<StatusType>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setStatus('pending'); // when useEffect start, means it is calling api,so now status will be 'pending'
    setData(null);
    setError(error);

    asyncFunction()
      .then((res) => {
        setData(res);
        setStatus('success'); // it is now calling api, so status will be 'success'
      })
      .catch((error) => {
        setData(null);
        setError(error);
        setStatus('error'); // it failed to calling api, so status will be 'error'
      });
  }, [asyncFunction]);

  return {
    data,
    error,
    isLoading: status === 'pending', // isLoading: true, if status pending
    isSuccess: status === 'success',
    isError: status === 'error',
  };
};

export default useAsync;
