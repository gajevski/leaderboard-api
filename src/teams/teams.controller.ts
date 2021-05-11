import { Teams } from './../teams';
import { Team } from './../team';
import { TeamsService } from './teams.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  async index(): Promise<Teams> {
    return this.teamsService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Team> {
    return this.teamsService.find(id);
  }

  @Post()
  create(@Body() team: Team) {
    this.teamsService.create(team);
  }

  @Put()
  update(@Body() team: Team) {
    return this.teamsService.update(team);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.teamsService.delete(id);
  }
}
