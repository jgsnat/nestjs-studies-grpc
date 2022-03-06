import { Controller, Get, Param } from '@nestjs/common';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private service: HeroService) {}

  @Get(':id')
  async find(@Param('id') id: number): Promise<any> {
    return this.service.findById(id);
  }
}
