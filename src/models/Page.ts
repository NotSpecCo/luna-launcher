import type { Widget } from './Widget';

export type Page = {
  id: string;
  widgets: Widget<any>[];
};
