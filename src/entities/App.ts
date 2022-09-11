import { Storage } from '../services/storage';
import { apps } from '../stores/apps';

export class App {
  private raw: any;

  constructor(source: any) {
    this.raw = source;
    const origins = Storage.getItem<string[]>('favoriteApps') || [];
    this.isFavorite = origins.includes(this.origin);
  }

  get origin(): string {
    return this.raw.origin;
  }

  get name(): string {
    return this.raw.manifest.name;
  }

  get description(): string {
    return this.raw.manifest.description;
  }

  get version(): string {
    return this.raw.manifest.version;
  }

  get preinstalled(): boolean {
    return this.raw.preinstalled;
  }

  get removable(): boolean {
    return this.raw.removable;
  }

  get role(): '' | 'system' | 'theme' | 'homescreen' | 'input' {
    return this.raw.role;
  }

  get installedAt(): string {
    return new Date(this.raw.installTime).toISOString();
  }

  get updatedAt(): string {
    return new Date(this.raw.updateTime).toISOString();
  }

  isFavorite = false;

  addFavorite() {
    apps.markFavorite(this.origin, true);
    this.isFavorite = true;
  }

  removeFavorite() {
    apps.markFavorite(this.origin, false);
    this.isFavorite = false;
  }

  getIconUrl(size: 'smallest' | 'largest'): string {
    const iconPath =
      size === 'largest'
        ? this.raw.manifest.icons?.['128'] ||
          this.raw.manifest.icons?.['112'] ||
          this.raw.manifest.icons?.['56']
        : this.raw.manifest.icons?.['56'] ||
          this.raw.manifest.icons?.['112'] ||
          this.raw.manifest.icons?.['128'];

    if (!iconPath) {
      return '/images/default_icon.png';
    }
    return `${this.origin}${iconPath}`;
  }

  launch() {
    this.raw.launch();
  }
}
