import { Department } from './department'
import { Permission } from './permission'
import { Provider } from './provider'

export interface User {
  active: boolean;
  department: Department | Provider;
  email: string;
  id: number;
  name: string;
  permission: Permission;
  password?: string;
}

export type UserManager = Omit<User, 'department' | 'password'>
