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

interface ClosetCategoryBasics {
  name: string;
  position: number;
}
interface ClosetCategoryWithCategories extends ClosetCategoryBasics {
  categories: ClosetCategory[];
  items?: never;
}

interface ClosetCategoryWithItems extends ClosetCategoryBasics {
  categories?: never;
  items: ClosetItem[];
}

export type ClosetCategory =
  | ClosetCategoryWithCategories
  | ClosetCategoryWithItems;

export type ClosetItem = {
  // identify with timestamp or picture or just generate an id?
  dateBought: Date;
  price: number;
  material: ClosetMaterial[];
  description?: string;
};

export type ClosetMaterial = string;
