export enum ROLE {
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE',
}

export interface User {
  email: string;
  name: string;
  role: ROLE;
}
