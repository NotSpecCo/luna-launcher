import { Navigator } from './navigator';

type SettingsLock = {
  closed: boolean;
  get: (key: string) => any;
  set: (obj: any) => any;
};

export class Settings {
  private static lock: SettingsLock;

  static getLock() {
    if (!this.lock || this.lock.closed) {
      this.lock = Navigator.mozSettings.createLock();
    }

    return this.lock;
  }

  static devtoolsOverlay = {
    async subscribe(callback: (enabled: boolean) => void) {
      return subscribe('devtools.overlay', callback);
    },

    unsubscribe(observer: (evt: any) => void) {
      unsubscribe('devtools.overlay', observer);
    },

    status(): Promise<boolean> {
      return getValue('devtools.overlay');
    },

    enable(): Promise<void> {
      return setValue('devtools.overlay', true);
    },

    disable(): Promise<void> {
      return setValue('devtools.overlay', false);
    },
  };

  static debugMode = {
    async subscribe(callback: (enabled: boolean) => void) {
      const cb = (value: string) => {
        callback(value !== 'disabled');
      };
      return subscribe('debugger.remote-mode', cb);
    },

    unsubscribe(observer: (evt: any) => void) {
      unsubscribe('debugger.remote-mode', observer);
    },

    async status(): Promise<boolean> {
      const status = await getValue<string>('debugger.remote-mode');
      return status === 'adb-devtools ';
    },

    enable(): Promise<void> {
      return setValue('debugger.remote-mode', 'adb-devtools');
    },

    disable(): Promise<void> {
      return setValue('debugger.remote-mode', 'disabled');
    },
  };

  static bluetooth = {
    async subscribe(callback: (enabled: boolean) => void) {
      return subscribe('bluetooth.enabled', callback);
    },

    unsubscribe(observer: (evt: any) => void) {
      unsubscribe('bluetooth.enabled', observer);
    },

    status(): Promise<boolean> {
      return getValue('bluetooth.enabled');
    },

    enable(): Promise<void> {
      return setValue('bluetooth.enabled', true);
    },

    disable(): Promise<void> {
      return setValue('bluetooth.enabled', false);
    },
  };

  static wifi = {
    async subscribe(callback: (enabled: boolean) => void) {
      return subscribe('wifi.enabled', callback);
    },

    unsubscribe(observer: (evt: any) => void) {
      unsubscribe('wifi.enabled', observer);
    },

    status(): Promise<boolean> {
      return getValue('wifi.enabled');
    },

    enable(): Promise<void> {
      return setValue('wifi.enabled', true);
    },

    disable(): Promise<void> {
      return setValue('wifi.enabled', false);
    },
  };

  static usbTether = {
    async subscribe(callback: (enabled: boolean) => void) {
      return subscribe('tethering.usb.enabled', callback);
    },

    unsubscribe(observer: (evt: any) => void) {
      unsubscribe('tethering.usb.enabled', observer);
    },

    status(): Promise<boolean> {
      return getValue('tethering.usb.enabled');
    },

    enable(): Promise<void> {
      return setValue('tethering.usb.enabled', true);
    },

    disable(): Promise<void> {
      return setValue('tethering.usb.enabled', false);
    },
  };

  static wifiTether = {
    async subscribe(callback: (enabled: boolean) => void) {
      return subscribe('dom.mozApps.signed_apps_installable_from', callback);
    },

    unsubscribe(observer: (evt: any) => void) {
      unsubscribe('dom.mozApps.signed_apps_installable_from', observer);
    },

    status(): Promise<boolean> {
      return getValue('dom.mozApps.signed_apps_installable_from');
    },

    enable(): Promise<void> {
      return setValue('dom.mozApps.signed_apps_installable_from', true);
    },

    disable(): Promise<void> {
      return setValue('dom.mozApps.signed_apps_installable_from', false);
    },
  };

  static cellularData = {
    async subscribe(callback: (enabled: boolean) => void) {
      return subscribe('ril.data.enabled', callback);
    },

    unsubscribe(observer: (evt: any) => void) {
      unsubscribe('ril.data.enabled', observer);
    },

    status(): Promise<boolean> {
      return getValue('ril.data.enabled');
    },

    enable(): Promise<void> {
      return setValue('ril.data.enabled', true);
    },

    disable(): Promise<void> {
      return setValue('ril.data.enabled', false);
    },
  };

  static airplaneMode = {
    async subscribe(callback: (enabled: boolean) => void) {
      return subscribe('ril.radio.disabled', callback);
    },

    unsubscribe(observer: (evt: any) => void) {
      unsubscribe('ril.radio.disabled', observer);
    },

    status(): Promise<boolean> {
      return getValue('ril.radio.disabled');
    },

    async enable(): Promise<void> {
      await self.wifi.disable();
      await self.bluetooth.disable();
      await self.cellularData.disable();
      await self.wifiTether.disable();
      await self.geolocation.disable();

      return setValue('ril.radio.disabled', true);
    },

    disable(): Promise<void> {
      return setValue('ril.radio.disabled', false);
    },
  };

  static geolocation = {
    async subscribe(callback: (enabled: boolean) => void) {
      return subscribe('geolocation.enabled', callback);
    },

    unsubscribe(observer: (evt: any) => void) {
      unsubscribe('geolocation.enabled', observer);
    },

    status(): Promise<boolean> {
      return getValue('geolocation.enabled');
    },

    enable(): Promise<void> {
      return setValue('geolocation.enabled', true);
    },

    disable(): Promise<void> {
      return setValue('geolocation.enabled', false);
    },
  };
}

async function subscribe(key: string, callback: (value: any) => void) {
  const initial = await getValue(key);
  callback(initial);

  const observer = function observer(evt) {
    callback(evt.settingValue);
  };

  Navigator.mozSettings.addObserver(key, observer);

  return observer;
}

function unsubscribe(key: string, observer: (evt: any) => void) {
  Navigator.mozSettings.removeObserver(key, observer);
}

function getValue<T = boolean>(key: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const req = Settings.getLock().get(key);
    req.onsuccess = function () {
      // console.log('getStatus', key, this.result[key]);
      resolve(this.result[key]);
    };
    req.onerror = function () {
      reject(new Error(this.error.name + ' ' + this.error.message));
    };
  });
}

function setValue(key: string, val: boolean | string | number): Promise<void> {
  return new Promise((resolve, reject) => {
    const req = Settings.getLock().set({ [key]: val });
    req.onsuccess = function () {
      resolve();
    };
    req.onerror = function () {
      reject(new Error(this.error.name + ' ' + this.error.message));
    };
  });
}

const self = Settings;
