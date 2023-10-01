export class CreateUserDto {
    readonly id: number;
    readonly full_name: string;
    readonly email: string;
    readonly password: string;
    readonly phone: string;
    readonly role: string;
    readonly is_delete: boolean;
    readonly create_at: string;
    readonly update_at: string;
  }
  