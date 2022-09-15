import { writable } from 'svelte/store';
import type { Contact } from '../models';
import { Device } from '../services/device';

function createStore() {
  const store = writable<Contact[]>([]);

  async function refresh() {
    const contacts = await Device.getContacts();
    store.set(contacts);
  }

  return {
    subscribe: store.subscribe,
    refresh,
  };
}

export const contacts = createStore();
