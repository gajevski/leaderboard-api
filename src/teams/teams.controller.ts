import { Team } from './../team';
import { TeamsService } from './teams.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  index() {
    return this.teamsService.findAll();
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number) {
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
@Controller('team')
export class TeamController {
  constructor(private readonly teamsService: TeamsService) {}

  @Put()
  create(@Body() counterExcist) {
    return this.teamsService.createCounter(counterExcist);
  }

  @Get()
  index() {
    return this.teamsService.findMyTeam();
  }
}
@Controller('counter')
export class CounterController {
  constructor(private readonly teamsService: TeamsService) {}

  @Put()
  increase(@Body() totalCount) {
    return this.teamsService.increaseCounter(totalCount);
  }
}
