import { useEffect, useState } from 'react';
import { getUsers, itemLoadStep } from 'services/fetchApi';
import { TweetCard } from 'components/TweetCard/TweetCard';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import {
  TweetsListContainer,
  List,
  ListItem,
  CardBtn,
  FollowingBtn,
} from './TweetsList.styled';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const TweetsList = ({ all, follow, following }) => {
  const [users, setUsers] = useState([]);
  const [followingUsers, setFollowingUsers] = useLocalStorage('following', []);
  const [unfollowingUsers, setUnfollowingUsers] = useState([]);
  const [loadUsers, setLoadUsers] = useState(itemLoadStep);

  useEffect(() => {
    renderUsers();
  }, []);

  useEffect(() => {
    const followingUsersId = followingUsers.map(item => item.id);
    const subscribesUser = users.filter(
      item => !followingUsersId.includes(item.id)
    );
    setUnfollowingUsers(subscribesUser);
  }, [users, followingUsers]);

  async function renderUsers() {
    try {
      const response = await getUsers();
      setUsers(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleFollowBtn = id => {
    const selectUser = users.find(user => user.id === id);

    const isFollowing = followingUsers.find(user => user.id === selectUser.id);
    const itemIndex = followingUsers.indexOf(isFollowing);

    if (isFollowing) {
      followingUsers.splice(itemIndex, 1);
      setFollowingUsers(state => [...state]);
    } else {
      setFollowingUsers(state => [...state, selectUser]);
    }
  };

  const handleLoad = () => {
    return setLoadUsers(loadUsers + itemLoadStep);
  };

  const filteredOption = () => {
    let tweetCards = [];

    if (all === true) {
      return (tweetCards = [...users]);
    } else if (follow) {
      return (tweetCards = [...unfollowingUsers]);
    } else if (following) {
      return (tweetCards = [...followingUsers]);
    }
    return tweetCards;
  };

  const renderItems = filteredOption();

  return (
    <TweetsListContainer>
      <List>
        {renderItems
          .slice(0, loadUsers)
          .map(({ id, user, avatar, followers, tweets }) => {
            return (
              <ListItem key={id}>
                <TweetCard
                  name={user}
                  avatar={avatar}
                  followers={followers}
                  tweets={tweets}
                  id={id}
                  following={followingUsers}
                />

                {followingUsers.find(user => user.id === id) ? (
                  <FollowingBtn
                    type="button"
                    onClick={() => handleFollowBtn(id)}
                  >
                    following
                  </FollowingBtn>
                ) : (
                  <CardBtn type="button" onClick={() => handleFollowBtn(id)}>
                    follow
                  </CardBtn>
                )}
              </ListItem>
            );
          })}
      </List>

      {users.length > 0 && <LoadMoreButton onLoad={handleLoad} />}
    </TweetsListContainer>
  );
};
