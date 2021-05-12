import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamController, TeamsController } from './teams.controller';

@Module({
  providers: [TeamsService],
  controllers: [TeamsController, TeamController],
})
export class TeamsModule {}
