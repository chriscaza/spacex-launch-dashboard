export type launchesData = {
  id: string;
  name: string;
  date_local: string;
  success: boolean;
  launchpad: string;
  rocket: string;
}

export type locationData = {
  id: string;
  region: string;
  latitude: number;
  longitude: number;
}

export type rocketData = {
  id: string;
  name: string;
}

export type filters = {
    rocketId: string;
    result: string;
    year: string;
    mission: string;
}