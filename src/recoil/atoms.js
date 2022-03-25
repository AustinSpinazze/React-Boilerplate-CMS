import { atom } from 'recoil';

export const shoppingCartState = atom({
  key: 'shoppingCartState',
  default: [],
});

export const orderHistoryState = atom({
  key: 'orderHistoryState',
  default: [],
});
