import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
  ExampleModal: undefined;
};

export type BottomTabsParamList = {
  ClosetTab: NavigatorScreenParams<ClosetStackParamList>;
  CalendarTab: undefined;
};

export type ClosetStackParamList = {
  RootPage: undefined | ClosetCategory;
  CategoryPage: ClosetCategory;
};

export type CategoryPageProps = NativeStackScreenProps<
  ClosetStackParamList,
  'CategoryPage'
>;

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
