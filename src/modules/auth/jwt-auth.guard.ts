/* eslint-disable prettier/prettier */
import {
    Injectable,
    ExecutionContext,
  } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';



@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    getRequest(context: ExecutionContext) {
      const ctx = GqlExecutionContext.create(context);
      return ctx.getContext().req;
    }
}