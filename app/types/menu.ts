export type CategoryType = {
  id: string;
  display?: boolean;
  key: string;
  category?: string;
  description?: string;
  items: MenuItemType[];
};

export type MenuItemType = {
  key: string;
  image?: string;
  price?: number;
  description?: string;
};
