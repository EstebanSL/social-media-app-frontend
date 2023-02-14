import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from '../../components/navbar';
import { UserWidget } from '../../components/userWidget/UserWidget';

export const HomePage = () => {
  const isNonMobileScreen = useMediaQuery('(max-width: 768px)');
  const { _id, picturePath } = useSelector((state) => state.auth.user);

  return (
    <Box>
      <Navbar />

      <Box
        width="100%"
        padding="2rem 6%"
        display={!isNonMobileScreen ? 'flex' : 'block'}
        gap=".5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreen ? '26%' : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreen ? '42%' : undefined}
          mt={isNonMobileScreen ? undefined : '2rem'}
        ></Box>
        {isNonMobileScreen && (
          <Box
            flexBasis='42%'></Box>
        )}
      </Box>
    </Box>
  );
};
