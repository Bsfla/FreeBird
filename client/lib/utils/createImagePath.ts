import { baseURL } from 'config/config';

const createImagePath = (imgPath: string): string => {
  return `${baseURL}/${imgPath}`;
};

export default createImagePath;
