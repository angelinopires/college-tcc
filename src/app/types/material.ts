export interface Material {
  active: boolean;
  attendanceDate: string;
  createdAt: string;
  description: string;
  groupId: number; // TODO: deveria ser um ENUM
  id: number;
  unity: string;
  height?: number;
  weight?: number;
  width?: number;
}

export interface RequestMaterial extends Material {
  amount: number;
}
