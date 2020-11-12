import { User, UserManager } from '@projectTypes/index'
import { Departments } from './departments'
import { Permissions } from './permissions'

export class Users {
  departments = new Departments()
  permissions = new Permissions()
  users: User[] = []

  constructor () {
    this.users = [
      {
        id: 1,
        name: "Henrique Pinheiro",
        email: "henrique@email.com.br",
        active: true,
        password: "Senha@2020",
        permission: this.permissions.getPermissionById(1),
        department: this.departments.getDepartmentById(1)
      },
      {
          id: 2,
          name: "Acacio Junior",
          email: "acacio@email.com.br",
          active: false,
          password: "Senha@2020",
          permission: this.permissions.getPermissionById(2),
          department: this.departments.getDepartmentById(2)
      },
      {
          id: 3,
          name: "Angelino Oliveira",
          email: "angelino@email.com.br",
          active: true,
          password: "Senha@2020",
          permission: this.permissions.getPermissionById(3),
          department: this.departments.getDepartmentById(3)
      },
      {
          id: 4,
          name: "Gilson Aparecido",
          email: "gilson@email.com.br",
          active: false,
          password: "Senha@2020",
          permission: this.permissions.getPermissionById(4),
          department: this.departments.getDepartmentById(4)
      }
    ]
  }

  public getUserById (id: number): User {
    return this.users.find(user => user.id === id)
  }

  public getAllUsers (): User[] {
    return this.users
  }
}
