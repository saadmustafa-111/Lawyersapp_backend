import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LawyerProfileService } from './lawyer-profile.service';
import { CreateLawyerProfileDto } from './dto/create-lawyer-profile.dto';
import { UpdateLawyerProfileDto } from './dto/update-lawyer-profile.dto';

@Controller('lawyer-profile')
export class LawyerProfileController {
  constructor(private readonly lawyerProfileService: LawyerProfileService) {}

  @Post()
  create(@Body() createLawyerProfileDto: CreateLawyerProfileDto) {
    return this.lawyerProfileService.create(createLawyerProfileDto);
  }

  @Get()
  findAll() {
    return this.lawyerProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lawyerProfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLawyerProfileDto: UpdateLawyerProfileDto) {
    return this.lawyerProfileService.update(+id, updateLawyerProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lawyerProfileService.remove(+id);
  }
}
