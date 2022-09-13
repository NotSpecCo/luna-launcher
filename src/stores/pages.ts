import { generateId } from 'onyx-ui/utils';
import { get, writable } from 'svelte/store';
import type { Page, Widget } from '../models';
import { Storage } from '../services/storage';

const defaultPages: Page[] = [
  {
    id: 'left',
    widgets: [
      { id: generateId(), type: 'clock', name: 'Clock', data: {} },
      // { id: generateId(), type: 'spacer', name: 'Spacer', data: { height: 30 } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '1' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '2' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '3' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '4' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '5' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '6' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '7' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '8' } },
      // { id: generateId(), type: 'appIcon', name: 'App Item', data: { appOrigin: '9' } },
    ],
  },
  {
    id: 'center',
    widgets: [
      { id: generateId(), type: 'clock', name: 'Clock', data: {} },
      { id: generateId(), type: 'spacer', name: 'Spacer', data: { height: 200 } },
      { id: generateId(), type: 'favApps', name: 'Favorite Apps', data: {} },
    ],
  },
  { id: 'right', widgets: [{ id: generateId(), type: 'clock', name: 'Clock', data: {} }] },
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

  return {
    subscribe: store.subscribe,
    getPage,
    addWidget,
    removeWidget,
  };
}

export const pages = createStore();
