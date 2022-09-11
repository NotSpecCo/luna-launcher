import { Animations, Density, TextSize, TextWeight } from 'onyx-ui/enums';
import { Storage } from 'onyx-ui/services';
import { writable } from 'svelte/store';
import type { Settings } from '../models';
import { themes } from '../themes';

const defaultSettings: Settings = {
  themeId: themes[1].id,
  textSize: TextSize.Medium,
  textWeight: TextWeight.Medium,
  displayDensity: Density.Normal,
  borderRadius: 0,
  animationSpeed: Animations.Fast,
  showHelpText: true,
  useAppMenu: true,
  appMenuWidth: 100,
  // Shortcuts
  enableShortcutKeys: true,
  shortcutKeyLocation: 'right',
  shortcutKeyColor: 'secondary',
  contextMenuIndicators: false,
  // Theme
  accentColorH: themes[1].values.accentColorH,
  accentColorS: themes[1].values.accentColorS,
  accentColorL: themes[1].values.accentColorL,
  cardColorH: themes[1].values.cardColorH,
  cardColorS: themes[1].values.cardColorS,
  cardColorL: themes[1].values.cardColorL,
  textColorH: themes[1].values.textColorH,
  textColorS: themes[1].values.textColorS,
  textColorL: themes[1].values.textColorL,
  focusColorA: themes[1].values.focusColorA,
  dividerColorA: themes[1].values.dividerColorA,
  // Toaster
  toasterLocation: 'bottom',
  toasterDuration: 3000,
  // App
  appListDisplay: 'list',
};

const storedSettings = Storage.get<Settings>('settings');

function createSettings() {
  const { subscribe, update } = writable<Settings>({
    ...defaultSettings,
    ...storedSettings,
  });

  subscribe((val) => {
    Storage.set('settings', val);
  });

  return {
    subscribe,
    update: function (data: Partial<Settings>) {
      update((previous) => ({ ...previous, ...data }));
    },
    updateOne: function <T extends keyof Settings>(key: T, value: Settings[T]) {
      update((previous) => ({ ...previous, [key]: value }));
    },
  };
}

export const settings = createSettings();
