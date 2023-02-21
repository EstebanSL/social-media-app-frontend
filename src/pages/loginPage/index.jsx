import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Form } from './Form';

export const LoginPage = () => {
  
  /** store the defined theme */
  const theme = useTheme();

  /**
   * Defines if the screen size is less than 1000px
   */
  const isNonMobileScreen = useMediaQuery('(min-width: 1000px)');

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 2rem"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SocialApp
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreen ? '50%' : '90%'}
        p="2rem"
        m="2rem auto"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: '1rem' }}>
          Welcome to socialApp, the social media app for socials
        </Typography>
        <br />
        <Form />
      </Box>
    </Box>
  );
};
