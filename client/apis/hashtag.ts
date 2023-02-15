import api from '@apis/base';
import { HashtagRankingType } from '@lib/types';

export const getHashtag = (): Promise<HashtagRankingType[]> => {
  return api.get({
    url: '/hashtags',
  });
};
