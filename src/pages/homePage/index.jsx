import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from '../../components/navbar';
import { PostsList } from '../../components/postsList/PostsList';
import { AdvertisementWidget } from '../../widgets/advertisementWidget/AdvertisementWidget';
import { FriendsListWidget } from '../../widgets/friendsListWidget/FriendsListWidget';
import { NewPostWidget } from '../../widgets/newPostWidget/NewPostWidget';
import { UserWidget } from '../../widgets/userWidget/UserWidget';

export const HomePage = () => {
  const isNonMobileScreen = useMediaQuery('(min-width: 1000px)');
  const { _id, picturePath } = useSelector((state) => state.auth.user);

  return (
    <Box>
      <Navbar />

      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreen ? 'flex' : 'block'}
        gap=".5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreen ? '26%' : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreen ? '42%' : undefined}
          mt={isNonMobileScreen ? undefined : '2rem'}
        >
          <NewPostWidget picturePath={picturePath} />
          <PostsList userId={_id} />
        </Box>
        {isNonMobileScreen && (
          <Box flexBasis="26%">
            <AdvertisementWidget />
            <Box m="2rem 0" />
            <FriendsListWidget userId={_id}/>
          </Box>
        )}
      </Box>
    </Box>
  );
};
