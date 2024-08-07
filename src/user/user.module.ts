import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserDAO } from './user.dao';
import { AuthenticateMiddleware } from 'src/authenticate/authenticate.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService, UserDAO],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticateMiddleware).forRoutes(UserController);
  }
}
