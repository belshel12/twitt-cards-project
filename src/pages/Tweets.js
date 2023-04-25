import { useState } from 'react';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { FilterOptions } from 'components/FilterOptions/FilterOptions';
import { ListWrapper } from './TweetPages.styled';

const Tweets = () => {
  const [filter, setFilter] = useState({
    all: true,
    follow: false,
    following: false,
  });

  const onSelectFilter = evt => {
    const option = evt.currentTarget.value;
    switch (option) {
      case 'all':
        setFilter({ all: true, follow: false, following: false });
        break;
      case 'follow':
        setFilter({ all: false, follow: true, following: false });
        break;
      case 'following':
        setFilter({ all: false, follow: false, following: true });
        break;
      default:
        setFilter({ all: true, follow: false, following: false });
    }
  };

  return (
    <div>
      <GoBackButton />
      <ListWrapper>
        <FilterOptions onSelect={onSelectFilter} />
        <TweetsList
          all={filter.all}
          follow={filter.follow}
          following={filter.following}
        />
      </ListWrapper>
    </div>
  );
};

export default Tweets;
