import { Module } from '@nestjs/common';
import { RestaurnatsResolver } from './restaurnats.resolver';

@Module({
  providers: [RestaurnatsResolver],
})
export class RestaurnatsModule {}
