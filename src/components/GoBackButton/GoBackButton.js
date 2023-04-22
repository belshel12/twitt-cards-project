import { Link } from 'react-router-dom';
import { GoBackBtn } from './GoBackButton.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const GoBackButton = () => {
  return (
    <Link to="/">
      <GoBackBtn type="button">
        <AiOutlineArrowLeft size="18" />
        <span>Go back</span>
      </GoBackBtn>
    </Link>
  );
};
