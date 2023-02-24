import { useEffect } from 'react';
import { QueryKey, useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { FetchingDataType, InfiniteFetchingType } from '@lib/types';
import { AxiosError } from 'axios';

const useInfiniteScroll = <T extends FetchingDataType[]>(
  queryKey: QueryKey,
  api: (body: InfiniteFetchingType) => Promise<T>,
  paramId?: number | string
) => {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } = useInfiniteQuery<
    T,
    AxiosError,
    T
  >(queryKey, ({ pageParam = 0 }) => api({ lastId: pageParam, paramId }), {
    getNextPageParam: (lastPage) => {
      return lastPage?.[lastPage.length - 1]?.id;
    },
  });

  const [ref, inView] = useInView();
  const resultData = data?.pages.flat();

  useEffect(() => {
    if (!data) return;

    const isLast = data.pages?.[data.pages.length - 1].length < 10;

    if (!isLast && hasNextPage && inView) fetchNextPage();
  }, [inView]);

  return { ref, resultData, isFetching, isLoading };
};

export default useInfiniteScroll;
