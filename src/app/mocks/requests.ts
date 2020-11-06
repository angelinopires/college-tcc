import { Request } from '@projectTypes/index'
import { materials } from './materials'

const requests: Request[] = [
  {
    id: 1,
    requestDate: '2019-10-10T16:37:58.979Z',
    justification: 'Compras mensais do meu setor',
    priority: 'Baixa',
    status: 1,
    materials: materials,
    desiredDate: '2019-10-30T16:37:58.979Z',
    requester: {
      id: 1,
      name: 'Amarildo'
    }
  },
  {
    id: 2,
    requestDate: '2019-10-15T16:37:58.979Z',
    justification: 'Preciso desse material para trabalhar.',
    priority: 'Media',
    status: 2,
    materials: materials,
    desiredDate: '2019-10-19T16:37:58.979Z',
    requester: {
      id: 2,
      name: 'Clodoaldo'
    }
  },
  {
    id: 3,
    requestDate: '2019-10-20T16:37:58.979Z',
    justification: 'Estes materiais estao faltando na linha de producao!',
    priority: 'Critica',
    status: 3,
    materials: materials,
    desiredDate: '2019-10-20T16:37:58.979Z',
    requester: {
      id: 3,
      name: 'Ana'
    }
  },
]

export { requests }
