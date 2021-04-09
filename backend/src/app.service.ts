import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Acesse http://localhost:3001/' ;
  }
}
