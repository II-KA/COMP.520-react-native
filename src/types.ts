import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
  AddCategoryModal: { parentId: string };
};

export type BottomTabsParamList = {
  ClosetTab: NavigatorScreenParams<ClosetStackParamList>;
  CalendarTab: undefined;
};

export type ClosetStackParamList = {
  RootPage: undefined | Category;
  CategoryPage: Pick<Category, 'id' | 'name'>;
};

export type CategoryPageProps = NativeStackScreenProps<
  ClosetStackParamList,
  'CategoryPage'
>;

export type AddCategoryModalProps = NativeStackScreenProps<
  RootStackParamList,
  'AddCategoryModal'
>;

export interface Category {
  id: string;
  name: string;
  position: number;
  categories?: Category[];
  items?: Item[];
}

export type Item = {
  id: string;
  dateBought: Date;
  price: number;
  material: Material[];
  description?: string;
};

export type Material = string;
