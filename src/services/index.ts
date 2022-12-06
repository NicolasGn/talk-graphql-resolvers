import usersService from './users';

const services = {
  users: usersService,
};

export type Services = typeof services;

export default services;
