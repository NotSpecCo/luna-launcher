import { App } from '../entities/App';
import type { Connection } from '../models';
import { generateId } from '../utils';
import { toConnection } from '../utils/mappers';

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
        // this.result[0].launch();
        // console.log('launched');
        console.log('raw', this.result);

        resolve(this.result.map((a) => new App(a)).sort((a, b) => a.name.localeCompare(b.name)));
      };
      req.onerror = function () {
        // Convert the DOMException to a human-readable error
        reject(new Error(this.error.name + ' ' + this.error.message));
      };
    });
  }

  static getMobileConections(): Connection[] {
    return Navigator.mozMobileConnections.map((a) => toConnection(a));
  }
}
