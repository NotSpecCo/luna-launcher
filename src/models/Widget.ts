import type { WidgetType } from './WidgetType';

export type Widget<T> = {
  id: string;
  name: string;
  type: WidgetType;
  data: T;
};
