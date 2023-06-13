import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurnatsResolver {
  @Query((returns) => Boolean)
  isPizzaGood(): boolean {
    return true;
  }
}
