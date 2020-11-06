import { Material, Requester } from '@projectTypes/index'

export interface Request {
  desiredDate: string;
  id: number;
  justification: string;
  materials: Material[];
  priority: string; // TODO: deveria ser um ENUM
  requestDate: string;
  requester: Requester;
  status: number; // TODO: deveria ser um ENUM
}
