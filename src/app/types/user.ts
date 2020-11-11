export interface User {
  active: boolean,
  departmentId: number, // TODO: SHOULD BE ENUM
  email: string,
  id: number,
  name: string,
  password: string,
  permissionId: number // TODO: SHOULD BE ENUM
}
