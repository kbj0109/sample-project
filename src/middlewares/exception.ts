import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';

@Catch()
export class GqlExceptionHandler implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): HttpException {
    const gqlHost = GqlArgumentsHost.create(host);

    console.log(1234, 'GqlExceptionFilter ', exception);

    return exception;
  }
}
