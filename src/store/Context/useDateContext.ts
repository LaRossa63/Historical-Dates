import { createContext, useContext } from 'react';
import Swiper from 'swiper';
import { DataList } from 'types/types';

interface Test {
  handleChangeIndexPage: (event: Swiper) => void;
  allList: DataList[] | null;
  currentList: DataList | null;
  currentIndexPage: number;
  counterPages: number;
}

const defaultValue: Test = {
  handleChangeIndexPage: (event: Swiper) => {},
  allList: null,
  currentList: null,
  currentIndexPage: 0,
  counterPages: 0,
};

export const DateContext = createContext(defaultValue);

export const useDateContext = () => useContext(DateContext);
