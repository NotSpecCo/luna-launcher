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
    status(): Promise<boolean> {
      return getStatus('ril.radio.disabled');
    },

    enable(): Promise<void> {
      return setEnabled('ril.radio.disabled', true);
    },

    disable(): Promise<void> {
      return setEnabled('ril.radio.disabled', false);
    },
  };
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
