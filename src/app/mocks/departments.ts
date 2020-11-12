import { Department } from '@projectTypes/index'

export class Departments {
  departments: Department[] = []

  constructor () {
    this.departments = [
      {
        id: 1,
        manager: {
          id: 1,
          name: "Henrique Pinheiro",
          email: "henrique@email.com.br",
          active: true,
          permission: {
            id: 1,
            description: "Administrador"
          },
        },
        description: "Departamento de Compras",
        active: true
      },
      {
        id: 2,
        manager: {
          id: 2,
          name: "Acacio Junior",
          email: "acacio@email.com.br",
          active: false,
          permission: {
            id: 1,
            description: "Administrador"
          },
        },
        description: "Departamento de Vendas",
        active: true
      },
      {
        id: 3,
        manager: {
          id: 3,
          name: "Angelino Oliveira",
          email: "angelino@email.com.br",
          active: true,
          permission: {
            id: 1,
            description: "Administrador"
          },
        },
        description: "Almoxarifado",
        active: true
      },
      {
        id: 4,
        manager: {
          id: 3,
          name: "Angelino Oliveira",
          email: "angelino@email.com.br",
          active: true,
          permission: {
            id: 3,
            description: "Básica"
          },
        },
        description: "Produção",
        active: true
      },
      {
        id: 5,
        manager: {
          id: 1,
          name: "Henrique Pinheiro",
          email: "henrique@email.com.br",
          active: true,
          permission: {
            id: 1,
            description: "Administrador"
          },
        },
        description: "Contas a Pagar",
        active: true
      },
      {
        id: 6,
        manager: {
          id: 4,
          name: "Gilson Aparecido",
          email: "gilson@email.com.br",
          active: false,
          permission: {
            id: 1,
            description: "Administrador"
          },
        },
        description: "Engenharia",
        active: false
      }
    ]
  }

  public getDepartmentById (id: number): Department {
    return this.departments.find(departament => departament.id === id)
  }

  public getAllDepartments (): Department[] {
    return this.departments
  }
}
