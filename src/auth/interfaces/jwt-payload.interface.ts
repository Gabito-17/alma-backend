import { ValidRoles } from './valid-roles';

export interface JwtPayload {
  id: string;
  role: ValidRoles[];
}
