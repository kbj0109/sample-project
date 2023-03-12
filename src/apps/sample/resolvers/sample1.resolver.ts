import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class Sample1_Resolver {
  @Query(() => String)
  samples1_1(): string {
    console.log('samples1_1 Called');
    console.log((null as any).b);

    throw new BadRequestException('this is BadRequestException');

    return '~~';
  }

  @Query(() => String)
  samples1_2(): string {
    console.log('samples1_2 Called');
    console.log((null as any).b);

    throw new NotFoundException('this is NotFoundException');

    return '~~';
  }
}
