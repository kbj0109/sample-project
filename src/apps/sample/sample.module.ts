import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';
import { Sample1_Resolver } from './resolvers/sample1.resolver';
import { Sample2_Resolver } from './resolvers/sample2.resolver';

const resolverList = [Sample1_Resolver, Sample2_Resolver];

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: `./${path.basename(__dirname)}-schema.gql`,
      path: `/${path.basename(__dirname)}/graphql`,
      formatError(error) {
        // console.log(222, error);
        return error;
      },
      formatResponse(res, context) {
        // console.log(777, context.errors);
        // console.log(888, res.errors);
        // console.log(999, res);

        return res;
      },
      allowBatchedHttpRequests: false,
    }),
  ],
  providers: [...resolverList],
})
export class SampleModule {
  constructor() {
    console.log(`*** GraphQL Document is Ready at http://localhost:${3000}/${path.basename(__dirname)}/graphql`);
  }
}
