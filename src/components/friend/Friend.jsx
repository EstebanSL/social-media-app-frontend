import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFriends } from '../../state';
import FlexBetween from '../../components/flexBteween/FlexBetween';
import { UserImageWidget } from '../../widgets/userImageWidget/UserImageWidget';
import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material';

const Friend = ({ userId, friendId, name, subtitle, userPicturePath }) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const friends = useSelector((state) => state.auth.user.friends);

  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const isFriend = friends.find((friend) => friend._id === friendId);

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${_id}/${friendId}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
    dispatch(setFriends({ friends: data }));
  };

  return (
    <FlexBetween>
      <FlexBetween gap=".5rem">
        <UserImageWidget image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              '&:hover': {
                color: palette.primary.light,
                cursor: 'pointer',
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize=".75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      {userId !== friendId && (
        <IconButton
          onClick={() => {
            patchFriend();
          }}
          sx={{ backgroundColor: primaryLight, p: '.6rem' }}
        >
          {isFriend ? (
            <PersonRemoveOutlined sx={{ color: primaryDark }} />
          ) : (
            <PersonAddOutlined sx={{ color: primaryDark }} />
          )}
        </IconButton>
      )}
    </FlexBetween>
  );
};

export default Friend;
