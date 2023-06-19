import { Args, Query, Resolver } from "@nestjs/graphql";
import { RestaurnatsEntity } from "./entities/restaurnats.entity";

//return 꼭 필요한건 아니다 , @Resolver() 이렇게 써도 무방함
@Resolver(of => RestaurnatsEntity)
export class RestaurnatsResolver {
  //graphql 과 typescript 가 타입을 정의하는데 조금씩 차이가 있음
  @Query(returns => [RestaurnatsEntity])
  //arg 추가하는 방법
  myRestaurnatsEntity(@Args('veganOnly') veganOnly: boolean): RestaurnatsEntity[] {
    console.log('veganOnly', veganOnly);
    return [];
  }
}
