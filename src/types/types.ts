export interface List {
  id: string;
  date: string;
  text: string;
}

export interface DataList {
  id: string;
  title: string;
  startYear: string;
  endYear: string;

  list: List[];
}
