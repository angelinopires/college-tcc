import { Department } from './department'
import { Permission } from './permission'

export interface User {
  active: boolean;
  department: Department;
  email: string;
  id: number;
  name: string;
  password: string;
  permission: Permission;
}

export type UserManager = Omit<User, 'department' | 'password'>
