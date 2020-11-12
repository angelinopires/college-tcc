import { UserManager } from './user'

export interface Department {
  active: boolean;
  description: string;
  id: number;
  manager: UserManager;
}
