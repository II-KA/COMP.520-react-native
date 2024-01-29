import React, { FC } from 'react';
import { Svg, Path, Rect, G } from 'react-native-svg';

// Icons are from https://pictogrammers.com/library/mdi

type IconProps = {
  color?: string;
  size?: number;
};

export const WardrobeIcon: FC<IconProps> = ({ color = 'teal', size = 40 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path d="M6 2C4.89 2 4 2.9 4 4V19C4 20.11 4.89 21 6 21V22H8V21H16V22H18V21C19.11 21 20 20.11 20 19V4C20 2.9 19.11 2 18 2H6M6 4H11V19H6V4M13 4H18V19H13V4M8 10V13H10V10H8M14 10V13H16V10H14Z" />
  </Svg>
);

export const CalendarMonthIcon: FC<IconProps> = ({
  color = 'teal',
  size = 40,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path d="M7 11H9V13H7V11M21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5M5 7H19V5H5V7M19 19V9H5V19H19M15 13V11H17V13H15M11 13V11H13V13H11M7 15H9V17H7V15M15 17V15H17V17H15M11 17V15H13V17H11Z" />
  </Svg>
);

export const BackIcon: FC<IconProps> = ({ color = 'teal', size = 40 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Rect fill="none" height="24" width="24" />
    <G>
      <Path d="M16.88,2.88L16.88,2.88c-0.49-0.49-1.28-0.49-1.77,0l-8.41,8.41c-0.39,0.39-0.39,1.02,0,1.41l8.41,8.41 c0.49,0.49,1.28,0.49,1.77,0l0,0c0.49-0.49,0.49-1.28,0-1.77L9.54,12l7.35-7.35C17.37,4.16,17.37,3.37,16.88,2.88z" />
    </G>
  </Svg>
);

export const DeleteIcon: FC<IconProps> = ({ color = 'teal', size = 40 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
  </Svg>
);
