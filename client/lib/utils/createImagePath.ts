const createImagePath = (imgPath: string): string => {
  return `${process.env.NEXT_PUBLIC_API_KEY}/${imgPath}`;
};

export default createImagePath;
