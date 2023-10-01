// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return '<h1>BIENVENIDO A LA PRUEBA TECNICA ! <h1>';
//   }
// }

import { Injectable } from '@nestjs/common';
// import { UserRepository } from './user.repository';
import { CreateUserDto } from '../model-users/create-user.dto';

@Injectable()
export class UserService {
  // constructor(private readonly userRepository: UserRepository) {}

  getHello(): string {
     return '<h1>BIENVENIDO A LA PRUEBA TECNICA ! <h1>';
  }
  
  async registerUser(createUserDto: CreateUserDto) {
    // return await this.userRepository.createUser(createUserDto);
  }
}
