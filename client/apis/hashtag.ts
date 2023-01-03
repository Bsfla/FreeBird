import api from '@apis/base';

export const getHashtag = () => {
  return api.get({
    url: '/hashtags',
  });
};
