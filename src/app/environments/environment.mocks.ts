import { environment as base } from './environment.dev';

export const environment = {
  ...base,
  mocks: true,
  ssoUrl: 'http://localhost:8180',
  autonationUrl: 'http://localhost:8180'
};
