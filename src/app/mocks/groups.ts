import { Group } from '@projectTypes/index'

export class Groups {
  groups: Group[] = []

  constructor () {
    this.groups = [
      {
        id: 1,
        description: "Operacional"
      },
      {
        id: 2,
        description: "Admnistrativo"
      },
      {
        id: 3,
        description: "Escritório"
      },
      {
        id: 4,
        description: "Equipamento de proteção individual"
      },
      {
        id: 5,
        description: "Limpeza"
      }
    ]
  }

  public getGroupById (id: number): Group {
    return this.groups.find(group => group.id === id)
  }

  public getAllGroups (): Group[] {
    return this.groups
  }
}
