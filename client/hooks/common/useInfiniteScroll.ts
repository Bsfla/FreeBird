import { useEffect } from 'react';
import { QueryKey, useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { FetchingDataType } from '@lib/types';
import { AxiosError } from 'axios';

const useInfiniteScroll = <T extends FetchingDataType[]>(
  queryKey: QueryKey,
  api: (lastId?: number) => Promise<T>
) => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<
    T,
    AxiosError,
    T
  >(queryKey, ({ pageParam = '' }) => api(pageParam), {
    getNextPageParam: (lastPage) => {
      return lastPage?.[lastPage.length - 1]?.id;
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const [ref, inView] = useInView();
  const resultData = data?.pages.flat();

  useEffect(() => {
    if (!data) return;

    const isLast = data.pages?.[data.pages.length - 1].length < 10;

    if (!isLast && hasNextPage && inView) fetchNextPage();
  }, [inView]);

  return { ref, resultData };
};

export default useInfiniteScroll;
