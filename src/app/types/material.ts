import { Group } from './groups'

export interface Material {
  active: boolean;
  attendanceDate: string;
  createdAt: string;
  description: string;
  group: Group;
  id: number;
  unity: string;
  height?: number;
  weight?: number;
  width?: number;
}

export interface RequestMaterial extends Material {
  amount: number;
}

export interface MaterialPrice extends RequestMaterial {
  unityPrice: number;
}
