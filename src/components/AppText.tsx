import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';
import { theme } from '../theme';

type AppTextType = TextProps & {
  fontFamily?: 'IBMPlexSans' | 'IBMPlexMono';
  fontWeight?: 100 | 200 | 300 | 400 | 600 | 700;
  italic?: boolean;
  size: 8 | 10 | 12 | 16 | 18 | 20;
};

const getFontFamily = ({
  fontFamily,
  fontWeight,
  italic,
}: Required<
  Pick<AppTextType, 'fontFamily' | 'fontWeight' | 'italic'>
>): keyof typeof theme => `${fontFamily}${fontWeight}${italic ? 'Italic' : ''}`;

export const AppText: FC<AppTextType> = ({
  fontFamily = 'IBMPlexSans',
  fontWeight = 400,
  italic = false,
  size,
  style,
  children,
  ...props
}) => (
  <Text
    {...props}
    style={[
      style,
      {
        fontFamily: theme[getFontFamily({ fontFamily, fontWeight, italic })],
        fontSize: size,
      },
    ]}>
    {children}
  </Text>
);
