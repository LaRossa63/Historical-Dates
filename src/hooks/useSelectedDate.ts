import { useEffect, useState } from 'react';
import Swiper from 'swiper';

import { data } from 'data/data';
import { DataList } from 'types/types';

export const useSelectedDate = () => {
  const [currentIndexPage, setCurrentIndexPage] = useState(0);
  const [counterPages, setCounterPages] = useState(0);
  const [allList, setAllList] = useState<DataList[] | null>(data);
  const [currentList, setCurrentList] = useState<DataList | null>(null);
  const [refActivePagination, setRefActivePagination] = useState<any>(null);

  useEffect(() => {
    setCounterPages(data && data.length);
  }, []);

  useEffect(() => {
    setCurrentList(data[currentIndexPage]);
  }, [currentIndexPage]);

  const handleChangeIndexPage = (event: Swiper) => {
    setCurrentIndexPage(event.activeIndex);
    setRefActivePagination(event.pagination.el.children[event.activeIndex]);
  };

  return {
    handleChangeIndexPage,
    allList,
    currentList,
    counterPages,
    currentIndexPage,
    refActivePagination,
  };
};
