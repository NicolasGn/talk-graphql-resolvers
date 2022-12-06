import services, { Services } from 'services';

export interface Context {
  services: Services;
}

export const getContext = (): Context => {
  return {
    services,
  };
};
