import { LoadMoreBtn } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ onLoad }) => {
  return <LoadMoreBtn onClick={onLoad}>Load more</LoadMoreBtn>;
};
