import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import {
  CounterController,
  TeamController,
  TeamsController,
} from './teams.controller';

@Module({
  providers: [TeamsService],
  controllers: [TeamsController, TeamController, CounterController],
})
export class TeamsModule {}
