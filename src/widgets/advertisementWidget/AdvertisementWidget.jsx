import { Typography, useTheme } from '@mui/material'
import React from 'react'
import FlexBetween from '../../components/flexBteween/FlexBetween';
import WidgetWrapper from '../widgetWrapper/WidgetWrapper';

export const AdvertisementWidget = () => {

  const { palette } = useTheme()
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="avertisement"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: ".75rem", margin: ".75rem 0" }}
        />
        <FlexBetween gap='.5rem'>
          <Typography color={main}>StoreCosmetics</Typography>
          <Typography color={medium}>storecosmetics.com</Typography>
        </FlexBetween>
        <Typography color={medium} m=".5rem 0">
          Your pathway to stunning and immaculate bauty and make sure your skin is exceptional.
        </Typography>
    </WidgetWrapper>
  )
}
