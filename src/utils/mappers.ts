import type { Connection } from '../models';

export function toConnection(source: any): Connection {
  return {
    active: source.data.state === 'registered',
    name: source.data.network.longName,
    shortName: source.data.network.shortName,
    dataType: source.data.type,
    level: source.signalStrength.level,
  };
}
