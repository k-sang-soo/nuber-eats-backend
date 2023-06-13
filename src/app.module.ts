import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RestaurnatsModule } from './restaurnats/restaurnats.module';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    //Code first 방식
    //Code first란 GraphQL 스키마를 코드로 정의하는 접근 방식
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      // 경로 지정시 해당 경로에 schema.graphql파일을 생성
      // autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),

      // true로 지정시 자동으로 메모리에 생성 (파일은 생성되지 않음)
      autoSchemaFile: true,
    }),
    RestaurnatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
