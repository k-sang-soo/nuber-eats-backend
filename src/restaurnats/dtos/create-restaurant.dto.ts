import { Args, ArgsType, Field } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";

//InputType은 하나의 object로 보면 됨, arg로써 GraphQl에 전달하기 위한 용도
//ArgsType은 기본적으로, 분리된 값들을 GraphQl arg로 전달해 줄 수 있도록 해줌, 하나의 object에 담는 게 아님
@ArgsType()
export class CreateRestaurantDto {
  @Field(type => String)
  @IsString() // 유효성 검사 , main.ts에 app.useGlobalPipes 추가 해야함
  @Length(5, 10)
  name:string;
  @Field(type => Boolean)
  @IsBoolean()
  isVegan:boolean;
  @Field(type => String)
  @IsString()
  address:string;
  @Field(type => String)
  @IsString()
  ownerName:string;
}