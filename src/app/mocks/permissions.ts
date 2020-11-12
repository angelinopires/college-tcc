import { Permission } from '@projectTypes/index'

export class Permissions {
  permissions: Permission[] = []

  constructor() {
    this.permissions = [
      {
        id: 1,
        description: "Administrador"
      },
      {
        id: 2,
        description: "Comprador"
      },
      {
        id: 3,
        description: "Básica"
      },
      {
        id: 4,
        description: "Fornecedor"
      }
    ]
  }

  public getPermissionById (id: number): Permission {
    return this.permissions.find(permission => permission.id === id)
  }

  public getAllPermissions (): Permission[] {
    return this.permissions
  }
}
