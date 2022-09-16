import { generateId } from 'onyx-ui/utils';
import { get, writable } from 'svelte/store';
import type { Page, Widget } from '../models';
import { Storage } from '../services/storage';
import { moveArrayItem } from '../utils/moveArrayItem';

const defaultPages: Page[] = [
  {
    id: 'left',
    widgets: [
      { id: generateId(), type: 'clock', name: 'Clock', data: {} },
      { id: generateId(), type: 'wifi', name: 'Wi-Fi', data: {} },
      { id: generateId(), type: 'cellData', name: 'Cellular Data', data: {} },
      { id: generateId(), type: 'bluetooth', name: 'Bluetooth', data: {} },
      { id: generateId(), type: 'wifiTether', name: 'Wi-Fi Tether', data: {} },
      { id: generateId(), type: 'usbTether', name: 'USB Tether', data: {} },
      { id: generateId(), type: 'airplaneMode', name: 'Airplane Mode', data: {} },
      { id: generateId(), type: 'geolocation', name: 'Geolocation', data: {} },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '1' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '2' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '3' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '4' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '5' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '6' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '7' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '8' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '1' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '2' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '3' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '4' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '5' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '6' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '7' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '8' } },
    ],
  },
  {
    id: 'center',
    widgets: [
      { id: generateId(), type: 'search', name: 'Search', data: {} },
      { id: generateId(), type: 'clock', name: 'Clock', data: {} },
      // { id: generateId(), type: 'networkStats', name: 'Network Stats', data: { days: 1 } },
      // { id: generateId(), type: 'networkStats', name: 'Network Stats', data: { days: 7 } },
      // { id: generateId(), type: 'networkStats', name: 'Network Stats', data: { days: 31 } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '1' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '2' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '3' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '4' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '5' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '6' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '7' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '8' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '1' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '2' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '3' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '4' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '5' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '6' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '7' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '8' } },
      { id: generateId(), type: 'spacer', name: 'Spacer', data: { height: 4, width: 4 } },
    ],
  },
  {
    id: 'right',
    widgets: [
      { id: generateId(), type: 'clock', name: 'Clock', data: {} },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '1' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '2' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '3' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '4' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '5' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '6' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '7' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '8' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '9' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '1' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '2' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '3' } },
    ],
  },
];

function createStore() {
  const store = writable<Page[]>(Storage.getItem<Page[]>('pages') || defaultPages);

  store.subscribe((val) => {
    Storage.setItem('pages', val);
  });

  function getPage(pageId: string) {
    const pages = get(store);
    return pages.find((a) => a.id === pageId);
  }

  function addWidget(pageId: string, widget: Widget<any>) {
    const pages = get(store);
    const index = pages.findIndex((a) => a.id === pageId);
    pages[index].widgets.push(widget);

    store.set(pages);
  }

  function removeWidget(pageId: string, widgetId: string) {
    const pages = get(store);
    const index = pages.findIndex((a) => a.id === pageId);
    pages[index].widgets = pages[index].widgets.filter((a) => a.id !== widgetId);

    store.set(pages);
  }

  function moveWidget(pageId: string, widgetId: string, direction: 'up' | 'down') {
    const pages = get(store);
    const pageIndex = pages.findIndex((a) => a.id === pageId);
    const widgetIndex = pages[pageIndex].widgets.findIndex((a) => a.id === widgetId);
    const newIndex = direction === 'up' ? widgetIndex - 1 : widgetIndex + 1;

    moveArrayItem(pages[pageIndex].widgets, widgetIndex, newIndex);

    store.set(pages);
  }

  return {
    subscribe: store.subscribe,
    getPage,
    addWidget,
    removeWidget,
    moveWidget,
  };
}

export const pages = createStore();
