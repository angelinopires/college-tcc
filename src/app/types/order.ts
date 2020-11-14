import { Provider } from './provider'

export interface Order {
  createdAt: string;
  deadlineDate: string;
  fare: number;
  id: number;
  provider: Provider;
  status: string;
}
