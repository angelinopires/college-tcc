import { User } from '@projectTypes/index'

export const users: User[] = [
  {
    id: 1,
    name: "Henrique Pinheiro",
    email: "henrique@email.com.br",
    active: true,
    password: "Senha@2020",
    permissionId: 1,
    departmentId: 1
  },
  {
      id: 2,
      name: "Acacio Junior",
      email: "acacio@email.com.br",
      active: false,
      password: "Senha@2020",
      permissionId: 2,
      departmentId: 2
  },
  {
      id: 3,
      name: "Angelino Oliveira",
      email: "angelino@email.com.br",
      active: true,
      password: "Senha@2020",
      permissionId: 3,
      departmentId: 3
  },
  {
      id: 4,
      name: "Gilson Aparecido",
      email: "gilson@email.com.br",
      active: false,
      password: "Senha@2020",
      permissionId: 4,
      departmentId: 4
  }
]
