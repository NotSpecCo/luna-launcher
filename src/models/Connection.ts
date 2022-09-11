export type Connection = {
  active: boolean;
  name?: string;
  shortName?: string;
  level: 0 | 1 | 2 | 3 | 4 | 5;
  dataType?: string;
};
