import React from 'react';
import { ImageWrapper, ImageSection } from './style';

const PostImage = () => {
  const images = [1, 2, 3];

  if (images.length === 2) {
    return (
      <ImageWrapper>
        <ImageSection>
          <img
            src="https://pbs.twimg.com/media/FhlwJXyacAIw7IZ?format=png&name=small"
            alt="이미지"
            className="first_image"
          />
        </ImageSection>
        <ImageSection>
          <img
            src="https://pbs.twimg.com/media/FhlwJXyacAIw7IZ?format=png&name=small"
            alt="이미지"
            className="second_image"
          />
        </ImageSection>
      </ImageWrapper>
    );
  }

  if (images.length === 3) {
    return (
      <ImageWrapper>
        <ImageSection>
          <img
            src="https://pbs.twimg.com/media/FhlwJXyacAIw7IZ?format=png&name=small"
            alt="이미지"
            className="first_image"
          />
        </ImageSection>
        <ImageSection>
          <img
            src="https://pbs.twimg.com/media/FhlwJXyacAIw7IZ?format=png&name=small"
            alt="이미지"
            className="center_image"
          />
        </ImageSection>
        <ImageSection>
          <img
            src="https://pbs.twimg.com/media/FhlwJXyacAIw7IZ?format=png&name=small"
            alt="이미지"
            className="second_image"
          />
        </ImageSection>
      </ImageWrapper>
    );
  }

  return (
    <ImageWrapper>
      <img
        src="https://pbs.twimg.com/media/FhlwJXyacAIw7IZ?format=png&name=small"
        alt="이미지"
        className="image_content"
      />
    </ImageWrapper>
  );
};

export default PostImage;
