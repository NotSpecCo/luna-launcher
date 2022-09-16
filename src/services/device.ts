import { App } from '../entities/App';
import type { Connection, Contact } from '../models';
import { generateId } from '../utils';
import { toConnection, toContact } from '../utils/mappers';

const Navigator: any = navigator;
const isDevice = !!Navigator.mozApps;

export class Device {
  static getApps(): Promise<App[]> {
    if (!isDevice)
      return Promise.resolve([
        new App({
          origin: '1',
          manifest: {
            name: 'aMy App 1',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: '2',
          manifest: {
            name: 'aMy App 2',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: '3',
          manifest: {
            name: 'bMy App 3',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: '4',
          manifest: {
            name: 'bMy App 4',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: '5',
          manifest: {
            name: 'cMy App 5',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: '6',
          manifest: {
            name: 'cMy App 6',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: '7',
          manifest: {
            name: 'My App 7',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: '8',
          manifest: {
            name: 'My App 8',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: '9',
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
        new App({
          origin: generateId(),
          manifest: {
            name: 'My App 9',
            description: '',
            version: '1.0.0',
          },
          preinstalled: false,
          removable: true,
          installTime: new Date().valueOf(),
          updateTime: new Date().valueOf(),
        }),
      ]);

    return new Promise((resolve, reject) => {
      let req = Navigator.mozApps.mgmt.getAll();
      req.onsuccess = function () {
        resolve(this.result.map((a) => new App(a)).sort((a, b) => a.name.localeCompare(b.name)));
      };
      req.onerror = function () {
        reject(new Error(this.error.name + ' ' + this.error.message));
      };
    });
  }
  static getContacts(): Promise<Contact[]> {
    if (!isDevice)
      return Promise.resolve([
        {
          id: '1',
          firstName: 'Garrett',
          lastName: 'Downs',
          fullName: 'Garrett Downs',
          phoneNumber: '215-555-1234',
          cleanPhoneNumber: '2155551234',
        },
        {
          id: '2',
          firstName: 'Bob',
          lastName: 'Smith',
          fullName: 'Bob Smith',
          phoneNumber: '215-555-1234',
          cleanPhoneNumber: '2155551234',
        },
      ]);

    return new Promise((resolve, reject) => {
      const results = [];
      let req = Navigator.mozContacts.getAll({ sortBy: 'name', sortOrder: 'ascending' });
      req.onsuccess = function () {
        if (this.result) {
          results.push(toContact(this.result));
          this.continue();
        } else {
          resolve(results);
        }
      };
      req.onerror = function () {
        reject(new Error(this.error.name + ' ' + this.error.message));
      };
    });
  }

  static getMobileConections(): Connection[] {
    return Navigator.mozMobileConnections.map((a) => toConnection(a));
  }

  static async call(number: string): Promise<void> {
    const res = await Navigator.mozTelephony.dial(
      number,
      Navigator.mozTelephony.CALL_TYPE_VOICE,
      false
    );
    // console.log('CALL RES', res);
    // const res2 = await res.result;
    // console.log('CALL RES2', res2);
  }
}
