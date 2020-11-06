export interface Material {
  active: boolean;
  amount: number;
  attendanceDate: string;
  createdAt: string;
  description: string;
  groupId: number; // TODO: deveria ser um ENUM
  height: number;
  id: number;
  unity: string;
  weight: number;
  width: number;
}
