import { ConflictException, ForbiddenException, HttpException, UseFilters } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { GqlExceptionHandler } from '../../../middlewares/exception';

@UseFilters(GqlExceptionHandler)
@Resolver()
export class Sample2_Resolver {
  @Query(() => String)
  samples2_1(): string {
    console.log('samples2_1 Called');
    console.log((null as any).b);

    throw new ForbiddenException('this is ForbiddenException');

    return '~~';
  }

  @Query(() => String)
  samples2_2(): string {
    console.log('samples2_2 Called');
    console.log((null as any).b);

    throw new ConflictException('this is ConflictException');

    return '~~';
  }
}
