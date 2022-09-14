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

  static bluetooth = {
    async subscribe(callback: (enabled: boolean) => void) {
      return subscribe('bluetooth.enabled', callback);
    },

    unsubscribe(observer: (evt: any) => void) {
      unsubscribe('bluetooth.enabled', observer);
    },

    status(): Promise<boolean> {
      return getStatus('bluetooth.enabled');
    },

    enable(): Promise<void> {
      return setEnabled('bluetooth.enabled', true);
    },

    disable(): Promise<void> {
      return setEnabled('bluetooth.enabled', false);
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
      return getStatus('wifi.enabled');
    },

    enable(): Promise<void> {
      return setEnabled('wifi.enabled', true);
    },

    disable(): Promise<void> {
      return setEnabled('wifi.enabled', false);
    },
  };

  static usbTethering = {
    async subscribe(callback: (enabled: boolean) => void) {
      return subscribe('tethering.usb.enabled', callback);
    },

    unsubscribe(observer: (evt: any) => void) {
      unsubscribe('tethering.usb.enabled', observer);
    },

    status(): Promise<boolean> {
      return getStatus('tethering.usb.enabled');
    },

    enable(): Promise<void> {
      return setEnabled('tethering.usb.enabled', true);
    },

    disable(): Promise<void> {
      return setEnabled('tethering.usb.enabled', false);
    },
  };

  static wifiTethering = {
    async subscribe(callback: (enabled: boolean) => void) {
      return subscribe('tethering.wifi.enabled', callback);
    },

    unsubscribe(observer: (evt: any) => void) {
      unsubscribe('tethering.wifi.enabled', observer);
    },

    status(): Promise<boolean> {
      return getStatus('tethering.wifi.enabled');
    },

    enable(): Promise<void> {
      return setEnabled('tethering.wifi.enabled', true);
    },

    disable(): Promise<void> {
      return setEnabled('tethering.wifi.enabled', false);
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
      return getStatus('ril.data.enabled');
    },

    enable(): Promise<void> {
      return setEnabled('ril.data.enabled', true);
    },

    disable(): Promise<void> {
      return setEnabled('ril.data.enabled', false);
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
      return getStatus('ril.radio.disabled');
    },

    async enable(): Promise<void> {
      await self.wifi.disable();
      await self.bluetooth.disable();
      await self.cellularData.disable();
      await self.wifiTethering.disable();

      return setEnabled('ril.radio.disabled', true);
    },

    disable(): Promise<void> {
      return setEnabled('ril.radio.disabled', false);
    },
  };
}

async function subscribe(key: string, callback: (enabled: boolean) => void) {
  const initial = await getStatus(key);
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

function getStatus(key: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const req = Settings.getLock().get(key);
    req.onsuccess = function () {
      // console.log('getStatus', key, this.result[key]);
      resolve(Boolean(this.result[key]));
    };
    req.onerror = function () {
      reject(new Error(this.error.name + ' ' + this.error.message));
    };
  });
}

function setEnabled(key: string, val: boolean): Promise<void> {
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
