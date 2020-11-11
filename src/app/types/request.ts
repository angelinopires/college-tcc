import { RequestMaterial, User } from '@projectTypes/index'

export interface Request {
  desiredDate: string;
  id: number;
  justification: string;
  materials: RequestMaterial[];
  priority: string; // TODO: deveria ser um ENUM
  requestDate: string;
  requester: User;
  status: string; // TODO: deveria ser um ENUM
}
