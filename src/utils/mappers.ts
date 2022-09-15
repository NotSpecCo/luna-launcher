import type { Connection, Contact } from '../models';

export function toConnection(source: any): Connection {
  return {
    active: source.data.state === 'registered',
    name: source.data.network.longName,
    shortName: source.data.network.shortName,
    dataType: source.data.type,
    level: source.signalStrength.level,
  };
}

export function toContact(source: any): Contact {
  const firstName = source.givenName[0];
  const lastName = source.familyName[0];
  const fullName = [firstName, lastName].filter(Boolean).join(' ');

  return {
    id: source.id,
    firstName,
    lastName,
    fullName,
    phoneNumber: source.tel[0]?.value,
  };
}
