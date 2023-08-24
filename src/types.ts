import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
  ExampleModal: undefined;
};

export type BottomTabsParamList = {
  ClosetTab: NavigatorScreenParams<ClosetStackParamList>;
  CalendarTab: undefined;
};

export type ClosetStackParamList = {
  FirstPage: undefined;
  SecondPage: undefined;
};
