import { Query, Resolver } from '@nestjs/graphql';
import { RestaurnatsEntity } from "./entities/restaurnats.entity";

//return 꼭 필요한건 아니다 , @Resolver() 이렇게 써도 무방함
@Resolver(of => RestaurnatsEntity)
export class RestaurnatsResolver {
  @Query(returns => RestaurnatsEntity)
  myRestaurnatsEntity() {
    return true;
  }
}
